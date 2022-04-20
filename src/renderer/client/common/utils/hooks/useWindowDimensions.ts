import { useState, useEffect } from 'react';

type WindowDimension = {
  width: number;
  height: number;
};

/**
 *
 * @param {number} offset
 * @returns {WindowDimension}
 */
function getWindowDimensions(offset: number): WindowDimension {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width: width - offset,
    height: height - offset,
  };
}

/**
 * @param {number} offset offset desired from the actual screen size
 * @returns {WindowDimension} screen width and height
 */
export default (offset: number): WindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(
    getWindowDimensions(offset)
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(offset));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [offset]);
  return windowDimensions;
};
