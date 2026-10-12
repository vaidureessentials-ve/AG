/**
 * Utility helper for FormSubmit integration and IST Timestamp formatting.
 * Ensures timestamps are consistently recorded in Indian Standard Time (UTC+5:30)
 * regardless of where in the world the visitor is submitting from.
 */

export const getISTTimestamp = () => {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date()) + ' IST';
  } catch {
    return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  }
};

export const getPageUrl = () => {
  if (typeof window !== 'undefined' && window.location) {
    return window.location.href;
  }
  return 'https://www.vaidure.com';
};
