'use client';

import { ReactSVG } from 'react-svg';
import clsx from 'clsx';
import {iconMap} from "@/components/icon/iconsMap";

interface IconProps {
    className?: string;
    name: keyof typeof iconMap;
    alt?: string;
}


const Icon = ({ name, className = '' }: IconProps) => {
    const icon = iconMap[name];

    if (!icon) return null;

    return (
        <ReactSVG
            src={icon.src}
            beforeInjection={(svg) => {
                svg.removeAttribute('width');
                svg.removeAttribute('height');
                svg.setAttribute('class', clsx('text-black h-5 w-5', className));
            }}
        />
    );
};

export default Icon;
