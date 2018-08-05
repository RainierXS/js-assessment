exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout;
    function timer() {
      if (start <= end) {
        console.log(start++); // eslint-disable-line no-console, no-param-reassign
        timeout = setTimeout(timer, 100);
      }
    }
    timer();

    return {
      cancel: function(){
        timeout && clearTimeout(timeout);
      }
    };
  }
};
