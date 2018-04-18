export const throttle = (fn, interval = 16) => {
  const _self = fn;
  let timer,
    firstTime = true;
  
  return (...rest) => {
    if (firstTime) {
      _self(...rest);
      return firstTime = false;
    }

    if (timer) {
      return false;
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      _self(...rest);
    }, interval);
  };
};