/* array.forEach(element => {
    sumEl += element;
    console.log(`sumEl : ${sumEl}`)
  }); */

let sumEl = 0;
function sumItems(array) {
  //console.log(Array.isArray(array[0]));
  if (array.length !== 0) {
    if (Array.isArray(array[0])) {
      sumItems(array[0]);
    }
    console.log("----------------------------------")
    console.log(`array[0]: ${array[0]}`);
    console.log("----------------------------------")
    sumEl = sumEl + array[0];
    console.log(`sumEl: ${sumEl}`);
    sumItems(array.splice(1));
    console.log("----------------------------------")
    console.log(`array[0] @2@: ${array[0]}`);
    console.log("----------------------------------")

    return sumEl;
  }
  return;
}
console.log(sumItems([[1, 2, [[3], 4]], 5, []])); //[[1, 2, [[3], 4]], 5, []]
module.exports = sumItems;
