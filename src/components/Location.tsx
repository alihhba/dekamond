import {Icon} from "@/components/icon";

const Location = () => {
    return (
        <div className={'flex items-center gap-2'}>
            <Icon name={'calendar'} className={'group-hover:text-white'}/>
            <p className={'text-[10px] font-light group-hover:text-white'}>
                24 فروردین 1404
            </p>
        </div>
    );
};

export default Location
