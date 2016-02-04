export default function placeholderFor(first, last, { size = 300, color = nameToColor(first, last) } = {}) {
  return `//place-hold.it/${size}/${color}&text=${encodeURIComponent(`(${first})`)}&fontsize=16`;
}

function nameToColor(first, last) {
  const numeric = parseInt(`${first}${last}`.replace(/[^\w]/g, '').toLowerCase(), 36);
  return (numeric.toExponential().slice(2, -4) & 0xffffff).toString(16);
}
