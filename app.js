const filterOutOdds = (...args) => {
  return args.filter((num) => {
    return num % 2 === 0;
  });
};

const findMin = () => {
  return Math.min(...[1, 2, 4]);
};

const mergeObjects = (a, b) => {
  return { ...a, ...b };
};

const doubleAndReturnArgs = (arr, ...args) => {
  const newArr = [
    ...arr,
    ...args.map((val) => {
      return val * 2;
    }),
  ];
  return newArr;
};

const removeRandom = (...args) => {
  return args.filter((num) => {
    return num % 2 !== 0;
  });
};

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
  obj.forEach((value) => {
    value[key] = val;
  });
  return obj;
};

const removeKey = (obj, key) => {
  const object = { ...obj };
  const newObj = delete object[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};
