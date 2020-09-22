export function search(nameKey, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].value === nameKey) {
      return myArray[i];
    }
  }
}
