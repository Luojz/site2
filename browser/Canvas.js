// export function svg2canvas(targetElem) {
//   const nodes = targetElem.find('svg');
//   nodes.forEach((index, node) => {
//     var parentNode = node.parentNode;
//     //由于现在的IE不支持直接对svg标签node取内容，所以需要在当前标签外面套一层div，通过外层div的innerHTML属性来获取
//     const tempNode = document.createElement('div');
//     tempNode.appendChild(node);
//     const svg = tempNode.innerHTML;
//     const canvas = document.createElement('canvas');
//     //转换
//     canvg(canvas, svg);
//     parentNode.appendChild(canvas);
//   });
// }