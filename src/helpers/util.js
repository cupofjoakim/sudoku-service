const ShuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const RotateArray = (arr, shiftOffset) => {
  let temp = arr.slice();
  for (let i = 0; i < shiftOffset; i++) {
    let first = temp.shift();
    temp.push(first);
  }
  return temp;
};

export { ShuffleArray, RotateArray };
