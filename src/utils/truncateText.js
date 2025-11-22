export function truncateText(text, maxChars) {
  if (!text) return;
  return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
}
