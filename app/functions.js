exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return Reflect.apply(fn, null, arr);
  },

  speak: function(fn, obj) {
    return Reflect.apply(fn, obj, obj);
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`;
  },

  makeClosures: function(arr, fn) {
    const ans = [];
    for (const i of arr) {
      ans.push(((v) => () => fn(v))(i));
    }
    return ans;
  },

  partial: function(fn, str1, str2) {
    return (arg) => fn(str1, str2, arg);
  },

  useArguments: function() {
    let sum = 0;
    for (const arg of arguments) {
      sum += arg;
    }
    return sum;
  },

  callIt: function(fn) {
    const args = Reflect.apply(Array.prototype.slice, arguments, [1, arguments.length]);
    return Reflect.apply(fn, null, args);
  },

  partialUsingArguments: function(fn) {
    const args = Reflect.apply(Array.prototype.slice, arguments, [1, arguments.length]);
    return function() {
      const allArgs = args.concat(...arguments);
      return Reflect.apply(fn, null, allArgs);
    };
  },

  curryIt: function(fn) {
    return;
  }
};
