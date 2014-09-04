describe('flatten array', function () {
  it('should flatten an array', function () {
    var tmpArray = [],
        arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

   function flatten(arr) {
      var self = arguments.callee;

      arr.forEach(function (item) {
        if(typeof item === 'object') {
          self(item);
        } else {
          tmpArray.push(item);
         }
      });

      return tmpArray;
    }
    arr =  flatten(arr).sort();

    expect(arr).toEqual(expected);
  });
});



