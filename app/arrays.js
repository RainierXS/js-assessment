exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for (const item of arr) {
      sum += item;
    }
    return sum;
  },

  remove: function(arr, item) {
    const newArr = [];
    for (const i of arr) {
      if (i !== item) {
        newArr.push(i);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    return [...arr, item];
  },

  truncate: function(arr) {
    return arr.slice(0, arr.length - 1);
  },

  prepend: function(arr, item) {
    return [item, ...arr];
  },

  curtail: function(arr) {
    return arr.slice(1, arr.length);
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    const newArr = [...arr];
    newArr.splice(index, 0, item);
    return newArr;
  },

  count: function(arr, item) {
    let count = 0;
    for (const i of arr) {
      if (i === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    const found = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i], i + 1) > -1){
        if (found.indexOf(arr[i]) === -1) {
          found.push(arr[i]);
        }
      }
    }
    return found;
  },

  square: function(arr) {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] *= newArr[i];
    }
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    const foundIdx = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) { foundIdx.push(i); }
    }
    return foundIdx;
  }
};
