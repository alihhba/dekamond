import {Icon} from "@/components/icon";

interface InfoCardI {
    hasMoreIcon?: boolean;
}

const InfoCard = ({hasMoreIcon = false}: InfoCardI) => {
    return (
        <div className={'w-full h-[306px] flex items-center justify-start flex-col bg-white p-6 rounded-3xl'}>
            <div className={'h-32.25 w-32.25'}>
                <img src="/logo2.svg" alt=""/>
            </div>

            <div className={'mt-6'}>
                <p className={'text-[12px] font-medium text-justify'}>
                    دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش
                    پروازهای هوایی را به دنیای ریلی می‌آورد.
                </p>
            </div>


            {hasMoreIcon ? (
                <div className={'relative mt-3'}>
                    <img src="/polygon2.svg" alt=""/>

                    <div className={'flex flex-col gap-1 absolute top-11 end-0 start-0 items-center justify-center'}>

                        <p className={'text-[12px] font-light'}>
                            درباره شرکت
                        </p>
                        <Icon name={'arrow3'} className={'w-5 h-5'}/>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default InfoCard
