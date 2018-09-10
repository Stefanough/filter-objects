const objectFilter = {};

objectFilter.byArray = function byArray(object, filterArray) {
  console.log(filterArray);
  if (Object.keys(filterArray[0]).length > 1) {
    return object.reduce((a, c) => {
      filterArray.forEach((opt) => {
        let toPush = true;

        Object.keys(opt).forEach((key) => {
          if (c[key] !== opt[key]) toPush = false;
        });

        if (toPush && !a.includes(c)) a.push(c);
      });
      return a;
    }, []);
  }

  const key = Object.keys(filterArray[0])[0];
  return object.reduce((a, c) => {
    if (filterArray.some(e => e[key] === c[key])) a.push(c);
    return a;
  }, []);
};

objectFilter.byObject = function byObject(object, filterObject) {

};

module.exports = objectFilter;
