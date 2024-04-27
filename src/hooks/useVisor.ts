import { useEffect, useRef, useState } from 'react';

export const useVisorVisibility = (initialCuantity = 0, increment = 4) => {
    const [cuantity, setCuantity] = useState(initialCuantity);
    const visorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            const entry = entries[0];
            // Checks if the "viewfinder" element is visible on the screen.
            if (entry.isIntersecting) {
                // Increase the number of products to be displayed
                setCuantity((prevCuantity) => prevCuantity + increment);
            }
        };

        // Create an observer
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // when 50% of the element is visible
        });

        // Observe the "viewfinder" element to know when it is visible on the screen
        if (visorRef.current) {
            observer.observe(visorRef.current);
        }

        // Clean up
        return () => {
            if (visorRef.current) {
                observer.unobserve(visorRef.current);
            }
            observer.disconnect();
        };
    }, [increment]);

    return { cuantity, visorRef };
};
