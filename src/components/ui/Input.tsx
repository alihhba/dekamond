import {Icon} from "@/components/icon";
import {iconMap} from "@/components/icon/iconsMap";

interface InputI {
    label?: string,
    icon: keyof typeof iconMap,
    placeholder?: string,
    type?: string,
}

const Input = ({
                   label,
                   icon,
                   placeholder,
                   type = 'text',
               }: InputI) => {
    return (
        <div className={'relative focus:border focus:border-black w-full'}>

            <p className={'pb-1 text-[14px] font-light'}>
                {label}
            </p>
            <div className={'bg-white flex items-center w-full  relative h-10 rounded-xl'}>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={'ms-12 px-2 border-none focus:outline-none text-sm h-full'}
                />

                <div className={'absolute border-e border-[#EBEBEB]'}>
                    <Icon name={icon} className={'w-4.5 h-4.5 ms-[11px]'}/>

                    <div className={'h-full w-[1px] ms-[40px] '}/>
                </div>
            </div>
        </div>
    );
};

export default Input
