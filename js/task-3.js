function getElementWidth(content, padding, border) {
  const totalWidth =
    Number.parseInt(content) +
    2 * Number.parseInt(padding) +
    2 * Number.parseInt(border);
  console.log(totalWidth);
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
