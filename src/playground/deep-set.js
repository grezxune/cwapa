import path from 'path';

export const isInteger = (obj) => String(Math.floor(Number(obj))) === obj;

export function setDeep(path, value, obj) {
    let res = {};
    let resVal = res;
    let i = 0;
    let pathArray = path.replace(/\]/g, '').split(/\.|\[/);
  
    for (; i < pathArray.length - 1; i++) {
      const currentPath = pathArray[i];
      let currentObj = obj[currentPath];
  
      if (resVal[currentPath]) {
        resVal = resVal[currentPath];
      } else if (currentObj) {
        resVal = resVal[currentPath] = Array.isArray(currentObj)
          ? [...currentObj]
          : { ...currentObj };
      } else {
        const nextPath = pathArray[i + 1];
        resVal = resVal[currentPath] =
          isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
      }
    }
  
    resVal[pathArray[i]] = value;
    return { ...obj, ...res };
  }