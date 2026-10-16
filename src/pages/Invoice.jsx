import { useState } from 'react';
import { Link } from 'react-router-dom';
import { numberToWordsINR } from '../utils/numberToWords';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';

// Preset Catalog Items for Quick Adding
const CATALOG_PRESETS = [
  {
    name: 'Botanical Hair Shampoo (50ml Luxury Bottle)',
    description: 'Enriched with Hibiscus, Aloe Vera & Argan Oil in eco-friendly recyclable bottle',
    hsn: '3305',
    unit: 'Bottles',
    rate: 45,
    taxRate: 18,
    qty: 250,
  },
  {
    name: 'Botanical Hair Conditioner (50ml Luxury Bottle)',
    description: 'Nourishing formula with Shea Butter & Jojoba Oil',
    hsn: '3305',
    unit: 'Bottles',
    rate: 45,
    taxRate: 18,
    qty: 250,
  },
  {
    name: 'Nourishing Body Wash (50ml Luxury Bottle)',
    description: 'Botanical gentle cleansing gel with Jasmine & Green Tea extracts',
    hsn: '3307',
    unit: 'Bottles',
    rate: 42,
    taxRate: 18,
    qty: 250,
  },
  {
    name: 'Hydrating Body Lotion (50ml Luxury Bottle)',
    description: 'Deep moisture botanical blend with Sweet Almond Oil & Vitamin E',
    hsn: '3304',
    unit: 'Bottles',
    rate: 48,
    taxRate: 18,
    qty: 250,
  },
  {
    name: 'Artisanal Glycerin Guest Soap (35g Boxed)',
    description: 'Triple-milled cold-pressed botanical soap in virgin kraft paper packaging',
    hsn: '3401',
    unit: 'Bars',
    rate: 26,
    taxRate: 18,
    qty: 500,
  },
  {
    name: 'Biodegradable Bamboo Dental Kit',
    description: 'Organic moso bamboo toothbrush with charcoal bristles + 15g herbal toothpaste in kraft sleeve',
    hsn: '9603',
    unit: 'Kits',
    rate: 32,
    taxRate: 12,
    qty: 300,
  },
  {
    name: 'Eco Shaving Kit (Wheat-Straw Razor & Cream)',
    description: 'Biodegradable wheat-straw double blade razor + 15g organic shave cream',
    hsn: '8212',
    unit: 'Kits',
    rate: 36,
    taxRate: 18,
    qty: 200,
  },
  {
    name: 'Natural Neem Wood Comb',
    description: 'Handcrafted anti-static herbal neem wood comb in unbleached paper box',
    hsn: '9615',
    unit: 'Pieces',
    rate: 24,
    taxRate: 12,
    qty: 300,
  },
  {
    name: 'Natural Loofah & Sisal Bath Pad',
    description: '100% natural Egyptian loofah exfoliating pad with cotton lanyard',
    hsn: '4602',
    unit: 'Pieces',
    rate: 28,
    taxRate: 12,
    qty: 200,
  },
  {
    name: 'Presidential Suite VIP Gift Hamper Box',
    description: 'Handmade luxury rigid magnetic gift box containing full botanical amenities set + soy candle',
    hsn: '3307',
    unit: 'Sets',
    rate: 1650,
    taxRate: 18,
    qty: 50,
  },
  {
    name: 'Wall-Mounted Amber Refill Dispenser Set (300ml x 3)',
    description: 'Tamper-proof lockable stainless steel bracket with 3 luxury amber bottles',
    hsn: '3924',
    unit: 'Sets',
    rate: 980,
    taxRate: 18,
    qty: 40,
  },
  {
    name: 'Botanical Shampoo Bulk Refill Canister (5 Litre)',
    description: 'Zero-waste eco refill solution for wall dispensers with dispenser pump',
    hsn: '3305',
    unit: 'Canisters',
    rate: 2200,
    taxRate: 18,
    qty: 8,
  },
];

const INITIAL_INVOICE = {
  identityTitle: 'Document Identity & Meta',
  docType: 'TAX INVOICE', // 'TAX INVOICE' | 'PROFORMA INVOICE' | 'COMMERCIAL QUOTATION'
  invoiceNumber: 'VE/2026/0418',
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
  poNumber: 'PO-HTL-8942',
  status: 'Pending Advance (50%)', // 'Paid' | 'Pending Advance (50%)' | 'Unpaid' | 'Approved'
  taxType: 'intra', // 'intra' (CGST+SGST) | 'inter' (IGST) | 'none'
  shippingCharge: 1200,
  discountOverall: 5, // percentage
  currency: '₹',

  // Seller Details
  seller: {
    name: 'VAIDURE ESSENTIAL',
    tagline: 'Where Nature Feels Luxurious',
    address: 'Orbit Mall, A.B. Road, Vijay Nagar, Indore, Madhya Pradesh - 452010',
    phone: '+91 95227 00027',
    email: 'info@vaidure.com',
    website: 'www.vaidure.com',
    gstin: '23AAAFV9821Q1Z8',
    pan: 'AAAFV9821Q',
    state: 'Madhya Pradesh',
    stateCode: '23',
  },

  // Client Details
  client: {
    company: 'The Oberoi Grand & Spa Resort',
    contactPerson: 'Mr. Rajesh Mehra (Procurement Director)',
    email: 'procurement@oberoihotels.sample',
    phone: '+91 98765 43210',
    billingAddress: '15, Marina Promenade, Heritage Boulevard, Mumbai, Maharashtra - 400001',
    shippingAddress: 'Central Receiving Dock, Gate 3, The Oberoi Grand & Spa Resort, Mumbai - 400001',
    gstin: '27AABCT3421K1ZM',
    state: 'Maharashtra',
    stateCode: '27',
    placeOfSupply: 'Maharashtra (27)',
  },

  // Line items
  items: [
    {
      id: 'item-1',
      name: 'Botanical Hair Shampoo (50ml Luxury Bottle)',
      description: 'Custom Gold Foil Embossed Cap with Hotel Monogram',
      hsn: '3305',
      unit: 'Bottles',
      qty: 600,
      rate: 45,
      taxRate: 18,
    },
    {
      id: 'item-2',
      name: 'Botanical Hair Conditioner (50ml Luxury Bottle)',
      description: 'Organic botanical formulation with Shea Butter & Jojoba',
      hsn: '3305',
      unit: 'Bottles',
      qty: 600,
      rate: 45,
      taxRate: 18,
    },
    {
      id: 'item-3',
      name: 'Nourishing Body Wash (50ml Luxury Bottle)',
      description: 'Gentle moisturizing cleansing formula with Green Tea & Jasmine',
      hsn: '3307',
      unit: 'Bottles',
      qty: 600,
      rate: 42,
      taxRate: 18,
    },
    {
      id: 'item-4',
      name: 'Biodegradable Bamboo Dental Kit',
      description: 'Organic bamboo handle + 15g herbal toothpaste in unbleached kraft sleeve',
      hsn: '9603',
      unit: 'Kits',
      qty: 500,
      rate: 32,
      taxRate: 12,
    },
    {
      id: 'item-5',
      name: 'Artisanal Glycerin Guest Soap (35g)',
      description: 'Triple-milled cold pressed soap with monogram embossing',
      hsn: '3401',
      unit: 'Bars',
      qty: 800,
      rate: 26,
      taxRate: 18,
    },
    {
      id: 'item-6',
      name: 'Presidential Suite VIP Gift Hamper Box',
      description: 'Handcrafted rigid velvet touch keepsake box with complete luxury amenity suite',
      hsn: '3307',
      unit: 'Sets',
      qty: 35,
      rate: 1650,
      taxRate: 18,
    },
  ],

  // Bank Info
  bank: {
    bankName: 'HDFC Bank Ltd.',
    accountName: 'VAIDURE ESSENTIAL',
    accountNumber: '50200084920192',
    ifsc: 'HDFC0001234',
    branch: 'Vijay Nagar Branch, Indore',
    upiId: 'vaidure@hdfcbank',
  },

  // Terms & Notes
  notes: 'Thank you for choosing VAIDURE for your guest experience. Custom logo plates and tooling are preserved for repeat hospitality production batches.',
  terms: [
    '50% advance payment along with confirmed Purchase Order to commence bespoke packaging production.',
    'Balance 50% payable against dispatch inspection & warehouse release confirmation.',
    'Dispatched consignments must be reported for transit damages or discrepancies within 48 hours.',
    'All disputes subject to Indore, Madhya Pradesh jurisdiction only.',
  ],

  // Signatory & Footer
  signatory: {
    company: 'VAIDURE ESSENTIAL',
    signText: 'Vaidure Essential',
    title: 'Authorized Signatory',
  },
  footerNote: 'This is a computer-generated luxury hospitality document issued by VAIDURE ESSENTIAL • Orbit Mall, Vijay Nagar, Indore (M.P.) • info@vaidure.com',
  // Dynamic Custom Sections
  customSections: [],
};

// ── Credentials Management (Default admin / 1992 + Custom Password) ──
const DEFAULT_ADMIN_CREDS = {
  username: 'admin',
  password: '1992',
};

const getStoredAdminCreds = () => {
  try {
    const saved = localStorage.getItem('ve_invoice_creds');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed.password === 'string' && parsed.password.trim() !== '') {
        return {
          username: parsed.username?.trim() || 'admin',
          password: parsed.password.trim(),
        };
      }
    }
  } catch (err) {
    console.error('Failed to read ve_invoice_creds', err);
  }
  return DEFAULT_ADMIN_CREDS;
};

