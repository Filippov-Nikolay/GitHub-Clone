import { useEffect, useRef } from 'react';

const useIntersectionObserver = (className, threshold = 0.2) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const onEntry = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        };

        const observer = new IntersectionObserver(onEntry, { threshold: [threshold] });

        elementsRef.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            elementsRef.current.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [className, threshold]);

    return elementsRef;
};

export default useIntersectionObserver;
