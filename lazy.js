const lazy = function (creator) {
    let res;
    let processed = false;
    return function () {
      if (processed) return res;
      res = creator.apply(this, arguments);
      processed = true;
      return res;
    };
  }