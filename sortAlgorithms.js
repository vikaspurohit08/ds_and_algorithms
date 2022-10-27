const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(arr, i, min);
    }
  }
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};

const merge = (left, right) => {
  //[30][20]
  let sortedArr = []; //[20]

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift()); //20
    }
  }

  return [...sortedArr, ...left, ...right]; //[20,30]
};

const mergeSort = (arr) => {
  const half = arr.length / 2;

  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
};

const partition = (arr, left, right) => {
  //(arr,0,9) //([30,20,34,40,12],0,4) //([30,20,12],0,2)
  const pivot = arr[Math.floor((left + right) / 2)]; //56 //34 //20

  let i = left; //0 //0 //0
  let j = right; //9 //4 //2
  while (i <= j) {
    //true //true //false //true //true
    while (arr[i] < pivot) {
      i++; //1 //2 //4 //1 //2
    }
    while (arr[j] > pivot) {
      j--; //8 //7 //5 //2
    }
    if (i <= j) {
      swap(arr, i, j); //[30,20,34,40,56,12,98,60,67,87] //[30,20,34,40,12,56,98,60,67,87] //[30,20,12,40,34] //[12,20,30]
      i++; //3 //5 //3 //1
      j--; //6 //4 //3 //1
    }
  }

  return i; //5 //3 //1
};

const quickSort = (arr, left, right) => {
  //(arr,0,9) //([30,20,34,40,12],0,4) //([30,20,12],0,2)
  let index; //undefined
  if (arr.length > 1) {
    //true
    index = partition(arr, left, right); //5 //3 //1
    if (left < index - 1) {
      //true
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
};

let array = [30, 20, 60, 40, 56, 12, 98, 34, 67, 87];
console.time("selection");
console.log("selection result", selectionSort(array));
console.timeEnd("selection"); //7.485ms //7.628
array = [30, 20, 60, 40, 56, 12, 98, 34, 67, 87];
console.time("bubble");
console.log("bubble result", bubbleSort(array));
console.timeEnd("bubble"); //0.178ms //0.196 //0.2
array = [30, 20, 60, 40, 56, 12, 98, 34, 67, 87];
console.time("merge");
console.log("merge result", mergeSort(array));
console.timeEnd("merge"); //0.3 //0.233
array = [30, 20, 60, 40, 56, 12, 98, 34, 67, 87];
console.time("quick");
console.log("quick result", quickSort(array, 0, array.length - 1));
console.timeEnd("quick"); //0.214 //0,226
