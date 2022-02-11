const hexToRGB = (hex: string, alpha?: number): string => {
  const upperCaseHex = hex.toUpperCase().replace('#', '');

  const h = '0123456789ABCDEF';
  const r = h.indexOf(upperCaseHex[0]) * 16 + h.indexOf(upperCaseHex[1]);
  const g = h.indexOf(upperCaseHex[2]) * 16 + h.indexOf(upperCaseHex[3]);
  const b = h.indexOf(upperCaseHex[4]) * 16 + h.indexOf(upperCaseHex[5]);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

export default hexToRGB;
