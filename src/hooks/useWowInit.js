import { useEffect } from 'react';

const useWowInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.WOW !== 'undefined') {
      new window.WOW().init();
    }
  }, []);
};

export default useWowInit;