import {Icon} from "@/components/icon";
import {iconMap} from "@/components/icon/iconsMap";

const SocialCard = ({
                        icon
                    }: { icon: keyof typeof iconMap }) => {
    return (
        <div className={'flex w-full justify-end  items-start'}>
            <div
                className={'w-10 relative group hover:bg-black cursor-pointer transition-all duration-500  h-10 bg-[#F5F5F5] flex items-center justify-center rounded-full'}>
                <Icon name={icon} className={'text-black group-hover:text-white transition-all duration-500'}/>
                <div
                    className={'w-[62px] absolute bottom-11 -end-3  opacity-0 group-hover:opacity-100 transition-all duration-500 '}>
                    <img src="/frame8.svg" className={''} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default SocialCard
