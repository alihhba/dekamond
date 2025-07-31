import {Icon} from "@/components/icon";

const Footer = () => {
    return (
        <div className={'w-full flex flex-col items-center justify-start px-[105px]'}>
            <div>
                <img src="/frame10.svg" alt=""/>
            </div>

            <div className={'mt-[45px] w-full flex items-center justify-between'}>

                <div className={'flex flex-col items-center justify-center gap-2'}>
                    <Icon name={'call2'} className={'w-10 h-10 '}/>
                    <p className={'text-xs font-medium'}>
                        021-42101000
                    </p>
                </div>

                <div className={'flex flex-col items-center justify-center gap-2'}>
                    <Icon name={'call2'} className={'w-10 h-10 '}/>
                    <p className={'text-xs font-medium'}>
                        تهران، جهان کودک، برج دات وان
                    </p>
                </div>

                <div className={'flex flex-col items-center justify-center gap-2'}>
                    <Icon name={'email2'} className={'w-10 h-10 '}/>
                    <p className={'text-xs font-medium'}>
                        info1@one-holding.ir
                    </p>
                </div>
            </div>

            <div className={'w-full flex flex-row items-center justify-between mt-[60px]'}>
                <div>
                    <p className={'text-[14px] font-medium mb-1'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                </div>

                <div>
                    <p className={'text-[14px] font-medium mb-1'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                </div>

                <div>
                    <p className={'text-[14px] font-medium mb-1'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                    <p className={'text-[12px] font-normal'}>
                        دسترسی سریع
                    </p>
                </div>

            </div>

            <div className={'flex items-center gap-[18px] w-full mt-[60px]'}>
                <div className={'border-b border-black w-full'}/>
                <p className={'text-nowrap font-normal text-[14px]'}>
                    هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @
                </p>

                <div className={'border-b border-black w-full'}/>

            </div>
        </div>
    );
};

export default Footer
