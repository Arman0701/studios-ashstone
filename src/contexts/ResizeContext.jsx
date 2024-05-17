import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { throttle } from '../utils/throttle';
import { RESIZE_THROTTLE_DELAY } from './consts';

const ResizeContext = createContext(undefined);
export const ResizeProvider = ({ children }) => {
    const [width, setwidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const onResize = useCallback(() => {
        setwidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setwidth, setHeight]);

    useEffect(() => {
        window.addEventListener('resize', throttle(onResize, RESIZE_THROTTLE_DELAY));

        return () => window.removeEventListener('resize', throttle(onResize, RESIZE_THROTTLE_DELAY));
        // eslint-disable-next-line
    }, []);

    const contextValue = {
        width,
        height,
    };

    return <ResizeContext.Provider value={contextValue}>{children}</ResizeContext.Provider>;
};

export const useResizeContext = () => useContext(ResizeContext);
