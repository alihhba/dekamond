import {Icon} from "@/components/icon";
import {iconMap} from "@/components/icon/iconsMap";

interface TextAreaI {
    label?: string,
    icon: keyof typeof iconMap,
    placeholder?: string,
    type?: string,
}

const TextAreaI = ({
                   label,
                   icon,
                   placeholder,
               }: TextAreaI) => {
    return (
        <div className={'relative'}>

            <p className={'pb-1 text-[14px] font-light'}>
                {label}
            </p>
            <div className={'bg-white flex items-start pt-2  relative h-[130px] rounded-xl'}>
                <textarea
                    placeholder={placeholder}
                    className={'ms-12 w-full px-2 border-none focus:outline-none text-sm'}
                />

                <div className={'absolute border-e top-2 border-[#EBEBEB]'}>
                    <Icon name={icon} className={'w-4.5 h-4.5 ms-[11px]'}/>

                    <div className={'h-full w-[1px] ms-[40px] '}/>
                </div>
            </div>


        </div>
    );
};

export default TextAreaI
