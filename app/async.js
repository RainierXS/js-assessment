exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((res) => res(value));
  },

  manipulateRemoteData: function(url) {
    const init = {
      method: 'GET'
    };
    return fetch(url, init).
      then((res) => res.json()).
      then((data) =>
        data.people.map((person) => person.name).sort()
      );
  }
};
