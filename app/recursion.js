exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const fileList = [];
    const directories = [];

    const searchDir = ({dir, files}) => {
      directories.push(dir);
      for (let i = 0; i < files.length; i++) {
        if (typeof files[i] === 'string') {
          if (!dirName || directories.indexOf(dirName) > -1) {
            fileList.push(files[i]);
          }
        } else {
          searchDir(files[i]);
        }
      }
      directories.pop();
    };
    searchDir(data);
    return fileList;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    return n > 1 ? this.fibonacci(n - 1) + this.fibonacci(n - 2) : n;
  },

  validParentheses: function(n) {

  }
};
