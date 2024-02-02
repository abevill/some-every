function hasOddNumber(arr) {
    return arr.includes(function(num) {
      return num % 2 === 1;
    });
  }
  function hasAZero(num) {
    return num.toString().includes("0");
  }
  function hasOnlyOddNumbers(arr) {
    return arr.every(function(num) {
      return num % 2 === 1;
    });
  }
  function hasNoDuplicates(arr) {
    return arr.length === new Set(arr).size;
  }
  function hasCertainKey(arr, key) {
    return arr.every(function(obj) {
      return obj.hasOwnProperty(key);
    });
  }
  function hasCertainValue(arr, key, value) {
    return arr.every(function(obj) {
      return obj[key] === value;
    });
  }
            