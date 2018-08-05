exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log(str, amount);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {

    }
    return newStr;
  },

  wordWrap: function(str, cols) {
    const words = str.split(' ');
    let newStr = '';
    let length = 0;
    while (words.length) {
      length += words[0].length;
      newStr += words[0];
      if (length >= cols || words[1] && length + words[1].length > 5){
        newStr += '\n';
        length = 0;
      } else {
        newStr += words.length > 1 ? ' ' : '';
      }
      words.shift();
    }
    return newStr;
  },

  reverseString: function(str) {
    let reversed = '';

    // reversed = str.split('').reverse().join('');
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    return reversed;
  }
};
