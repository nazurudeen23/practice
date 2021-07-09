function chunkArray(array, size) {
  let result = []
  for (let i = 0; i < array.length; i += size) {
    //using slice method
    let chunk = array.slice(i, i + size)
    result.push(chunk)
  }
  return result
}
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let arrPairs = chunkArray(arr, 2);
console.log(arrPairs);