export default function Invoice() {
  const [data, setData] = useState(INITIAL_INVOICE);
  const [activeTab, setActiveTab] = useState('both'); // 'both' | 'preview' | 'editor'
  const [showCatalogModal, setShowCatalogModal] = useState(false);
  const [savedNotice, setSavedNotice] = useState('');
  const [downloadedPdfInfo, setDownloadedPdfInfo] = useState(null); // { url, filename }
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // ── Authentication & Security Gate (admin / 1992 + Custom Password) ──
  const [customCreds, setCustomCreds] = useState(getStoredAdminCreds);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('ve_invoice_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [loginUsername, setLoginUsername] = useState(() => getStoredAdminCreds().username || 'admin');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // ── Private Password State ──
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pwdCurrentInput, setPwdCurrentInput] = useState('');
  const [pwdNewUsername, setPwdNewUsername] = useState(() => getStoredAdminCreds().username || 'admin');
  const [pwdNewInput, setPwdNewInput] = useState('');
  const [pwdConfirmInput, setPwdConfirmInput] = useState('');
  const [pwdModalError, setPwdModalError] = useState('');
  const [pwdModalSuccess, setPwdModalSuccess] = useState('');
  const [showModalPrevPassword, setShowModalPrevPassword] = useState(false);
  const [showModalNewPassword, setShowModalNewPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const active = getStoredAdminCreds();
    const user = loginUsername.trim().toLowerCase();
    const pass = loginPassword.trim();

    // Private authentication: strictly verify active credentials
    if (user === active.username.toLowerCase() && pass === active.password) {
      setIsAuthenticated(true);
      setLoginError('');
      try {
        sessionStorage.setItem('ve_invoice_auth', 'true');
      } catch (err) {
        console.error(err);
      }
    } else {
      setLoginError('Invalid credentials. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginPassword('');
    try {
      sessionStorage.removeItem('ve_invoice_auth');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveCustomPassword = (e) => {
    e.preventDefault();
    setPwdModalError('');
    setPwdModalSuccess('');

    const active = getStoredAdminCreds();
    const prevEntered = pwdCurrentInput.trim();

    // 1. Strictly verify the previous password
    if (prevEntered !== active.password) {
      setPwdModalError('Previous password incorrect. Please enter your valid current password.');
      return;
    }

    // 2. Validate new password
    if (!pwdNewInput.trim()) {
      setPwdModalError('New password cannot be blank.');
      return;
    }

    if (pwdNewInput.trim() === active.password) {
      setPwdModalError('New password cannot be identical to your previous password.');
      return;
    }

    // 3. Confirm new password matches
    if (pwdNewInput.trim() !== pwdConfirmInput.trim()) {
      setPwdModalError('New passwords do not match. Please verify and retry.');
      return;
    }

    const updated = {
      username: (pwdNewUsername.trim() || active.username || 'admin').toLowerCase(),
      password: pwdNewInput.trim(),
    };

    try {
      localStorage.setItem('ve_invoice_creds', JSON.stringify(updated));
      setCustomCreds(updated);
      setLoginUsername(updated.username);
      setPwdModalSuccess('Password updated successfully! Keep your new password private.');
      setTimeout(() => {
        setShowPasswordModal(false);
        setPwdModalSuccess('');
        setPwdCurrentInput('');
        setPwdNewInput('');
        setPwdConfirmInput('');
      }, 1400);
    } catch (err) {
      console.error(err);
      setPwdModalError('Could not save new password to storage.');
    }
  };

  // Accordion state - all sections have typing access open by default
  const [openSections, setOpenSections] = useState({
    identity: true,
    seller: true,
    client: true,
    items: true,
    tax: true,
    bank: true,
    terms: true,
    notes: true,
    signatory: true,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const expandAll = () => {
    const updated = {
      identity: true,
      seller: true,
      client: true,
      items: true,
      tax: true,
      bank: true,
      terms: true,
      notes: true,
      signatory: true,
    };
    (data.customSections || []).forEach((sec) => {
      updated[sec.id] = true;
    });
    setOpenSections(updated);
  };

  const collapseAll = () => {
    const updated = {
      identity: false,
      seller: false,
      client: false,
      items: false,
      tax: false,
      bank: false,
      terms: false,
      notes: false,
      signatory: false,
    };
    (data.customSections || []).forEach((sec) => {
      updated[sec.id] = false;
    });
    setOpenSections(updated);
  };

  const scrollToSection = (secKey) => {
    setOpenSections((prev) => ({ ...prev, [secKey]: true }));
    if (activeTab === 'preview') {
      setActiveTab('both');
    }
    setTimeout(() => {
      const el = document.getElementById(`editor-sec-${secKey}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('highlight-section');
        const inputToFocus = el.querySelector('input:not([type="hidden"]), textarea, select');
        if (inputToFocus) {
          inputToFocus.focus();
        }
        setTimeout(() => el.classList.remove('highlight-section'), 1800);
      }
    }, 120);
  };

  // Calculations
  const calculateTotals = () => {
    let subtotal = 0;
    let totalTax = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;

    const taxTypeStr = (data.taxType || '').toLowerCase().trim();
    const isTaxExempt =
      taxTypeStr === 'none' ||
      taxTypeStr.includes('exempt') ||
      taxTypeStr.includes('zero') ||
      taxTypeStr.includes('nil') ||
      taxTypeStr.includes('without tax') ||
      taxTypeStr.includes('lut');

    const isInterState =
      !isTaxExempt &&
      (taxTypeStr === 'inter' ||
        taxTypeStr.includes('inter') ||
        taxTypeStr.includes('igst'));

    const isIntraState =
      !isTaxExempt &&
      !isInterState &&
      (taxTypeStr === 'intra' ||
        taxTypeStr.includes('intra') ||
        taxTypeStr.includes('cgst') ||
        taxTypeStr.includes('sgst') ||
        taxTypeStr === '');

    const isCustomTax = !isTaxExempt && !isInterState && !isIntraState;

    data.items.forEach((item) => {
      const itemSub = (item.qty || 0) * (item.rate || 0);
      subtotal += itemSub;

      if (!isTaxExempt) {
        const rateNum = parseFloat(String(item.taxRate ?? '0').replace(/[^0-9.]/g, '')) || 0;
        const itemTax = (itemSub * rateNum) / 100;
        totalTax += itemTax;

        if (isIntraState) {
          cgst += itemTax / 2;
          sgst += itemTax / 2;
        } else if (isInterState) {
          igst += itemTax;
        } else {
          igst += itemTax;
        }
      }
    });

    const discountAmount = (subtotal * (Number(data.discountOverall) || 0)) / 100;
    const taxableAmount = Math.max(0, subtotal - discountAmount);

    // Proportionate tax after discount
    const taxFactor = subtotal > 0 ? taxableAmount / subtotal : 1;
    const adjustedTax = totalTax * taxFactor;
    const adjustedCgst = cgst * taxFactor;
    const adjustedSgst = sgst * taxFactor;
    const adjustedIgst = igst * taxFactor;

    const shipping = Number(data.shippingCharge) || 0;
    const grandTotal = Math.round(taxableAmount + adjustedTax + shipping);

    return {
      subtotal,
      discountAmount,
      taxableAmount,
      cgst: adjustedCgst,
      sgst: adjustedSgst,
      igst: adjustedIgst,
      totalTax: adjustedTax,
      shipping,
      grandTotal,
      isTaxExempt,
      isIntraState,
      isInterState,
      isCustomTax,
    };
  };

  const totals = calculateTotals();

  // Handlers for specific sections
  const handleSellerChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      seller: { ...prev.seller, [field]: value },
    }));
  };

  const handleClientChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      client: { ...prev.client, [field]: value },
    }));
  };

  const handleBankChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      bank: { ...prev.bank, [field]: value },
    }));
  };

  const handleSignatoryChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      signatory: { ...(prev.signatory || {}), [field]: value },
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...data.items];
    let val = value;
    if (field === 'qty' || field === 'rate') {
      val = value === '' ? '' : Number(value);
    }
    updated[index] = {
      ...updated[index],
      [field]: val,
    };
    setData({ ...data, items: updated });
  };

  const handleDuplicateItem = (index) => {
    const itemToDup = data.items[index];
    const duplicated = {
      ...itemToDup,
      id: 'item-' + Date.now() + Math.random().toString(36).substr(2, 4),
      name: `${itemToDup.name} (Copy)`,
    };
    const updated = [...data.items];
    updated.splice(index + 1, 0, duplicated);
    setData({ ...data, items: updated });
  };

  const handleMoveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= data.items.length) return;
    const updated = [...data.items];
    const temp = updated[index];
    updated[index] = updated[newIndex];
    updated[newIndex] = temp;
    setData({ ...data, items: updated });
  };

  const handleAddItem = (preset = null) => {
    const newItem = preset
      ? { ...preset, id: 'item-' + Date.now() + Math.random().toString(36).substr(2, 4) }
      : {
        id: 'item-' + Date.now(),
        name: 'Custom Amenity / Formulation Item',
        description: 'Custom formulation & bespoke packaging specification',
        hsn: '3307',
        unit: 'Bottles',
        qty: 100,
        rate: 50,
        taxRate: 18,
      };
    setData({ ...data, items: [...data.items, newItem] });
    if (preset) setShowCatalogModal(false);
  };

  const handleRemoveItem = (index) => {
    if (data.items.length <= 1) {
      alert('Invoice must have at least one line item.');
      return;
    }
    const updated = data.items.filter((_, i) => i !== index);
    setData({ ...data, items: updated });
  };

  const handleAddTerm = () => {
    setData({
      ...data,
      terms: [...data.terms, 'Custom delivery, return or payment condition.'],
    });
  };

  const handleUpdateTerm = (index, value) => {
    const updated = [...data.terms];
    updated[index] = value;
    setData({ ...data, terms: updated });
  };

  const handleRemoveTerm = (index) => {
    if (data.terms.length <= 1) {
      alert('At least one commercial term is recommended.');
      return;
    }
    const updated = data.terms.filter((_, i) => i !== index);
    setData({ ...data, terms: updated });
  };

  const handleResetTerms = () => {
    setData({
      ...data,
      terms: [
        '50% advance payment along with confirmed Purchase Order to commence bespoke packaging production.',
        'Balance 50% payable against dispatch inspection & warehouse release confirmation.',
        'Dispatched consignments must be reported for transit damages or discrepancies within 48 hours.',
        'All disputes subject to Indore, Madhya Pradesh jurisdiction only.',
      ],
    });
  };

  // ── Custom Dynamic Section Handlers ──
  const handleAddCustomSection = (type = 'dispatch') => {
    const id = 'cs_' + Date.now();
    let newSec = {
      id,
      title: 'Custom Specification Block',
      icon: '📋',
      position: 'after_client',
      type: 'fields',
      notes: '',
      fields: [
        { label: 'Field Name', value: 'Value' },
      ],
    };

    if (type === 'dispatch') {
      newSec = {
        id,
        title: 'Dispatch & Logistics Details',
        icon: '🚚',
        position: 'after_client',
        type: 'fields',
        notes: '',
        fields: [
          { label: 'Transporter Name', value: 'Blue Dart / SafeExpress' },
          { label: 'LR / Tracking #', value: 'TRK-2026-9912' },
          { label: 'Vehicle Number', value: 'MP-09-AB-1234' },
          { label: 'Delivery Dock', value: 'Gate 3 - Receiving Bay' },
        ],
      };
    } else if (type === 'quality') {
      newSec = {
        id,
        title: 'Quality & Batch Compliance',
        icon: '🛡️',
        position: 'after_items',
        type: 'fields',
        notes: 'Manufactured under ISO 22716 & GMP certified botanical cleanroom standards.',
        fields: [
          { label: 'Batch / Lot #', value: 'VE-BN-2026-04' },
          { label: 'Mfg Date', value: '10/2026' },
          { label: 'Expiry / Shelf Life', value: '24 Months' },
          { label: 'QA Certification', value: 'Passed - Grade A' },
        ],
      };
    } else if (type === 'notes') {
      newSec = {
        id,
        title: 'Special Hospitality Declaration',
        icon: '📝',
        position: 'footer',
        type: 'notes',
        notes: 'Custom fragrance formulation & eco-friendly wheat-straw packaging certified 100% biodegradable.',
        fields: [],
      };
    }

    setData((prev) => ({
      ...prev,
      customSections: [...(prev.customSections || []), newSec],
    }));
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    setSavedNotice(`Custom section "${newSec.title}" added!`);
    setTimeout(() => setSavedNotice(''), 3000);
  };

  const handleUpdateCustomSection = (id, key, val) => {
    setData((prev) => ({
      ...prev,
      customSections: (prev.customSections || []).map((sec) =>
        sec.id === id ? { ...sec, [key]: val } : sec
      ),
    }));
  };

  const handleRemoveCustomSection = (id) => {
    setData((prev) => ({
      ...prev,
      customSections: (prev.customSections || []).filter((sec) => sec.id !== id),
    }));
  };

  const handleAddCustomField = (secId) => {
    setData((prev) => ({
      ...prev,
      customSections: (prev.customSections || []).map((sec) => {
        if (sec.id === secId) {
          return {
            ...sec,
            fields: [...(sec.fields || []), { label: '', value: '' }],
          };
        }
        return sec;
      }),
    }));
  };

  const handleUpdateCustomField = (secId, fieldIdx, key, val) => {
    setData((prev) => ({
      ...prev,
      customSections: (prev.customSections || []).map((sec) => {
        if (sec.id === secId) {
          const nextFields = [...(sec.fields || [])];
          nextFields[fieldIdx] = { ...nextFields[fieldIdx], [key]: val };
          return { ...sec, fields: nextFields };
        }
        return sec;
      }),
    }));
  };

  const handleRemoveCustomField = (secId, fieldIdx) => {
    setData((prev) => ({
      ...prev,
      customSections: (prev.customSections || []).map((sec) => {
        if (sec.id === secId) {
          return {
            ...sec,
            fields: (sec.fields || []).filter((_, idx) => idx !== fieldIdx),
          };
        }
        return sec;
      }),
    }));
  };

  const renderCustomPaperSection = (sec) => (
    <div
      key={sec.id}
      className="section-hover-wrapper no-break"
      style={{
        background: '#faf9f6',
        padding: '1rem 1.25rem',
        borderRadius: 4,
        border: '1px solid #ede8de',
        marginBottom: '1.75rem',
        fontSize: '0.78rem',
        position: 'relative',
      }}
    >
      <button
        type="button"
        onClick={() => scrollToSection(sec.id)}
        className="screen-only section-edit-pill"
        title="Click to edit custom section in sidebar"
      >
        ✎ Edit {sec.title}
      </button>
      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>{sec.icon || '📋'}</span>
        <span>{sec.title}</span>
      </div>
      {(sec.type === 'notes' || (sec.type || '').toLowerCase().includes('text') || (sec.type || '').toLowerCase().includes('note') || (sec.type || '').toLowerCase().includes('para')) ? (
        <div style={{ color: '#444', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{sec.notes || '-'}</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem 1.25rem' }}>
          {(sec.fields || []).map((f, fIdx) => (
            <div key={fIdx}>
              <div style={{ fontSize: '0.65rem', color: '#777', textTransform: 'uppercase', fontWeight: 600 }}>{f.label || 'Field'}</div>
              <div style={{ fontWeight: 600, color: '#111', marginTop: 1 }}>{f.value || '-'}</div>
            </div>
          ))}
        </div>
      )}
      {sec.notes && !(sec.type === 'notes' || (sec.type || '').toLowerCase().includes('text') || (sec.type || '').toLowerCase().includes('note') || (sec.type || '').toLowerCase().includes('para')) && (
        <div style={{ fontSize: '0.72rem', color: '#555', marginTop: 8, borderTop: '1px dashed #e2ddd3', paddingTop: 6, lineHeight: 1.45 }}>
          {sec.notes}
        </div>
      )}
    </div>
  );

  const handlePrint = () => {
    window.print();
  };

  const generateInvoicePdfDoc = async () => {
    const previousTab = activeTab;
    if (activeTab === 'editor') {
      setActiveTab('both');
      await new Promise((resolve) => setTimeout(resolve, 350));
    }

    const element = document.getElementById('printable-invoice-paper');
    if (!element) {
      throw new Error('Invoice paper element not found');
    }

    element.classList.add('generating-pdf');
    await new Promise((resolve) => setTimeout(resolve, 150));

    try {
      const rawDocNum = data.invoiceNumber || 'Invoice';
      const sanitizedDocNum = String(rawDocNum)
        .replace(/[/\\?%*:|"<> ]/g, '_')
        .replace(/^_+|_+$/g, '') || 'Invoice';
      const sanitizedCompany = data.client?.company
        ? String(data.client.company).replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20)
        : 'Hospitality';
      const filename = `${sanitizedDocNum}_${sanitizedCompany}.pdf`;

      const resolveHtml2Canvas = () => {
        if (typeof html2canvas === 'function') return html2canvas;
        if (html2canvas && typeof html2canvas.default === 'function') return html2canvas.default;
        if (html2canvas && typeof html2canvas.t === 'function') return html2canvas.t();
        return null;
      };

      const resolveJsPDF = () => {
        if (typeof jsPDF === 'function') return jsPDF;
        if (typeof jsPDF?.default === 'function') return jsPDF.default;
        return null;
      };

      const h2c = resolveHtml2Canvas();
      const PDFDoc = resolveJsPDF();

      if (!h2c || !PDFDoc) {
        const resolveHtml2Pdf = () => {
          if (typeof html2pdf === 'function') return html2pdf;
          if (html2pdf && typeof html2pdf.default === 'function') return html2pdf.default;
          return null;
        };
        const h2p = resolveHtml2Pdf();
        if (h2p) {
          const opt = {
            margin: [8, 8, 8, 8],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, allowTaint: false, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          const pdfBlob = await h2p().set(opt).from(element).outputPdf('blob');
          const file = new File([pdfBlob], filename, { type: 'application/pdf' });
          const fileUrl = window.URL.createObjectURL(file);
          return { pdfBlob, filename, fileUrl, pdf: null, dataUri: null };
        }
        throw new Error('PDF generation libraries could not be initialized');
      }

      const canvas = await h2c(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        letterRendering: true,
        logging: false,
        backgroundColor: '#ffffff',
        ignoreElements: (el) =>
          el.classList?.contains('screen-only') ||
          el.classList?.contains('section-edit-pill') ||
          el.hasAttribute?.('data-html2canvas-ignore'),
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      const pdf = new PDFDoc({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = Number(pdf.internal.pageSize.width) || 210;
      const pdfHeight = Number(pdf.internal.pageSize.height) || 297;
      const margin = 8;
      const printableWidth = pdfWidth - margin * 2;
      const printableHeight = (canvas.height * printableWidth) / canvas.width;
      const maxPageContentHeight = pdfHeight - margin * 2;

      if (printableHeight <= maxPageContentHeight) {
        pdf.addImage(imgData, 'JPEG', margin, margin, printableWidth, printableHeight);
      } else if (printableHeight <= maxPageContentHeight * 1.35) {
        const scale = maxPageContentHeight / printableHeight;
        const renderWidth = printableWidth * scale;
        const renderHeight = maxPageContentHeight;
        const xOffset = margin + (printableWidth - renderWidth) / 2;
        pdf.addImage(imgData, 'JPEG', xOffset, margin, renderWidth, renderHeight);
      } else {
        const domRect = element.getBoundingClientRect();
        const canvasScale = canvas.width / element.offsetWidth;
        const maxPageCanvasPx = Math.floor((canvas.width * maxPageContentHeight) / printableWidth);

        const breakAvoidElements = Array.from(
          element.querySelectorAll(
            'tr, .invoice-doc-header, .invoice-client-grid, .invoice-bottom-grid, .invoice-footer-grid, .print-fineprint, .section-hover-wrapper'
          )
        );

        const cutPoints = [0];
        let currentCanvasY = 0;

        while (currentCanvasY + maxPageCanvasPx < canvas.height) {
          const targetCutCanvasY = currentCanvasY + maxPageCanvasPx;
          let bestCutCanvasY = -1;

          for (const el of breakAvoidElements) {
            const elTop = (el.getBoundingClientRect().top - domRect.top) * canvasScale;
            const elBottom = (el.getBoundingClientRect().bottom - domRect.top) * canvasScale;

            if (elTop > currentCanvasY + 80 && elTop < targetCutCanvasY && elBottom > targetCutCanvasY) {
              bestCutCanvasY = Math.floor(elTop);
              break;
            }
          }

          if (bestCutCanvasY <= currentCanvasY + 80) {
            for (const el of breakAvoidElements) {
              const elBottom = (el.getBoundingClientRect().bottom - domRect.top) * canvasScale;
              if (elBottom > currentCanvasY + 80 && elBottom <= targetCutCanvasY) {
                if (elBottom > bestCutCanvasY) {
                  bestCutCanvasY = Math.floor(elBottom);
                }
              }
            }
          }

          if (bestCutCanvasY <= currentCanvasY + 80) {
            bestCutCanvasY = targetCutCanvasY;
          }

          cutPoints.push(bestCutCanvasY);
          currentCanvasY = bestCutCanvasY;
        }
        cutPoints.push(canvas.height);

        for (let i = 0; i < cutPoints.length - 1; i++) {
          if (i > 0) pdf.addPage();

          const sliceStart = cutPoints[i];
          const sliceHeight = cutPoints[i + 1] - sliceStart;
          if (sliceHeight <= 0) continue;

          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeight;

          const pageCtx = pageCanvas.getContext('2d');
          pageCtx.fillStyle = '#ffffff';
          pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          pageCtx.drawImage(
            canvas,
            0,
            sliceStart,
            canvas.width,
            sliceHeight,
            0,
            0,
            canvas.width,
            sliceHeight
          );

          const sliceData = pageCanvas.toDataURL('image/jpeg', 0.98);
          const slicePrintHeight = (sliceHeight * printableWidth) / canvas.width;
          pdf.addImage(sliceData, 'JPEG', margin, margin, printableWidth, slicePrintHeight);
        }
      }

      const pdfBlob = pdf.output('blob');
      const file = new File([pdfBlob], filename, { type: 'application/pdf' });
      const fileUrl = window.URL.createObjectURL(file);
      let dataUri = null;
      try {
        dataUri = pdf.output('datauristring', { filename });
      } catch (dErr) {
        console.warn('Data URI creation note:', dErr);
      }

      return { pdf, pdfBlob, file, fileUrl, filename, dataUri };
    } finally {
      element.classList.remove('generating-pdf');
      if (previousTab === 'editor') {
        setActiveTab('editor');
      }
    }
  };

  const triggerSafeDownload = (fileUrl, filename, dataUri) => {
    const safeName = filename.toLowerCase().endsWith('.pdf') ? filename : `${filename}.pdf`;

    // Strategy 1: Programmatic anchor with explicit File Object URL & proper layout attachment
    try {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = safeName;
      a.setAttribute('download', safeName);
      a.target = '_self';
      a.rel = 'noopener';
      a.style.position = 'fixed';
      a.style.left = '-9999px';
      a.style.top = '-9999px';
      a.style.width = '2px';
      a.style.height = '2px';
      a.style.opacity = '0.01';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
      }, 5000);
      return true;
    } catch (e1) {
      console.warn('Strategy 1 download failed:', e1);
    }

    // Strategy 2: Base64 Data URI fallback
    if (dataUri) {
      try {
        const a = document.createElement('a');
        a.href = dataUri;
        a.download = safeName;
        a.setAttribute('download', safeName);
        a.style.position = 'fixed';
        a.style.left = '-9999px';
        a.style.top = '-9999px';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          if (a.parentNode) a.parentNode.removeChild(a);
        }, 3000);
        return true;
      } catch (e2) {
        console.warn('Strategy 2 download failed:', e2);
      }
    }

    return false;
  };

  const handleDownloadPDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    setSavedNotice('Generating high-resolution luxury PDF...');

    try {
      const { fileUrl, filename, dataUri } = await generateInvoicePdfDoc();
      triggerSafeDownload(fileUrl, filename, dataUri);
      setDownloadedPdfInfo({ url: fileUrl, filename });
      setSavedNotice(`PDF "${filename}" downloaded successfully!`);
      setTimeout(() => setSavedNotice(''), 7000);
    } catch (error) {
      console.error('PDF Download Error:', error);
      try {
        const resolveHtml2Pdf = () => {
          if (typeof html2pdf === 'function') return html2pdf;
          if (html2pdf && typeof html2pdf.default === 'function') return html2pdf.default;
          return null;
        };
        const h2p = resolveHtml2Pdf();
        const element = document.getElementById('printable-invoice-paper');
        if (h2p && element) {
          const rawDocNum = data.invoiceNumber || 'Invoice';
          const sanitizedDocNum = String(rawDocNum)
            .replace(/[/\\?%*:|"<> ]/g, '_')
            .replace(/^_+|_+$/g, '') || 'Invoice';
          const sanitizedCompany = data.client?.company
            ? String(data.client.company).replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20)
            : 'Hospitality';
          const filename = `${sanitizedDocNum}_${sanitizedCompany}.pdf`;
          const opt = {
            margin: [8, 8, 8, 8],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, allowTaint: false, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          const pdfBlob = await h2p().set(opt).from(element).outputPdf('blob');
          const file = new File([pdfBlob], filename, { type: 'application/pdf' });
          const url = window.URL.createObjectURL(file);
          triggerSafeDownload(url, filename, null);
          setDownloadedPdfInfo({ url, filename });
          setSavedNotice(`PDF "${filename}" downloaded successfully!`);
          setTimeout(() => setSavedNotice(''), 7000);
          return;
        }
      } catch (fallbackErr) {
        console.error('Emergency html2pdf fallback also failed:', fallbackErr);
      }
      setSavedNotice('Direct download encountered an issue. Opening print / save dialog...');
      setTimeout(() => {
        setSavedNotice('');
        window.print();
      }, 500);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleViewPDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    setSavedNotice('Opening PDF preview in new window...');

    try {
      const { fileUrl, filename } = await generateInvoicePdfDoc();
      setDownloadedPdfInfo({ url: fileUrl, filename });
      const win = window.open(fileUrl, '_blank');
      if (!win) {
        setSavedNotice(`PDF "${filename}" ready! Click the link below to open.`);
      } else {
        setSavedNotice(`PDF "${filename}" opened in preview tab.`);
        setTimeout(() => setSavedNotice(''), 5000);
      }
    } catch (err) {
      console.error('View PDF error:', err);
      setSavedNotice('Could not open preview tab. Opening print dialog...');
      setTimeout(() => {
        setSavedNotice('');
        window.print();
      }, 500);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleLoadSample = (sampleType) => {
    if (sampleType === 'resort') {
      setData(INITIAL_INVOICE);
    } else if (sampleType === 'hospital') {
      setData({
        ...INITIAL_INVOICE,
        docType: 'PROFORMA INVOICE',
        invoiceNumber: 'VE/MED/2026/0109',
        poNumber: 'APOLLO-PROC-2026-88',
        status: 'Approved',
        seller: {
          name: 'VAIDURE ESSENTIAL',
          tagline: 'Healthcare & Clinical Hospitality Formulations',
          address: 'Orbit Mall, A.B. Road, Vijay Nagar, Indore, Madhya Pradesh - 452010',
          phone: '+91 95227 00027',
          email: 'b2b@vaidure.com',
          website: 'www.vaidure.com',
          gstin: '23AAAFV9821Q1Z8',
          pan: 'AAAFV9821Q',
          state: 'Madhya Pradesh',
          stateCode: '23',
        },
        client: {
          company: 'Apollo Luxury Pavilion & Healthcare',
          contactPerson: 'Dr. Vivek Sharma (General Administration)',
          email: 'admin.purchases@apollo.sample',
          phone: '+91 99887 76655',
          billingAddress: 'Health City Boulevard, Sector 12, New Delhi - 110001',
          shippingAddress: 'Store & Inventory Bay 4, Apollo Pavilion, New Delhi - 110001',
          gstin: '07AAACA2101M1ZQ',
          state: 'Delhi',
          stateCode: '07',
          placeOfSupply: 'Delhi (07)',
        },
        taxType: 'inter',
        discountOverall: 8,
        shippingCharge: 1800,
        items: [
          {
            id: 'h-1',
            name: 'Hospital Patient Hygiene Welcome Kit',
            description: 'Hypoallergenic botanical handwash, herbal soap, biodegradable comb & dental kit',
            hsn: '3307',
            unit: 'Kits',
            qty: 1200,
            rate: 75,
            taxRate: 12,
          },
          {
            id: 'h-2',
            name: 'Handmade Gentle Glycerin Soap (25g)',
            description: 'Fragrance-free sensitive skin formulation in sterile wrapper',
            hsn: '3401',
            unit: 'Bars',
            qty: 2500,
            rate: 18,
            taxRate: 18,
          },
          {
            id: 'h-3',
            name: 'Wall-Mounted Refill Dispenser Set (300ml x 3)',
            description: 'Anti-microbial push pump dispensers for suites',
            hsn: '3924',
            unit: 'Sets',
            qty: 80,
            rate: 920,
            taxRate: 18,
          },
        ],
        bank: {
          bankName: 'HDFC Bank Ltd.',
          accountName: 'VAIDURE ESSENTIAL',
          accountNumber: '50200084920192',
          ifsc: 'HDFC0001234',
          branch: 'Vijay Nagar Branch, Indore',
          upiId: 'vaidure@hdfcbank',
        },
        notes: 'Clinical grade packaging and batch quality certificates enclosed with dispatch.',
        terms: [
          'Institutional price tariff valid for 30 days from document issuance date.',
          '40% advance payment, balance 60% upon delivery and quality sign-off.',
          'Transit damages or seal leaks must be notified within 24 hours of receipt.',
          'All disputes subject to Indore, Madhya Pradesh jurisdiction only.',
        ],
        signatory: {
          company: 'VAIDURE ESSENTIAL (Healthcare Division)',
          signText: 'Vaidure Institutional',
          title: 'Authorized Medical Supply Officer',
        },
        footerNote: 'Institutional Supply Document • VAIDURE HEALTHCARE & HOSPITALITY • Contact: info@vaidure.com',
      });
    } else if (sampleType === 'blank') {
      setData({
        ...INITIAL_INVOICE,
        invoiceNumber: 'VE/' + new Date().getFullYear() + '/' + Math.floor(1000 + Math.random() * 9000),
        client: {
          company: '',
          contactPerson: '',
          email: '',
          phone: '',
          billingAddress: '',
          shippingAddress: '',
          gstin: '',
          state: '',
          stateCode: '',
          placeOfSupply: '',
        },
        discountOverall: 0,
        shippingCharge: 0,
        items: [
          {
            id: 'item-custom-1',
            name: 'Custom Product or Service',
            description: 'Enter product specifications and packaging details',
            hsn: '3307',
            unit: 'Units',
            qty: 100,
            rate: 100,
            taxRate: 18,
          },
        ],
        notes: 'Enter any special notes, delivery instructions or order specifications here.',
        terms: [
          'Payment due within 15 days of invoice date.',
          'Dispatched goods must be verified upon delivery receipt.',
          'Subject to local jurisdiction.',
        ],
        signatory: {
          company: 'YOUR COMPANY NAME',
          signText: 'Authorized Signatory',
          title: 'Authorized Signatory',
        },
        footerNote: 'This is a computer-generated document.',
      });
    }
    setSavedNotice('Loaded sample template successfully!');
    setTimeout(() => setSavedNotice(''), 3000);
  };

  // ── Private Password Change Modal (Strict Previous Password Verification) ──
  const renderPasswordModal = () => {
    if (!showPasswordModal) return null;

    return (
      <div
        className="screen-only"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowPasswordModal(false);
          }
        }}
      >
        <div
          style={{
            background: '#161412',
            border: '1px solid rgba(200, 169, 110, 0.45)',
            borderRadius: 12,
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            width: '100%',
            maxWidth: 440,
            boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(200,169,110,0.15)',
            color: '#ffffff',
            position: 'relative',
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowPasswordModal(false)}
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.4rem',
              cursor: 'pointer',
              lineHeight: 1,
              padding: 4,
            }}
            title="Close"
          >
            &times;
          </button>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(200, 169, 110, 0.12)',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: 'var(--gold)',
                flexShrink: 0,
              }}
            >
              🔒
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff', fontFamily: '"Playfair Display", Georgia, serif' }}>
                Change Admin Password
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: '0.74rem', color: 'rgba(255,255,255,0.6)' }}>
                Verify previous password to update to a new private password
              </p>
            </div>
          </div>

          {/* Error Message */}
          {pwdModalError && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: 6,
                padding: '9px 12px',
                marginBottom: '1rem',
                fontSize: '0.75rem',
                color: '#fca5a5',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span>⚠️</span>
              <span>{pwdModalError}</span>
            </div>
          )}

          {/* Success Message */}
          {pwdModalSuccess && (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: 6,
                padding: '9px 12px',
                marginBottom: '1rem',
                fontSize: '0.75rem',
                color: '#6ee7b7',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span>✅</span>
              <span>{pwdModalSuccess}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSaveCustomPassword}>
            {/* Step 1: Previous Password (Strict Verification) */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                Previous Password <span style={{ color: 'var(--gold)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showModalPrevPassword ? 'text' : 'password'}
                  value={pwdCurrentInput}
                  onChange={(e) => {
                    setPwdCurrentInput(e.target.value);
                    setPwdModalError('');
                  }}
                  placeholder="Enter previous password"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '10px 38px 10px 12px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(200, 169, 110, 0.3)',
                    borderRadius: 6,
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowModalPrevPassword(!showModalPrevPassword)}
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    padding: 4,
                  }}
                  title={showModalPrevPassword ? 'Hide password' : 'Show password'}
                >
                  {showModalPrevPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Step 2: Admin Username */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                Admin Username
              </label>
              <input
                type="text"
                value={pwdNewUsername}
                onChange={(e) => {
                  setPwdNewUsername(e.target.value);
                  setPwdModalError('');
                }}
                placeholder="admin"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(200, 169, 110, 0.3)',
                  borderRadius: 6,
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Step 3: New Password */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                New Password <span style={{ color: 'var(--gold)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showModalNewPassword ? 'text' : 'password'}
                  value={pwdNewInput}
                  onChange={(e) => {
                    setPwdNewInput(e.target.value);
                    setPwdModalError('');
                  }}
                  placeholder="Enter new private password"
                  style={{
                    width: '100%',
                    padding: '10px 38px 10px 12px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(200, 169, 110, 0.3)',
                    borderRadius: 6,
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowModalNewPassword(!showModalNewPassword)}
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    padding: 4,
                  }}
                  title={showModalNewPassword ? 'Hide password' : 'Show password'}
                >
                  {showModalNewPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Step 4: Confirm New Password */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                Confirm New Password <span style={{ color: 'var(--gold)' }}>*</span>
              </label>
              <input
                type={showModalNewPassword ? 'text' : 'password'}
                value={pwdConfirmInput}
                onChange={(e) => {
                  setPwdConfirmInput(e.target.value);
                  setPwdModalError('');
                }}
                placeholder="Re-enter new private password"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(200, 169, 110, 0.3)',
                  borderRadius: 6,
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <button
                type="submit"
                className="lux-btn lux-btn-gold"
                style={{
                  flex: 1,
                  padding: '11px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  justifyContent: 'center',
                }}
              >
                Save New Password
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.75)',
                  borderRadius: 4,
                  padding: '11px 16px',
                  fontSize: '0.76rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // ── Luxury Authentication Lock Screen ──
  if (!isAuthenticated) {
    return (
      <div
        className="invoice-auth-gate"
        style={{
          minHeight: '100vh',
          background: 'radial-gradient(ellipse at 50% 25%, #1c1813 0%, #0a0a0a 75%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          fontFamily: '"Inter", system-ui, sans-serif',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient gold glow */}
        <div
          style={{
            position: 'absolute',
            width: 550,
            height: 550,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.14) 0%, transparent 70%)',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            width: '100%',
            maxWidth: 440,
            background: 'rgba(18, 18, 18, 0.88)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(200, 169, 110, 0.35)',
            borderRadius: 12,
            padding: 'clamp(2rem, 5vw, 2.75rem)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(200,169,110,0.12)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Brand Emblem */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(200, 169, 110, 0.12)',
                border: '1.5px solid var(--gold)',
                color: 'var(--gold)',
                fontSize: '1.6rem',
                marginBottom: '1rem',
                boxShadow: '0 0 20px rgba(200,169,110,0.2)',
              }}
            >
              🔒
            </div>

            <div
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '0.72rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 4,
              }}
            >
              VAIDURE ESSENTIAL
            </div>

            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.65rem',
                fontWeight: 700,
                margin: 0,
                color: '#ffffff',
                letterSpacing: '0.01em',
              }}
            >
              Administrative Access
            </h2>

            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: 8, lineHeight: 1.5 }}>
              Enter administrative credentials to manage, issue, and print corporate hospitality invoices.
            </p>
          </div>

          {/* Error Notice */}
          {loginError && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: 6,
                padding: '10px 14px',
                marginBottom: '1.25rem',
                fontSize: '0.78rem',
                color: '#fca5a5',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>⚠️</span>
              <span>{loginError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.1rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 6,
                }}
              >
                Admin Username
              </label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => {
                  setLoginUsername(e.target.value);
                  setLoginError('');
                }}
                placeholder="admin"
                autoComplete="username"
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(200, 169, 110, 0.3)',
                  borderRadius: 6,
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.3)')}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 6,
                }}
              >
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    setLoginError('');
                  }}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '11px 42px 11px 14px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(200, 169, 110, 0.3)',
                    borderRadius: 6,
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.3)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    padding: 4,
                  }}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="lux-btn lux-btn-gold"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(200,169,110,0.35)',
              }}
            >
              Authenticate & Access Portal &rarr;
            </button>
          </form>

          {/* Footer Back link */}
          <div style={{ textAlign: 'center', marginTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <Link
              to="/"
              style={{
                color: 'var(--gold)',
                fontSize: '0.78rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>&larr;</span> Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="invoice-page-container" style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--primary)' }}>
      {/* Custom Password Modal */}
      {renderPasswordModal()}

      {/* ── Print Specific Styles ── */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm 10mm 8mm 10mm;
          }
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            background: #ffffff !important;
            background-color: #ffffff !important;
            color: #111111 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-height: auto !important;
            height: auto !important;
            overflow: visible !important;
            font-size: 8.5pt !important;
          }
          /* Hide all surrounding layout components */
          nav, footer, .cursor-glow, .invoice-ui-controls, .invoice-editor-panel, .screen-only, .back-btn-bar {
            display: none !important;
          }
          /* Neutralize all parent containers so the invoice sheet fills 100% of the A4 page */
          #root, #root > div, .app-main-layout, main, .invoice-page-container, .invoice-workspace-outer, .invoice-grid-container {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            min-height: auto !important;
            height: auto !important;
            border: none !important;
            box-shadow: none !important;
            grid-template-columns: none !important;
          }
          .invoice-preview-wrapper {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .invoice-paper {
            display: block !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            font-size: 8.5pt !important;
          }
          /* Document Header in Print */
          .invoice-doc-header {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            flex-wrap: nowrap !important;
            padding-bottom: 8px !important;
            margin-bottom: 8px !important;
            border-bottom: 1.5px solid #eae6dc !important;
            gap: 1.5rem !important;
          }
          .invoice-doc-header-left {
            flex: 1 1 auto !important;
            max-width: 62% !important;
          }
          .invoice-doc-header-right {
            flex: 0 0 auto !important;
            width: 36% !important;
            text-align: right !important;
          }
          /* Client Grid in Print */
          .invoice-client-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
            padding: 8px 12px !important;
            margin-bottom: 8px !important;
            background: #faf9f6 !important;
            border: 1px solid #ede8de !important;
          }
          /* Table in Print */
          .invoice-table-wrapper {
            margin-bottom: 8px !important;
            overflow: visible !important;
          }
          .invoice-table-wrapper table {
            width: 100% !important;
            border-collapse: collapse !important;
            font-size: 8pt !important;
          }
          .invoice-table-wrapper th {
            padding: 5px 8px !important;
            background: #111111 !important;
            color: #ffffff !important;
            font-size: 7.5pt !important;
          }
          .invoice-table-wrapper td {
            padding: 5px 8px !important;
            font-size: 8pt !important;
            border-bottom: 1px solid #ede8de !important;
          }
          .invoice-table-wrapper tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* Calculation Summary in Print */
          .invoice-bottom-grid {
            display: grid !important;
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 16px !important;
            margin-bottom: 8px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .invoice-bottom-grid td {
            padding: 2.5px 0 !important;
            font-size: 8pt !important;
          }
          /* Bank & Signatory in Print */
          .invoice-footer-grid {
            display: grid !important;
            grid-template-columns: 1fr 1.2fr 0.85fr !important;
            gap: 14px !important;
            padding-top: 8px !important;
            margin-top: 6px !important;
            border-top: 1.5px solid #eae6dc !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .invoice-footer-grid ol {
            font-size: 6.8pt !important;
            line-height: 1.4 !important;
          }
          .invoice-footer-grid div {
            font-size: 7.2pt !important;
          }
          .print-fineprint {
            margin-top: 6px !important;
            padding-top: 6px !important;
            font-size: 6.5pt !important;
          }
          .no-break {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }

        /* Screen animations & luxury controls */
        .lux-input {
          width: 100%;
          padding: 8px 12px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 4px;
          font-family: inherit;
          font-size: 0.85rem;
          color: var(--primary);
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .lux-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 2px rgba(200,169,110,0.2);
        }
        .lux-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .lux-btn-gold {
          background: var(--gold);
          color: #0d0d0d;
          border-color: var(--gold);
        }
        .lux-btn-gold:hover {
          background: #b59357;
          box-shadow: 0 4px 15px rgba(200,169,110,0.35);
        }
        .lux-btn-outline {
          background: transparent;
          color: var(--primary);
          border-color: rgba(0,0,0,0.2);
        }
        .lux-btn-outline:hover {
          border-color: var(--gold);
          color: var(--gold-dark);
          background: rgba(200,169,110,0.06);
        }
        .lux-btn-dark {
          background: #111111;
          color: #ffffff;
        }
        .lux-btn-dark:hover {
          background: #2a2a2a;
        }

        /* Luxury Accordion System */
        .lux-accordion-card {
          border: 1px solid #e8e3d5;
          border-radius: 6px;
          margin-bottom: 0.85rem;
          background: #ffffff;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .lux-accordion-card:hover {
          border-color: #d6ccb8;
        }
        .lux-accordion-card.is-open {
          border-color: var(--gold);
          box-shadow: 0 4px 15px rgba(200,169,110,0.12);
        }
        .lux-accordion-head {
          padding: 11px 14px;
          background: #fbfaf8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          user-select: none;
          transition: background 0.15s ease;
        }
        .lux-accordion-head:hover {
          background: #f4f0e6;
        }
        .lux-accordion-card.is-open .lux-accordion-head {
          background: #f5f0e4;
          border-bottom: 1px solid #e8e1cf;
        }
        .lux-accordion-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: #ffffff;
        }
        .highlight-section {
          animation: pulseGoldHighlight 1.8s ease-in-out;
        }
        @keyframes pulseGoldHighlight {
          0% { box-shadow: 0 0 0 0 rgba(200,169,110,0.8); }
          50% { box-shadow: 0 0 0 10px rgba(200,169,110,0.3); }
          100% { box-shadow: 0 0 0 0 rgba(200,169,110,0); }
        }

        /* On-Paper Section Hover & Quick Edit Triggers */
        .section-hover-wrapper {
          position: relative;
          transition: outline 0.2s ease;
          border-radius: 4px;
        }
        .section-hover-wrapper:hover {
          outline: 1.5px dashed rgba(200,169,110,0.7);
          outline-offset: 4px;
        }
        .section-edit-pill {
          position: absolute;
          top: 6px;
          right: 6px;
          background: #111111;
          color: var(--gold);
          border: 1px solid var(--gold);
          border-radius: 4px;
          padding: 3px 9px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          opacity: 0;
          transform: translateY(-2px);
          transition: opacity 0.2s ease, transform 0.2s ease, background 0.2s ease, color 0.2s ease;
          z-index: 20;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }
        .section-hover-wrapper:hover .section-edit-pill {
          opacity: 1;
          transform: translateY(0);
        }
        .section-edit-pill:hover {
          background: var(--gold);
          color: #111111;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Direct PDF Generation Styles */
        .generating-pdf .section-edit-pill {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        .generating-pdf .section-hover-wrapper,
        .generating-pdf .section-hover-wrapper:hover {
          outline: none !important;
          box-shadow: none !important;
        }
        #printable-invoice-paper.generating-pdf {
          width: 800px !important;
          min-width: 800px !important;
          max-width: 800px !important;
          padding: 24px 28px !important;
          box-shadow: none !important;
          border: none !important;
          border-radius: 0 !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-doc-header {
          padding-bottom: 1rem !important;
          margin-bottom: 1rem !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-client-grid {
          padding: 0.85rem 1.1rem !important;
          margin-bottom: 1rem !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-table-wrapper {
          margin-bottom: 1rem !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-table-wrapper th {
          padding: 7px 10px !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-table-wrapper td {
          padding: 7px 10px !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-bottom-grid {
          margin-bottom: 1rem !important;
          gap: 1.25rem !important;
        }
        #printable-invoice-paper.generating-pdf .invoice-footer-grid {
          padding-top: 1rem !important;
          gap: 1.25rem !important;
        }
        #printable-invoice-paper.generating-pdf .print-fineprint {
          margin-top: 1rem !important;
          padding-top: 0.5rem !important;
        }
      `}</style>

      {/* ── Top Header / Breadcrumb Bar (Screen Only) ── */}
      <section className="screen-only invoice-ui-controls" style={{ background: '#0d0d0d', color: '#fff', padding: '1.25rem clamp(1rem, 4vw, 3rem)', borderBottom: '1px solid rgba(200,169,110,0.3)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                color: 'var(--gold)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                padding: '6px 12px',
                borderRadius: 4,
                border: '1px solid rgba(200,169,110,0.35)',
                background: 'rgba(200,169,110,0.08)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = '#0d0d0d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(200,169,110,0.08)';
                e.currentTarget.style.color = 'var(--gold)';
              }}
            >
              ← Back to Website
            </Link>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
                  VAIDURE LUXURY HOSPITALITY
                </span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)' }} />
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Official Billing & Proforma Engine</span>
              </div>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 500, color: '#fff', margin: 0 }}>
                Hospitality Invoice & Quotation Generator
              </h1>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Sample Selector */}
            <div style={{ position: 'relative' }}>
              <select
                onChange={(e) => handleLoadSample(e.target.value)}
                defaultValue="resort"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(200,169,110,0.4)',
                  color: '#fff',
                  padding: '9px 14px',
                  borderRadius: 4,
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="resort" style={{ background: '#1a1a1a', color: '#fff' }}>Template: Luxury Resort Amenities</option>
                <option value="hospital" style={{ background: '#1a1a1a', color: '#fff' }}>Template: Healthcare & Hospital Care</option>
                <option value="blank" style={{ background: '#1a1a1a', color: '#fff' }}>Template: Blank / New Custom Invoice</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: 3, border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setActiveTab('both')}
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  background: activeTab === 'both' ? 'var(--gold)' : 'transparent',
                  color: activeTab === 'both' ? '#0d0d0d' : 'rgba(255,255,255,0.7)',
                  borderRadius: 3,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Split View
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  background: activeTab === 'preview' ? 'var(--gold)' : 'transparent',
                  color: activeTab === 'preview' ? '#0d0d0d' : 'rgba(255,255,255,0.7)',
                  borderRadius: 3,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Preview Only
              </button>
              <button
                onClick={() => setActiveTab('editor')}
                style={{
                  padding: '6px 12px',
                  border: 'none',
                  background: activeTab === 'editor' ? 'var(--gold)' : 'transparent',
                  color: activeTab === 'editor' ? '#0d0d0d' : 'rgba(255,255,255,0.7)',
                  borderRadius: 3,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Editor Only
              </button>
            </div>

            {/* Export Actions Group */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Direct PDF Download Action Button */}
              <button
                id="btn-download-pdf"
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="lux-btn lux-btn-gold"
                style={{
                  boxShadow: '0 4px 20px rgba(200,169,110,0.35)',
                  opacity: isGeneratingPDF ? 0.75 : 1,
                  cursor: isGeneratingPDF ? 'wait' : 'pointer',
                  padding: '9px 16px',
                }}
                title="Download PDF directly to your device"
              >
                {isGeneratingPDF ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>

              {/* View / Open PDF in Tab Action Button */}
              <button
                id="btn-view-pdf"
                onClick={handleViewPDF}
                disabled={isGeneratingPDF}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(200,169,110,0.5)',
                  color: 'var(--gold)',
                  borderRadius: 4,
                  padding: '9px 13px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: isGeneratingPDF ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  transition: 'all 0.2s ease',
                }}
                title="Open PDF preview in a new browser tab"
              >
                <span>👁️</span>
                <span>View PDF</span>
              </button>

              {/* Print / System Dialog Button */}
              <button
                id="btn-print-invoice"
                onClick={handlePrint}
                disabled={isGeneratingPDF}
                className="lux-btn lux-btn-dark"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '9px 14px',
                }}
                title="Open browser print dialog / Save as PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print
              </button>

              {/* Authenticated Admin Badge, Custom Password & Lock Button */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 10px',
                  borderRadius: 4,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(200,169,110,0.3)',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{customCreds.username}</span>

                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(true);
                    setPwdModalError('');
                    setPwdModalSuccess('');
                    setPwdCurrentInput('');
                    setPwdNewInput('');
                    setPwdConfirmInput('');
                    setPwdNewUsername(customCreds.username);
                  }}
                  style={{
                    background: 'rgba(200,169,110,0.18)',
                    border: '1px solid rgba(200,169,110,0.4)',
                    color: 'var(--gold)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '3px 8px',
                    borderRadius: 3,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                  title="Change Admin Password"
                >
                  <span>🔑</span> Change Password
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '0 0 0 4px',
                    borderLeft: '1px solid rgba(255,255,255,0.2)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                  title="Lock Invoice Generator"
                >
                  <span>🔒</span> Lock
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {savedNotice && (
        <div
          className="screen-only"
          style={{
            background: '#181511',
            borderBottom: '1px solid var(--gold)',
            color: '#f3efe6',
            padding: '10px 16px',
            textAlign: 'center',
            fontSize: '0.84rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            zIndex: 100,
            position: 'relative',
          }}
        >
          <span style={{ color: 'var(--gold)', fontWeight: 600 }}>✦ {savedNotice}</span>
          {downloadedPdfInfo?.url && (
            <a
              href={downloadedPdfInfo.url}
              download={downloadedPdfInfo.filename}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000',
                background: 'var(--gold)',
                padding: '4px 11px',
                borderRadius: 4,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span>↗</span> Open / Save PDF File
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              setSavedNotice('');
              setDownloadedPdfInfo(null);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              fontSize: '0.95rem',
              marginLeft: 6,
            }}
            title="Dismiss notice"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Main Workspace: Editor Panel + Live Invoice Paper ── */}
      <div className="invoice-workspace-outer" style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(1rem, 3vw, 2.5rem)' }}>
        <div
          className="invoice-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns:
              activeTab === 'both' ? 'minmax(320px, 480px) minmax(500px, 1fr)' : '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* ════════════════════════════════════════════════════════════
              1. LEFT SIDEBAR: INVOICE CONFIGURATION EDITOR (Screen Only)
          ════════════════════════════════════════════════════════════ */}
          {activeTab !== 'preview' && (
            <div
              className="screen-only invoice-editor-panel"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 8,
                padding: '1.5rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                maxHeight: 'calc(100vh - 120px)',
                overflowY: 'auto',
                position: 'sticky',
                top: 80,
              }}
            >
              {/* Header with Expand / Collapse All & Live Sync */}
              <div style={{ marginBottom: '1rem', borderBottom: '1.5px solid #ede8de', paddingBottom: '0.85rem' }}>
                {/* Top Row: Title + Live Sync Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.45rem' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.25rem', margin: 0, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.01em' }}>
                    Document Controls
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#047857',
                      background: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      padding: '3px 9px',
                      borderRadius: 12,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 1px 2px rgba(16,185,129,0.08)',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#10b981',
                        display: 'inline-block',
                        boxShadow: '0 0 6px #10b981',
                      }}
                    />
                    Live Sync
                  </span>
                </div>

                {/* Second Row: Subtitle + Segmented Expand/Collapse Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.3 }}>
                    Full edit access across all 9 document sections
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: '#f4f1ea',
                      border: '1px solid #e0dbce',
                      borderRadius: 6,
                      padding: '2px',
                      gap: '2px',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={expandAll}
                      title="Expand all 9 sections"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '4px 9px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                        background: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.06)',
                        borderRadius: 4,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        lineHeight: 1.2,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--gold-dark)';
                        e.currentTarget.style.borderColor = 'var(--gold)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', lineHeight: 1 }}>⤢</span>
                      <span>Expand All</span>
                    </button>

                    <button
                      type="button"
                      onClick={collapseAll}
                      title="Collapse all sections"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '4px 9px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: '#555555',
                        background: 'transparent',
                        border: '1px solid transparent',
                        borderRadius: 4,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        lineHeight: 1.2,
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#111111';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#555555';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={{ fontSize: '0.8rem', lineHeight: 1 }}>⤡</span>
                      <span>Collapse</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Jump Pills */}
              <div style={{ display: 'flex', gap: 5, overflowX: 'auto', paddingBottom: 8, marginBottom: '1.1rem', borderBottom: '1px solid #f0ede6', scrollbarWidth: 'none' }}>
                {[
                  { key: 'identity', label: '📄 Doc Info' },
                  { key: 'seller', label: '🏛️ Seller' },
                  { key: 'client', label: '🏨 Client' },
                  { key: 'items', label: `📦 Items (${data.items.length})` },
                  { key: 'tax', label: '⚖️ Tax/Discount' },
                  { key: 'bank', label: '🏦 Bank' },
                  { key: 'terms', label: `📝 Terms (${data.terms.length})` },
                  { key: 'notes', label: '💬 Notes' },
                  { key: 'signatory', label: '✍️ Signatory' },
                  ...((data.customSections || []).map((cs) => ({
                    key: cs.id,
                    label: `${cs.icon || '📋'} ${cs.title}`,
                  }))),
                ].map((pill) => (
                  <button
                    key={pill.key}
                    type="button"
                    onClick={() => scrollToSection(pill.key)}
                    style={{
                      whiteSpace: 'nowrap',
                      background: openSections[pill.key] ? 'rgba(200,169,110,0.18)' : '#faf9f6',
                      border: `1px solid ${openSections[pill.key] ? 'var(--gold)' : '#e5e0d4'}`,
                      color: openSections[pill.key] ? 'var(--gold-dark)' : '#555',
                      borderRadius: 14,
                      padding: '3px 9px',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {/* Access & Custom Password Status Strip */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(200,169,110,0.02) 100%)',
                  border: '1px solid rgba(200,169,110,0.25)',
                  borderRadius: 6,
                  padding: '8px 12px',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ fontSize: '0.9rem' }}>🔐</span>
                  <div>
                    <div style={{ fontSize: '0.73rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1.2 }}>
                      Admin: <strong>{customCreds.username}</strong>
                    </div>
                    <div style={{ fontSize: '0.67rem', color: '#666' }}>
                      Administrative Access &bull; Protected
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(true);
                    setPwdModalError('');
                    setPwdModalSuccess('');
                    setPwdCurrentInput('');
                    setPwdNewInput('');
                    setPwdConfirmInput('');
                    setPwdNewUsername(customCreds.username);
                  }}
                  style={{
                    background: 'var(--gold)',
                    color: '#000',
                    border: 'none',
                    borderRadius: 4,
                    padding: '5px 10px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <span>🔑</span> Change Password
                </button>
              </div>

              {/* Datalist for unit choices */}
              <datalist id="invoice-units-list">
                <option value="Bottles" />
                <option value="Kits" />
                <option value="Bars" />
                <option value="Pieces" />
                <option value="Sets" />
                <option value="Canisters" />
                <option value="Units" />
                <option value="Packs" />
                <option value="Boxes" />
                <option value="Jars" />
                <option value="Litres" />
                <option value="Kg" />
              </datalist>

              {/* Datalist for tax rate choices */}
              <datalist id="invoice-tax-rates">
                <option value="0%" />
                <option value="5%" />
                <option value="12%" />
                <option value="18%" />
                <option value="28%" />
              </datalist>

              {/* Datalist for tax structure choices */}
              <datalist id="invoice-tax-structures">
                <option value="Intra-State (CGST + SGST)" />
                <option value="Inter-State (IGST)" />
                <option value="Zero Tax / Tax Exempt" />
              </datalist>

              {/* ── 1. Document Identity & Numbers ── */}
              <div id="editor-sec-identity" className={`lux-accordion-card ${openSections.identity ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('identity')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>📄</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        {data.identityTitle || 'Document Identity & Meta'}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        {data.docType} &bull; {data.invoiceNumber}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.identity ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.identity && (
                  <div className="lux-accordion-body">
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Section Heading Title
                      </label>
                      <input
                        type="text"
                        value={data.identityTitle !== undefined ? data.identityTitle : 'Document Identity & Meta'}
                        onChange={(e) => setData({ ...data, identityTitle: e.target.value })}
                        className="lux-input"
                        placeholder="Document Identity & Meta"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Document Type
                        </label>
                        <input
                          type="text"
                          list="invoice-doc-types"
                          value={data.docType}
                          onChange={(e) => setData({ ...data, docType: e.target.value })}
                          className="lux-input"
                          placeholder="e.g. TAX INVOICE"
                        />
                        <datalist id="invoice-doc-types">
                          <option value="TAX INVOICE" />
                          <option value="PROFORMA INVOICE" />
                          <option value="COMMERCIAL QUOTATION" />
                          <option value="DELIVERY CHALLAN" />
                          <option value="PURCHASE ORDER" />
                          <option value="OFFICIAL ESTIMATE" />
                        </datalist>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Status Badge
                        </label>
                        <input
                          type="text"
                          list="invoice-status-badges"
                          value={data.status}
                          onChange={(e) => setData({ ...data, status: e.target.value })}
                          className="lux-input"
                          placeholder="e.g. Pending Advance (50%)"
                        />
                        <datalist id="invoice-status-badges">
                          <option value="Pending Advance (50%)" />
                          <option value="Paid in Full" />
                          <option value="Approved" />
                          <option value="Due on Delivery" />
                          <option value="Draft" />
                          <option value="Under Quality Inspection" />
                        </datalist>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Invoice / Doc #
                        </label>
                        <input
                          type="text"
                          value={data.invoiceNumber}
                          onChange={(e) => setData({ ...data, invoiceNumber: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          PO / Ref #
                        </label>
                        <input
                          type="text"
                          value={data.poNumber}
                          onChange={(e) => setData({ ...data, poNumber: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Invoice Date
                        </label>
                        <input
                          type="date"
                          value={data.invoiceDate}
                          onChange={(e) => setData({ ...data, invoiceDate: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Due Date
                        </label>
                        <input
                          type="date"
                          value={data.dueDate}
                          onChange={(e) => setData({ ...data, dueDate: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 2. Seller / Your Company Details ── */}
              <div id="editor-sec-seller" className={`lux-accordion-card ${openSections.seller ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('seller')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>🏛️</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Seller / Company Details
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        {data.seller.name} &bull; GSTIN: {data.seller.gstin}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.seller ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.seller && (
                  <div className="lux-accordion-body">
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={data.seller.name}
                        onChange={(e) => handleSellerChange('name', e.target.value)}
                        className="lux-input"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Brand Tagline / Subtitle
                      </label>
                      <input
                        type="text"
                        value={data.seller.tagline}
                        onChange={(e) => handleSellerChange('tagline', e.target.value)}
                        className="lux-input"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Registered Office Address
                      </label>
                      <textarea
                        rows={2}
                        value={data.seller.address}
                        onChange={(e) => handleSellerChange('address', e.target.value)}
                        className="lux-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Official Phone
                        </label>
                        <input
                          type="text"
                          value={data.seller.phone}
                          onChange={(e) => handleSellerChange('phone', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Official Email
                        </label>
                        <input
                          type="email"
                          value={data.seller.email}
                          onChange={(e) => handleSellerChange('email', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Website URL
                        </label>
                        <input
                          type="text"
                          value={data.seller.website}
                          onChange={(e) => handleSellerChange('website', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Seller GSTIN
                        </label>
                        <input
                          type="text"
                          value={data.seller.gstin}
                          onChange={(e) => handleSellerChange('gstin', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.7fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          PAN Number
                        </label>
                        <input
                          type="text"
                          value={data.seller.pan}
                          onChange={(e) => handleSellerChange('pan', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          State
                        </label>
                        <input
                          type="text"
                          value={data.seller.state}
                          onChange={(e) => handleSellerChange('state', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Code
                        </label>
                        <input
                          type="text"
                          value={data.seller.stateCode}
                          onChange={(e) => handleSellerChange('stateCode', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 3. Client / Hotel Information ── */}
              <div id="editor-sec-client" className={`lux-accordion-card ${openSections.client ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('client')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>🏨</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Client / Hotel Information
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        {data.client.company || 'Enter client/hotel details'}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.client ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.client && (
                  <div className="lux-accordion-body">
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Hotel / Resort / Client Name
                      </label>
                      <input
                        type="text"
                        value={data.client.company}
                        onChange={(e) => handleClientChange('company', e.target.value)}
                        placeholder="e.g. Grand Heritage Palace"
                        className="lux-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Contact Person
                        </label>
                        <input
                          type="text"
                          value={data.client.contactPerson}
                          onChange={(e) => handleClientChange('contactPerson', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Client GSTIN
                        </label>
                        <input
                          type="text"
                          value={data.client.gstin}
                          onChange={(e) => handleClientChange('gstin', e.target.value)}
                          placeholder="e.g. 27AABCT3421K1ZM"
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Email
                        </label>
                        <input
                          type="email"
                          value={data.client.email}
                          onChange={(e) => handleClientChange('email', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={data.client.phone}
                          onChange={(e) => handleClientChange('phone', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Billing Address
                      </label>
                      <textarea
                        rows={2}
                        value={data.client.billingAddress}
                        onChange={(e) => handleClientChange('billingAddress', e.target.value)}
                        className="lux-input"
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Shipping / Delivery Destination
                      </label>
                      <textarea
                        rows={2}
                        value={data.client.shippingAddress}
                        onChange={(e) => handleClientChange('shippingAddress', e.target.value)}
                        className="lux-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Place of Supply
                        </label>
                        <input
                          type="text"
                          value={data.client.placeOfSupply}
                          onChange={(e) => handleClientChange('placeOfSupply', e.target.value)}
                          placeholder="e.g. Maharashtra (27)"
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          State Code
                        </label>
                        <input
                          type="text"
                          value={data.client.stateCode}
                          onChange={(e) => handleClientChange('stateCode', e.target.value)}
                          placeholder="27"
                          className="lux-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 4. Line Items & Products ── */}
              <div id="editor-sec-items" className={`lux-accordion-card ${openSections.items ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('items')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>📦</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Line Items ({data.items.length})
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        Full edit access: names, specs, rates, taxes
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.items ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.items && (
                  <div className="lux-accordion-body">
                    {/* Top action row */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <button
                        type="button"
                        onClick={() => setShowCatalogModal(true)}
                        className="lux-btn lux-btn-gold"
                        style={{ flex: 1, padding: '7px 10px', fontSize: '0.72rem' }}
                      >
                        + Catalog Presets
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAddItem()}
                        className="lux-btn lux-btn-outline"
                        style={{ flex: 1, padding: '7px 10px', fontSize: '0.72rem' }}
                      >
                        + Custom Item
                      </button>
                    </div>

                    {/* Detailed Cards for Line Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {data.items.map((item, idx) => (
                        <div
                          key={item.id || idx}
                          style={{
                            border: '1px solid #e8e4da',
                            borderRadius: 6,
                            background: '#faf9f6',
                            padding: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                          }}
                        >
                          {/* Item card header bar */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: 6 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', background: '#222', borderRadius: 3, padding: '2px 6px' }}>
                                #{idx + 1}
                              </span>
                              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)', maxWidth: 170, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {item.name || 'Untitled Line Item'}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={() => handleMoveItem(idx, -1)}
                                title="Move Up"
                                style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 3, padding: '2px 5px', fontSize: '0.7rem', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.35 : 1 }}
                              >
                                ▲
                              </button>
                              <button
                                type="button"
                                disabled={idx === data.items.length - 1}
                                onClick={() => handleMoveItem(idx, 1)}
                                title="Move Down"
                                style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 3, padding: '2px 5px', fontSize: '0.7rem', cursor: idx === data.items.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === data.items.length - 1 ? 0.35 : 1 }}
                              >
                                ▼
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDuplicateItem(idx)}
                                title="Duplicate Item"
                                style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 3, padding: '2px 6px', fontSize: '0.7rem', cursor: 'pointer', color: 'var(--gold-dark)' }}
                              >
                                ⧉ Copy
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(idx)}
                                title="Delete Item"
                                style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', borderRadius: 3, padding: '2px 6px', fontSize: '0.7rem', cursor: 'pointer' }}
                              >
                                ✕
                              </button>
                            </div>
                          </div>

                          {/* Inputs for item */}
                          <div>
                            <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                              Item Name / Title
                            </label>
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => handleItemChange(idx, 'name', e.target.value)}
                              className="lux-input"
                              placeholder="e.g. Botanical Hair Shampoo (50ml Luxury Bottle)"
                            />
                          </div>

                          <div>
                            <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                              Description / Packaging Specs
                            </label>
                            <textarea
                              rows={1}
                              value={item.description}
                              onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
                              className="lux-input"
                              placeholder="e.g. Custom gold foil cap with hotel logo"
                            />
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: '6px' }}>
                            <div>
                              <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                                HSN / SAC
                              </label>
                              <input
                                type="text"
                                value={item.hsn}
                                onChange={(e) => handleItemChange(idx, 'hsn', e.target.value)}
                                className="lux-input"
                                placeholder="3305"
                              />
                            </div>
                            <div>
                              <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                                Quantity
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={item.qty}
                                onChange={(e) => handleItemChange(idx, 'qty', e.target.value)}
                                className="lux-input"
                              />
                            </div>
                            <div>
                              <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                                Unit
                              </label>
                              <input
                                list="invoice-units-list"
                                type="text"
                                value={item.unit}
                                onChange={(e) => handleItemChange(idx, 'unit', e.target.value)}
                                className="lux-input"
                                placeholder="Bottles"
                              />
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr', gap: '6px', alignItems: 'end' }}>
                            <div>
                              <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                                Unit Rate ({data.currency})
                              </label>
                              <input
                                type="number"
                                min="0"
                                step="0.5"
                                value={item.rate}
                                onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
                                className="lux-input"
                              />
                            </div>
                            <div>
                              <label style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                                Tax Rate
                              </label>
                              <input
                                list="invoice-tax-rates"
                                type="text"
                                value={item.taxRate !== undefined && item.taxRate !== null ? (typeof item.taxRate === 'number' ? `${item.taxRate}%` : item.taxRate) : ''}
                                onChange={(e) => handleItemChange(idx, 'taxRate', e.target.value)}
                                className="lux-input"
                                placeholder="18%"
                              />
                            </div>
                            <div style={{ textAlign: 'right', paddingBottom: 6 }}>
                              <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Subtotal:</div>
                              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-dark)' }}>
                                {data.currency}{((item.qty || 0) * (item.rate || 0)).toLocaleString('en-IN')}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── 5. Taxation, Discount & Logistics ── */}
              <div id="editor-sec-tax" className={`lux-accordion-card ${openSections.tax ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('tax')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>⚖️</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Tax, Discount & Logistics
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        {data.taxType === 'intra'
                          ? 'Intra-State (CGST+SGST)'
                          : data.taxType === 'inter'
                            ? 'Inter-State (IGST)'
                            : data.taxType === 'none'
                              ? 'Tax Exempt'
                              : (data.taxType || 'Intra-State (CGST+SGST)')}{' '}
                        &bull; Disc: {data.discountOverall}%
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.tax ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.tax && (
                  <div className="lux-accordion-body">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Tax Structure (GST)
                        </label>
                        <input
                          type="text"
                          list="invoice-tax-structures"
                          value={
                            data.taxType === 'intra'
                              ? 'Intra-State (CGST + SGST)'
                              : data.taxType === 'inter'
                                ? 'Inter-State (IGST)'
                                : data.taxType === 'none'
                                  ? 'Zero Tax / Tax Exempt'
                                  : data.taxType
                          }
                          onChange={(e) => setData({ ...data, taxType: e.target.value })}
                          className="lux-input"
                          placeholder="e.g. Intra-State (CGST + SGST)"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Volume Discount (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={data.discountOverall}
                          onChange={(e) => setData({ ...data, discountOverall: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Freight / Logistics (₹)
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={data.shippingCharge}
                          onChange={(e) => setData({ ...data, shippingCharge: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Currency Symbol
                        </label>
                        <input
                          type="text"
                          value={data.currency}
                          onChange={(e) => setData({ ...data, currency: e.target.value })}
                          className="lux-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 6. Bank & Remittance Information ── */}
              <div id="editor-sec-bank" className={`lux-accordion-card ${openSections.bank ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('bank')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>🏦</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Bank & Remittance Details
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        {data.bank.bankName} &bull; A/C: {data.bank.accountNumber}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.bank ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.bank && (
                  <div className="lux-accordion-body">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Bank Name
                        </label>
                        <input
                          type="text"
                          value={data.bank.bankName}
                          onChange={(e) => handleBankChange('bankName', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Account Beneficiary Name
                        </label>
                        <input
                          type="text"
                          value={data.bank.accountName}
                          onChange={(e) => handleBankChange('accountName', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Account Number
                        </label>
                        <input
                          type="text"
                          value={data.bank.accountNumber}
                          onChange={(e) => handleBankChange('accountNumber', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          value={data.bank.ifsc}
                          onChange={(e) => handleBankChange('ifsc', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Branch Name / City
                        </label>
                        <input
                          type="text"
                          value={data.bank.branch}
                          onChange={(e) => handleBankChange('branch', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          UPI ID / VPA
                        </label>
                        <input
                          type="text"
                          value={data.bank.upiId}
                          onChange={(e) => handleBankChange('upiId', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── 7. Terms & Commercial Conditions ── */}
              <div id="editor-sec-terms" className={`lux-accordion-card ${openSections.terms ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('terms')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>📝</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Terms & Commercial Conditions ({data.terms.length})
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        Bespoke production, dispatch and warranty clauses
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.terms ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.terms && (
                  <div className="lux-accordion-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                        Edit conditions or append bespoke hotel clauses:
                      </span>
                      <button
                        type="button"
                        onClick={handleResetTerms}
                        style={{ background: 'transparent', border: 'none', color: 'var(--gold-dark)', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Reset Defaults
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {data.terms.map((term, tIdx) => (
                        <div key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold-dark)', minWidth: 18, paddingTop: 6 }}>
                            {tIdx + 1}.
                          </span>
                          <textarea
                            rows={2}
                            value={term}
                            onChange={(e) => handleUpdateTerm(tIdx, e.target.value)}
                            className="lux-input"
                            style={{ flex: 1 }}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveTerm(tIdx)}
                            style={{ background: 'transparent', border: 'none', color: '#b91c1c', cursor: 'pointer', padding: '6px 4px', fontSize: '0.85rem' }}
                            title="Delete Term"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleAddTerm}
                      className="lux-btn lux-btn-outline"
                      style={{ padding: '6px 12px', fontSize: '0.72rem', alignSelf: 'flex-start', marginTop: 4 }}
                    >
                      + Add Condition / Term
                    </button>
                  </div>
                )}
              </div>

              {/* ── 8. Remarks & Special Instructions ── */}
              <div id="editor-sec-notes" className={`lux-accordion-card ${openSections.notes ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('notes')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>💬</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Remarks & Production Notes
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        Printed below the total amount in words
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.notes ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.notes && (
                  <div className="lux-accordion-body">
                    <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                      Invoice Remarks / Custom Production Instructions
                    </label>
                    <textarea
                      rows={3}
                      value={data.notes}
                      onChange={(e) => setData({ ...data, notes: e.target.value })}
                      className="lux-input"
                      placeholder="e.g. Thank you for choosing VAIDURE for your guest experience..."
                    />
                  </div>
                )}
              </div>

              {/* ── 9. Authorized Signatory & Footer Disclaimer ── */}
              <div id="editor-sec-signatory" className={`lux-accordion-card ${openSections.signatory ? 'is-open' : ''}`}>
                <div className="lux-accordion-head" onClick={() => toggleSection('signatory')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '1rem' }}>✍️</span>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                        Signatory & Footer Disclaimer
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                        For {data.signatory?.company || data.seller.name} &bull; {data.signatory?.title || 'Authorized Signatory'}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    {openSections.signatory ? '▲ Collapse' : '▼ Edit'}
                  </span>
                </div>
                {openSections.signatory && (
                  <div className="lux-accordion-body">
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Signatory Entity / Company Line
                      </label>
                      <input
                        type="text"
                        value={data.signatory?.company || data.seller.name}
                        onChange={(e) => handleSignatoryChange('company', e.target.value)}
                        className="lux-input"
                        placeholder="For VAIDURE ESSENTIAL"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Signature Name / Script
                        </label>
                        <input
                          type="text"
                          value={data.signatory?.signText || 'Vaidure Essential'}
                          onChange={(e) => handleSignatoryChange('signText', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                          Signatory Designation / Title
                        </label>
                        <input
                          type="text"
                          value={data.signatory?.title || 'Authorized Signatory'}
                          onChange={(e) => handleSignatoryChange('title', e.target.value)}
                          className="lux-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                        Bottom Disclaimer / Fineprint Text
                      </label>
                      <textarea
                        rows={2}
                        value={data.footerNote || ''}
                        onChange={(e) => setData({ ...data, footerNote: e.target.value })}
                        className="lux-input"
                        placeholder="This is a computer-generated luxury hospitality document issued by..."
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ── Dynamic Custom Sections ── */}
              {(data.customSections || []).map((sec, secIdx) => (
                <div
                  key={sec.id}
                  id={`editor-sec-${sec.id}`}
                  className={`lux-accordion-card ${openSections[sec.id] ? 'is-open' : ''}`}
                  style={{ border: '1px solid rgba(200,169,110,0.4)', background: '#fffdfa' }}
                >
                  <div className="lux-accordion-head" onClick={() => toggleSection(sec.id)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '1rem' }}>{sec.icon || '📋'}</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary)' }}>
                            {sec.title || `Custom Section ${secIdx + 1}`}
                          </span>
                          <span
                            style={{
                              fontSize: '0.58rem',
                              background: 'rgba(200,169,110,0.18)',
                              color: 'var(--gold-dark)',
                              border: '1px solid rgba(200,169,110,0.3)',
                              padding: '1px 5px',
                              borderRadius: 3,
                              fontWeight: 700,
                              textTransform: 'uppercase',
                            }}
                          >
                            Custom
                          </span>
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
                          Placement: {
                            (sec.position || '').toLowerCase().includes('item')
                              ? 'Below Line Items'
                              : (sec.position || '').toLowerCase().includes('footer') || (sec.position || '').toLowerCase().includes('bank')
                                ? 'Footer Grid'
                                : 'Below Client Info'
                          } &bull; {
                            (sec.type === 'notes' || (sec.type || '').toLowerCase().includes('text') || (sec.type || '').toLowerCase().includes('note') || (sec.type || '').toLowerCase().includes('para'))
                              ? 'Text Block'
                              : `${(sec.fields || []).length} Data Fields`
                          }
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                      {openSections[sec.id] ? '▲ Collapse' : '▼ Edit'}
                    </span>
                  </div>

                  {openSections[sec.id] && (
                    <div className="lux-accordion-body">
                      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.75rem' }}>
                        <div>
                          <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={sec.title}
                            onChange={(e) => handleUpdateCustomSection(sec.id, 'title', e.target.value)}
                            className="lux-input"
                            placeholder="e.g. Dispatch & Logistics Details"
                          />
                        </div>

                        <div>
                          <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                            Placement on Invoice
                          </label>
                          <input
                            type="text"
                            list="custom-section-placements"
                            value={
                              sec.position === 'after_client'
                                ? 'Below Client / Hotel Info'
                                : sec.position === 'after_items'
                                  ? 'Below Line Items Table'
                                  : sec.position === 'footer'
                                    ? 'Footer (Alongside Bank/Terms)'
                                    : sec.position || 'Below Client / Hotel Info'
                            }
                            onChange={(e) => handleUpdateCustomSection(sec.id, 'position', e.target.value)}
                            className="lux-input"
                            placeholder="e.g. Below Client / Hotel Info"
                          />
                          <datalist id="custom-section-placements">
                            <option value="Below Client / Hotel Info" />
                            <option value="Below Line Items Table" />
                            <option value="Footer (Alongside Bank/Terms)" />
                          </datalist>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <div>
                          <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                            Section Icon
                          </label>
                          <input
                            type="text"
                            list="custom-section-icons"
                            value={sec.icon || '📋'}
                            onChange={(e) => handleUpdateCustomSection(sec.id, 'icon', e.target.value)}
                            className="lux-input"
                            placeholder="e.g. 📋"
                          />
                          <datalist id="custom-section-icons">
                            <option value="🚚" label="Logistics / Transport">🚚 Logistics / Transport</option>
                            <option value="🛡️" label="Quality / Certification">🛡️ Quality / Certification</option>
                            <option value="📝" label="Notes / Instructions">📝 Notes / Instructions</option>
                            <option value="📦" label="Packaging / Dispatch">📦 Packaging / Dispatch</option>
                            <option value="🔖" label="Reference / Compliance">🔖 Reference / Compliance</option>
                            <option value="📋" label="General Specifications">📋 General Specifications</option>
                          </datalist>
                        </div>

                        <div>
                          <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                            Section Content Type
                          </label>
                          <input
                            type="text"
                            list="custom-section-types"
                            value={
                              sec.type === 'fields'
                                ? 'Key-Value Data Fields'
                                : sec.type === 'notes'
                                  ? 'Text Block / Paragraph'
                                  : sec.type || 'Key-Value Data Fields'
                            }
                            onChange={(e) => handleUpdateCustomSection(sec.id, 'type', e.target.value)}
                            className="lux-input"
                            placeholder="e.g. Key-Value Data Fields"
                          />
                          <datalist id="custom-section-types">
                            <option value="Key-Value Data Fields" />
                            <option value="Text Block / Paragraph" />
                          </datalist>
                        </div>
                      </div>

                      {!(sec.type === 'notes' || (sec.type || '').toLowerCase().includes('text') || (sec.type || '').toLowerCase().includes('note') || (sec.type || '').toLowerCase().includes('para')) ? (
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                            <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)' }}>
                              Custom Data Fields (Labels & Values)
                            </label>
                            <button
                              type="button"
                              onClick={() => handleAddCustomField(sec.id)}
                              style={{ background: 'transparent', border: 'none', color: 'var(--gold-dark)', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer' }}
                            >
                              + Add Field Row
                            </button>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {(sec.fields || []).map((field, fIdx) => (
                              <div key={fIdx} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                                <input
                                  type="text"
                                  value={field.label}
                                  onChange={(e) => handleUpdateCustomField(sec.id, fIdx, 'label', e.target.value)}
                                  placeholder="Label (e.g. Transporter)"
                                  className="lux-input"
                                  style={{ flex: '1 1 40%' }}
                                />
                                <input
                                  type="text"
                                  value={field.value}
                                  onChange={(e) => handleUpdateCustomField(sec.id, fIdx, 'value', e.target.value)}
                                  placeholder="Value (e.g. Blue Dart Express)"
                                  className="lux-input"
                                  style={{ flex: '1 1 55%' }}
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveCustomField(sec.id, fIdx)}
                                  title="Delete field"
                                  style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', borderRadius: 3, padding: '4px 7px', fontSize: '0.72rem', cursor: 'pointer' }}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>

                          <div style={{ marginTop: 8 }}>
                            <label style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 2 }}>
                              Optional Remarks for this section:
                            </label>
                            <textarea
                              rows={2}
                              value={sec.notes || ''}
                              onChange={(e) => handleUpdateCustomSection(sec.id, 'notes', e.target.value)}
                              className="lux-input"
                              placeholder="Additional details or fineprint for this custom section..."
                            />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <label style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 3 }}>
                            Section Text / Declaration Content
                          </label>
                          <textarea
                            rows={3}
                            value={sec.notes || ''}
                            onChange={(e) => handleUpdateCustomSection(sec.id, 'notes', e.target.value)}
                            className="lux-input"
                            placeholder="Type your custom declaration, clauses, or special instructions here..."
                          />
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10, borderTop: '1px solid #f0ece3', paddingTop: 8 }}>
                        <button
                          type="button"
                          onClick={() => handleRemoveCustomSection(sec.id)}
                          style={{
                            background: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#b91c1c',
                            borderRadius: 4,
                            padding: '5px 12px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                          }}
                        >
                          <span>✕</span> Remove This Custom Section
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* ── Add Custom Section Quick Action Panel ── */}
              <div
                style={{
                  background: '#faf9f6',
                  border: '1.5px dashed #ded8cb',
                  borderRadius: 8,
                  padding: '1rem',
                  marginTop: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <span>✨</span>
                  <span>Add Custom Invoice Section</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginBottom: 10 }}>
                  Add extra blocks like Dispatch & Waybill, Quality Specs, or Bespoke Declarations
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  <button
                    type="button"
                    onClick={() => handleAddCustomSection('dispatch')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#ffffff',
                      border: '1px solid #d5cebf',
                      borderRadius: 4,
                      padding: '7px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d5cebf'; e.currentTarget.style.color = 'var(--primary)'; }}
                  >
                    <span>🚚</span>
                    <span>+ Dispatch Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddCustomSection('quality')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#ffffff',
                      border: '1px solid #d5cebf',
                      borderRadius: 4,
                      padding: '7px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d5cebf'; e.currentTarget.style.color = 'var(--primary)'; }}
                  >
                    <span>🛡️</span>
                    <span>+ Quality & Batch</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddCustomSection('notes')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#ffffff',
                      border: '1px solid #d5cebf',
                      borderRadius: 4,
                      padding: '7px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d5cebf'; e.currentTarget.style.color = 'var(--primary)'; }}
                  >
                    <span>📝</span>
                    <span>+ Declaration / Note</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddCustomSection('blank')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: 'rgba(200,169,110,0.1)',
                      border: '1px solid var(--gold)',
                      borderRadius: 4,
                      padding: '7px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--gold-dark)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(200,169,110,0.1)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                  >
                    <span>➕</span>
                    <span>+ Blank Custom Block</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              2. RIGHT / CENTER: THE PRINTABLE LUXURY A4 INVOICE SHEET
          ════════════════════════════════════════════════════════════ */}
          <div className="invoice-preview-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              id="printable-invoice-paper"
              className="invoice-paper"
              style={{
                width: '100%',
                maxWidth: '850px',
                background: '#ffffff',
                boxShadow: '0 12px 50px rgba(0,0,0,0.08)',
                borderRadius: 4,
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                boxSizing: 'border-box',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.06)',
                fontFamily: '"Inter", system-ui, sans-serif',
                color: '#1a1a1a',
                lineHeight: 1.45,
              }}
            >
              {/* Luxury Top Accent Bar */}
              <div
                style={{
                  height: 4,
                  backgroundColor: '#c8a96e',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />

              {/* ── Document Header ── */}
              <div
                className="invoice-doc-header"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1.5px solid #eae6dc',
                  paddingBottom: '1.75rem',
                  marginBottom: '1.75rem',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {/* Brand Logo & Info */}
                <div className="invoice-doc-header-left section-hover-wrapper" style={{ flex: '1 1 300px', padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('seller')}
                    className="screen-only section-edit-pill"
                    title="Click to edit seller details in sidebar"
                  >
                    ✎ Edit Seller Details
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '0.65rem' }}>
                    <img
                      src="/images/logo.png"
                      alt="VAIDURE"
                      crossOrigin="anonymous"
                      style={{ height: 42, width: 'auto', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: '"Playfair Display", Georgia, serif',
                          fontSize: '1.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.22em',
                          color: '#0d0d0d',
                          lineHeight: 1.1,
                        }}
                      >
                        {data.seller.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.62rem',
                          fontWeight: 600,
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-dark)',
                        }}
                      >
                        {data.seller.tagline}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#555555', lineHeight: 1.6, maxWidth: 400 }}>
                    <div><strong>{data.seller.name}</strong></div>
                    <div>{data.seller.address}</div>
                    <div>
                      Phone: {data.seller.phone} &bull; Email: {data.seller.email}
                      {data.seller.website && <span> &bull; Web: {data.seller.website}</span>}
                    </div>
                    <div style={{ marginTop: 4, color: '#333' }}>
                      <strong>GSTIN:</strong> {data.seller.gstin}
                      {data.seller.pan && <span> | <strong>PAN:</strong> {data.seller.pan}</span>}
                      {' '}| <strong>State:</strong> {data.seller.state} ({data.seller.stateCode})
                    </div>
                  </div>
                </div>

                {/* Invoice Title & Meta */}
                <div className="invoice-doc-header-right section-hover-wrapper" style={{ textAlign: 'right', flex: '0 0 auto', minWidth: 230, padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('identity')}
                    className="screen-only section-edit-pill"
                    title="Click to edit document identity in sidebar"
                  >
                    ✎ Edit Doc Info
                  </button>
                  <div
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: 'var(--primary)',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {data.docType}
                  </div>

                  {data.status && data.status.trim() !== '' && (
                    <div style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          padding: '4px 10px',
                          background:
                            (data.status || '').toLowerCase().includes('paid')
                              ? '#dcfce7'
                              : (data.status || '').toLowerCase().includes('approved')
                                ? '#dbeafe'
                                : (data.status || '').toLowerCase().includes('cancel') || (data.status || '').toLowerCase().includes('reject')
                                  ? '#fee2e2'
                                  : '#fef3c7',
                          color:
                            (data.status || '').toLowerCase().includes('paid')
                              ? '#166534'
                              : (data.status || '').toLowerCase().includes('approved')
                                ? '#1e40af'
                                : (data.status || '').toLowerCase().includes('cancel') || (data.status || '').toLowerCase().includes('reject')
                                  ? '#991b1b'
                                  : '#92400e',
                          borderRadius: 3,
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {data.status}
                      </span>
                    </div>
                  )}

                  <table style={{ marginLeft: 'auto', fontSize: '0.78rem', borderCollapse: 'collapse', textAlign: 'right' }}>
                    <tbody>
                      <tr>
                        <td style={{ color: '#777', padding: '2px 8px 2px 0' }}>Invoice No:</td>
                        <td style={{ fontWeight: 700, color: '#111' }}>{data.invoiceNumber}</td>
                      </tr>
                      <tr>
                        <td style={{ color: '#777', padding: '2px 8px 2px 0' }}>Date:</td>
                        <td style={{ fontWeight: 600, color: '#111' }}>{data.invoiceDate}</td>
                      </tr>
                      <tr>
                        <td style={{ color: '#777', padding: '2px 8px 2px 0' }}>Due Date:</td>
                        <td style={{ fontWeight: 600, color: '#111' }}>{data.dueDate}</td>
                      </tr>
                      {data.poNumber && (
                        <tr>
                          <td style={{ color: '#777', padding: '2px 8px 2px 0' }}>PO / Ref No:</td>
                          <td style={{ fontWeight: 600, color: '#111' }}>{data.poNumber}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Billed To & Shipped To Grid ── */}
              <div
                className="invoice-client-grid section-hover-wrapper"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.5rem',
                  background: '#faf9f6',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 4,
                  border: '1px solid #ede8de',
                  marginBottom: '1.75rem',
                  fontSize: '0.78rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('client')}
                  className="screen-only section-edit-pill"
                  title="Click to edit client & shipping details in sidebar"
                >
                  ✎ Edit Client & Destination
                </button>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 6 }}>
                    Billed To (Client / Partner)
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: 4 }}>
                    {data.client.company || 'Client Name'}
                  </div>
                  {data.client.contactPerson && (
                    <div style={{ color: '#444', marginBottom: 2 }}>
                      Attn: <strong>{data.client.contactPerson}</strong>
                    </div>
                  )}
                  <div style={{ color: '#555', whiteSpace: 'pre-line', marginBottom: 4 }}>
                    {data.client.billingAddress}
                  </div>
                  <div style={{ color: '#555' }}>
                    {data.client.email && <span>Email: {data.client.email} &bull; </span>}
                    {data.client.phone && <span>Phone: {data.client.phone}</span>}
                  </div>
                  {data.client.gstin && (
                    <div style={{ marginTop: 4, color: '#222' }}>
                      <strong>GSTIN:</strong> {data.client.gstin}
                    </div>
                  )}
                </div>

                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 6 }}>
                    Delivery / Shipping Destination
                  </div>
                  <div style={{ color: '#555', whiteSpace: 'pre-line', lineHeight: 1.5, marginBottom: 6 }}>
                    {data.client.shippingAddress || data.client.billingAddress}
                  </div>
                  <div style={{ color: '#444' }}>
                    <strong>Place of Supply:</strong> {data.client.placeOfSupply || data.client.state || 'As per destination'}
                  </div>
                </div>
              </div>

              {/* Render custom sections positioned after client */}
              {(data.customSections || [])
                .filter((sec) => {
                  const p = (sec.position || '').toLowerCase();
                  return !p.includes('item') && !p.includes('footer') && !p.includes('bank') && !p.includes('term');
                })
                .map(renderCustomPaperSection)}

              {/* ── Line Items Table ── */}
              <div className="invoice-table-wrapper section-hover-wrapper" style={{ overflowX: 'auto', marginBottom: '1.75rem', padding: '4px' }}>
                <button
                  type="button"
                  onClick={() => scrollToSection('items')}
                  className="screen-only section-edit-pill"
                  title="Click to edit line items in sidebar"
                >
                  ✎ Edit Line Items ({data.items.length})
                </button>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#111111', color: '#ffffff' }}>
                      <th style={{ padding: '9px 10px', width: '30px', textAlign: 'center' }}>#</th>
                      <th style={{ padding: '9px 12px' }}>Amenity Description & Specifications</th>
                      <th style={{ padding: '9px 10px', textAlign: 'center', width: '65px' }}>HSN</th>
                      <th style={{ padding: '9px 10px', textAlign: 'center', width: '80px' }}>Qty / Unit</th>
                      <th style={{ padding: '9px 10px', textAlign: 'right', width: '85px' }}>Unit Rate</th>
                      {!totals.isTaxExempt && (
                        <th style={{ padding: '9px 10px', textAlign: 'center', width: '55px' }}>Tax %</th>
                      )}
                      <th style={{ padding: '9px 12px', textAlign: 'right', width: '105px' }}>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.items.map((item, index) => {
                      const itemTotal = (item.qty || 0) * (item.rate || 0);
                      return (
                        <tr
                          key={item.id || index}
                          style={{
                            borderBottom: '1px solid #ede8de',
                            background: index % 2 === 0 ? '#ffffff' : '#fcfbfa',
                          }}
                        >
                          <td style={{ padding: '10px 8px', textAlign: 'center', color: '#777', fontWeight: 600 }}>
                            {index + 1}
                          </td>
                          <td style={{ padding: '10px 12px' }}>
                            <div style={{ fontWeight: 600, color: '#111', fontSize: '0.82rem' }}>
                              {item.name}
                            </div>
                            {item.description && (
                              <div style={{ fontSize: '0.7rem', color: '#666', marginTop: 2 }}>
                                {item.description}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'center', color: '#555' }}>
                            {item.hsn || '-'}
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'center', color: '#222', fontWeight: 600 }}>
                            {item.qty} <span style={{ fontSize: '0.68rem', fontWeight: 400, color: '#777' }}>{item.unit}</span>
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'right', color: '#333', fontFamily: '"Inter", system-ui, sans-serif', fontVariantNumeric: 'tabular-nums' }}>
                            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {Number(item.rate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                          {!totals.isTaxExempt && (
                            <td style={{ padding: '10px 8px', textAlign: 'center', color: '#555', fontVariantNumeric: 'tabular-nums' }}>
                              {String(item.taxRate ?? 0).replace(/%/g, '').trim()}%
                            </td>
                          )}
                          <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#111', fontFamily: '"Inter", system-ui, sans-serif', fontVariantNumeric: 'tabular-nums' }}>
                            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {itemTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Render custom sections positioned after line items */}
              {(data.customSections || [])
                .filter((sec) => (sec.position || '').toLowerCase().includes('item'))
                .map(renderCustomPaperSection)}

              {/* ── Calculations & Total Summary Box ── */}
              <div className="invoice-bottom-grid no-break" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '1.75rem' }}>
                {/* Left: Amount in Words & Notes */}
                <div className="section-hover-wrapper" style={{ padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('notes')}
                    className="screen-only section-edit-pill"
                    title="Click to edit notes & remarks in sidebar"
                  >
                    ✎ Edit Remarks
                  </button>
                  <div style={{ background: '#faf9f6', padding: '1rem', borderRadius: 4, border: '1px solid #ede8de', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 4 }}>
                      Total Amount In Words
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#222', fontStyle: 'italic', lineHeight: 1.4 }}>
                      {numberToWordsINR(totals.grandTotal)}
                    </div>
                  </div>

                  {data.notes && (
                    <div style={{ fontSize: '0.72rem', color: '#555', lineHeight: 1.5 }}>
                      <strong>Remarks / Specifications:</strong> {data.notes}
                    </div>
                  )}
                </div>

                {/* Right: Detailed Cost Breakdown */}
                <div className="section-hover-wrapper" style={{ padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('tax')}
                    className="screen-only section-edit-pill"
                    title="Click to edit tax structure & discount in sidebar"
                  >
                    ✎ Edit Tax & Discount
                  </button>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', fontVariantNumeric: 'tabular-nums' }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: '5px 0', color: '#555' }}>Subtotal (Taxable Base):</td>
                        <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#111', fontFamily: '"Inter", system-ui, sans-serif' }}>
                          <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                          {totals.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>

                      {totals.discountAmount > 0 && (
                        <tr style={{ color: '#15803d' }}>
                          <td style={{ padding: '5px 0' }}>Volume Discount ({data.discountOverall}%):</td>
                          <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, fontFamily: '"Inter", system-ui, sans-serif' }}>
                            -<span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {totals.discountAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )}

                      {totals.isIntraState && (
                        <>
                          <tr>
                            <td style={{ padding: '5px 0', color: '#555' }}>Central GST (CGST):</td>
                            <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#222', fontFamily: '"Inter", system-ui, sans-serif' }}>
                              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                              {totals.cgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: '5px 0', color: '#555' }}>State GST (SGST):</td>
                            <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#222', fontFamily: '"Inter", system-ui, sans-serif' }}>
                              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                              {totals.sgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                            </td>
                          </tr>
                        </>
                      )}

                      {totals.isInterState && (
                        <tr>
                          <td style={{ padding: '5px 0', color: '#555' }}>Integrated GST (IGST):</td>
                          <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#222', fontFamily: '"Inter", system-ui, sans-serif' }}>
                            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {totals.igst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )}

                      {totals.isCustomTax && totals.totalTax > 0 && (
                        <tr>
                          <td style={{ padding: '5px 0', color: '#555' }}>{data.taxType || 'Tax'}:</td>
                          <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#222', fontFamily: '"Inter", system-ui, sans-serif' }}>
                            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {totals.totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )}

                      {totals.shipping > 0 && (
                        <tr>
                          <td style={{ padding: '5px 0', color: '#555' }}>Freight & Fragile Handling:</td>
                          <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: 600, color: '#222', fontFamily: '"Inter", system-ui, sans-serif' }}>
                            <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginRight: 2 }}>{data.currency}</span>
                            {totals.shipping.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      )}

                      <tr style={{ borderTop: '2px solid #111111', borderBottom: '3px double #111111' }}>
                        <td style={{ padding: '10px 0 8px', fontSize: '0.95rem', fontWeight: 700, color: '#111', letterSpacing: '0.01em', verticalAlign: 'middle' }}>
                          Grand Total:
                        </td>
                        <td
                          style={{
                            padding: '10px 0 8px',
                            textAlign: 'right',
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            color: '#111111',
                            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontVariantNumeric: 'tabular-nums',
                            letterSpacing: '-0.02em',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <span style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 700, marginRight: 3 }}>
                            {data.currency}
                          </span>
                          {totals.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Bank Account & Terms & Signatory ── */}
              <div
                className="invoice-footer-grid no-break"
                style={{
                  borderTop: '1.5px solid #eae6dc',
                  paddingTop: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.75rem',
                  fontSize: '0.74rem',
                }}
              >
                {/* Bank Transfer Details */}
                <div className="section-hover-wrapper" style={{ padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('bank')}
                    className="screen-only section-edit-pill"
                    title="Click to edit remittance details in sidebar"
                  >
                    ✎ Edit Bank Info
                  </button>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 6 }}>
                    Direct Bank Remittance
                  </div>
                  <div style={{ lineHeight: 1.6, color: '#444' }}>
                    <div>Bank: <strong>{data.bank.bankName}</strong></div>
                    <div>A/C Name: <strong>{data.bank.accountName}</strong></div>
                    <div>A/C Number: <strong>{data.bank.accountNumber}</strong></div>
                    <div>IFSC Code: <strong>{data.bank.ifsc}</strong></div>
                    <div>Branch: {data.bank.branch}</div>
                    <div style={{ marginTop: 3 }}>UPI ID: <strong>{data.bank.upiId}</strong></div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="section-hover-wrapper" style={{ padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('terms')}
                    className="screen-only section-edit-pill"
                    title="Click to edit terms & commercial clauses in sidebar"
                  >
                    ✎ Edit Terms ({data.terms.length})
                  </button>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 6 }}>
                    Terms & Commercial Conditions
                  </div>
                  <ol style={{ paddingLeft: '1.1rem', margin: 0, color: '#666', lineHeight: 1.55 }}>
                    {data.terms.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ol>
                </div>

                {/* Authorized Signatory */}
                <div className="section-hover-wrapper" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', padding: '6px' }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('signatory')}
                    className="screen-only section-edit-pill"
                    title="Click to edit signatory & title in sidebar"
                  >
                    ✎ Edit Signatory
                  </button>
                  <div style={{ fontSize: '0.68rem', color: '#666' }}>
                    For <strong>{data.signatory?.company || data.seller.name}</strong>
                  </div>

                  <div style={{ margin: '1.25rem 0 0.5rem', textAlign: 'center', width: 180 }}>
                    <div
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        color: 'var(--gold-dark)',
                        opacity: 0.9,
                        borderBottom: '1px solid #bbb',
                        paddingBottom: 4,
                      }}
                    >
                      {data.signatory?.signText || 'Vaidure Essential'}
                    </div>
                    <div style={{ fontSize: '0.62rem', color: '#888', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {data.signatory?.title || 'Authorized Signatory'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Render custom sections positioned in footer */}
              {(data.customSections || [])
                .filter((sec) => {
                  const p = (sec.position || '').toLowerCase();
                  return p.includes('footer') || p.includes('bank') || p.includes('term');
                })
                .map(renderCustomPaperSection)}

              {/* Bottom Fine Print Footer */}
              <div
                className="print-fineprint section-hover-wrapper"
                style={{
                  borderTop: '1px solid #f0ece3',
                  marginTop: '1.5rem',
                  paddingTop: '0.75rem',
                  textAlign: 'center',
                  fontSize: '0.65rem',
                  color: '#999',
                  letterSpacing: '0.04em',
                  padding: '6px',
                }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('signatory')}
                  className="screen-only section-edit-pill"
                  title="Click to edit bottom footer disclaimer in sidebar"
                >
                  ✎ Edit Disclaimer
                </button>
                {data.footerNote || `This is a computer-generated luxury hospitality document issued by ${data.seller.name} • ${data.seller.address} • ${data.seller.email}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Catalog Modal: Quick Insert Items (Screen Only) ── */}
      {showCatalogModal && (
        <div
          className="screen-only"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 9999,
          }}
          onClick={() => setShowCatalogModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 8,
              maxWidth: 720,
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '2rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #eee', paddingBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', margin: 0, color: 'var(--primary)' }}>
                  Add from Vaidure Catalog
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: 'var(--muted)' }}>
                  Select signature luxury hospitality amenities to populate this invoice.
                </p>
              </div>
              <button
                onClick={() => setShowCatalogModal(false)}
                style={{ background: 'transparent', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#888' }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
              {CATALOG_PRESETS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 14px',
                    border: '1px solid #eae6dc',
                    borderRadius: 6,
                    background: '#faf9f6',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 8,
                    transition: 'all 0.2s',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary)', marginBottom: 3 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                      {item.description}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)' }}>
                      ₹{item.rate} <span style={{ fontSize: '0.68rem', fontWeight: 400, color: '#777' }}>/{item.unit}</span>
                    </span>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="lux-btn lux-btn-gold"
                      style={{ padding: '5px 12px', fontSize: '0.72rem' }}
                    >
                      + Add Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
