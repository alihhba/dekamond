'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    from?: 'left' | 'right' | 'top' | 'bottom';
    delay?: number;
    className?: string;
}

export const ScrollAnimation = ({
                                    children,
                                    from = 'right',
                                    delay = 0,
                                    className = ''
                                }: ScrollAnimationProps) => {
    const ref = useRef(null);
    const [isRTL, setIsRTL] = useState(false);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Check RTL direction safely
    // useEffect(() => {
    //     setIsRTL(document?.dir === 'rtl' || document?.documentElement.dir === 'rtl');
    // }, []);

    const getXDirection = () => {
        // if (from === 'left') return isRTL ? 100 : -100;
        // if (from === 'right') return isRTL ? -100 : 100;
        if (from === 'left') return  -100 ;
        if (from === 'right') return  100 ;
        return 0;
    };

    const getYDirection = () => {
        if (from === 'top') return -100;
        if (from === 'bottom') return 100;
        return 0;
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: getXDirection(),
            y: getYDirection()
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};
