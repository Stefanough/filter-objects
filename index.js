const objectFilter = {};

objectFilter.byArray = function byArray(object, filterArray) {
  // if the objects in the filter array have multiple properties
  // as in [{ id: 0, messageId:9 }]
  return object.reduce((a, c) => {
    filterArray.forEach((opt) => {
      let toPush = true;

      Object.keys(opt).forEach((key) => {
        if (c[key] !== opt[key]) toPush = false;
      });

      // this check (!a.includes) needs to be better. How do I deeply check for
      // object equality here?
      if (toPush && !a.includes(c)) a.push(c);
    });
    return a;
  }, []);
};

objectFilter.byObject = function byObject(object, filterObject) {
  const filters = filterObject;
  let result = [];

  // when filterObject has values that are arrays, { color: ['red', 'blue'] },
  // (color is red or color is blue) add it to result for later filtering
  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key])) {
      object.forEach((item) => {
        if (filters[key].includes(item[key]) && !result.includes(item)) {
          result.push(item);
        }
      });
    }
  });

  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key])) {
      result = result.filter(item => filters[key].includes(item[key]));
      delete filters[key];
    }
  });

  if (result.length === 0) result = object;

  Object.keys(filters).forEach((key) => {
    result = result.filter(item => item[key] === filters[key]);
  });

  return result;
};

module.exports = objectFilter;
