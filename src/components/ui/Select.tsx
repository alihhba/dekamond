'use client'
import { Icon } from "@/components/icon";
import { iconMap } from "@/components/icon/iconsMap";

interface SelectI {
    label?: string;
    icon: keyof typeof iconMap;
    placeholder?: string;
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (value: string) => void;
}

const Select = ({
                    label,
                    icon,
                    placeholder,
                    options,
                    value,
                    onChange,
                }: SelectI) => {
    return (
        <div className="relative w-full">
            {label && (
                <p className="pb-1 text-[14px] font-light">
                    {label}
                </p>
            )}

            <div className="bg-white flex items-center relative h-10 rounded-xl overflow-hidden" >
                {/* Icon container (same as before) */}
                <div className="absolute h-full flex items-center">
                    <Icon name={icon} className="w-4.5 h-4.5 ms-[11px]" />
                    <div className="h-[30px] border-[#EBEBEB] w-[1px] border-e  ms-[5px] " />
                </div>

                {/* Select element */}
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full h-full ps-12 px-2 border-none focus:border-black text-sm appearance-none bg-white "
                >
                    {placeholder && (
                        <option value="" className={'text-gray-500'} disabled>
                            {placeholder}
                        </option>
                    )}

                    {options.map((option) => (
                        <option  key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Custom dropdown arrow */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                 <Icon name={'arrow_down'} className={'text-[#9F9F9F]'}/>
                </div>
            </div>
        </div>
    );
};

export default Select;
