// Utility to convert numbers into Indian numbering words (Rupees)

const ones = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
  'Seventeen', 'Eighteen', 'Nineteen'
];

const tens = [
  '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
];

function convertBelowThousand(num) {
  let str = '';
  if (num >= 100) {
    str += ones[Math.floor(num / 100)] + ' Hundred ';
    num %= 100;
  }
  if (num >= 20) {
    str += tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
  } else if (num > 0) {
    str += ones[num];
  }
  return str.trim();
}

export function numberToWordsINR(amount) {
  if (!amount || isNaN(amount) || amount === 0) return 'Rupees Zero Only';

  const absolute = Math.abs(Math.round(amount * 100) / 100);
  const rupees = Math.floor(absolute);
  const paise = Math.round((absolute - rupees) * 100);

  let result = '';

  const crores = Math.floor(rupees / 10000000);
  let remainder = rupees % 10000000;

  const lakhs = Math.floor(remainder / 100000);
  remainder = remainder % 100000;

  const thousands = Math.floor(remainder / 1000);
  remainder = remainder % 1000;

  const hundredsAndBelow = remainder;

  if (crores > 0) {
    result += convertBelowThousand(crores) + ' Crore ';
  }
  if (lakhs > 0) {
    result += convertBelowThousand(lakhs) + ' Lakh ';
  }
  if (thousands > 0) {
    result += convertBelowThousand(thousands) + ' Thousand ';
  }
  if (hundredsAndBelow > 0) {
    result += convertBelowThousand(hundredsAndBelow) + ' ';
  }

  result = result.trim();
  if (!result) result = 'Zero';

  let finalStr = 'Rupees ' + result;
  if (paise > 0) {
    finalStr += ' and ' + convertBelowThousand(paise) + ' Paise';
  }
  finalStr += ' Only';

  return finalStr;
}
