import {
  useState,
  useRef,
  useCallback,
  useEffect,
  MouseEvent,
} from 'react';

const useScrollProgress = () => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleProgressMove = useCallback(({ clientX }: MouseEvent<HTMLDivElement>): void => {
    if (!progressRef.current) {
      return;
    }

    const { scrollWidth } = progressRef.current;

    const selectedPercent: number = ((clientX / scrollWidth) * 100);
    setWidth(selectedPercent);
    
    const { scrollHeight, clientHeight } = document.documentElement;
    const windowHeight: number = scrollHeight - clientHeight;

    const moveScrollPercent: number = ((windowHeight * selectedPercent) / 100);

    window.scrollTo({
      top: moveScrollPercent,
      behavior: 'smooth',
    });
  }, []);

  const handleScroll = useCallback((): void => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
    } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = (scrollTop / windowHeight);

    setWidth(currentPercent * 100);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

  return {
    width,
    handleProgressMove,
    progressRef,
  };
};

export default useScrollProgress;