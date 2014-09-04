describe('flatten array', function () {
  it('should flatten an array', function () {
    var tmpArray = [],
        arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

   function go(arra) {
      var self = arguments.callee;

      arra.forEach(function (item) {
        if(typeof item === 'object') {
          self(item);
        } else {
          tmpArray.push(item);
         }
      });

      return tmpArray;
    }
    arr =  go(arr).sort();

    expect(arr).toEqual(expected);
  });
});



