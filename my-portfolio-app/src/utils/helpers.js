// src/utils/helpers.js

/**
 * Ensures user URLs always include protocol (https://)
 */
export const formatUrl = (url) => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
};

/**
 * Copies text to clipboard and handles brief feedback callback
 */
export const copyToClipboard = async (text, onSuccess) => {
  try {
    await navigator.clipboard.writeText(text);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};