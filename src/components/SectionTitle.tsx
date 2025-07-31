const SectionTitle = ({
                          title,
                          label
                      }: { title: string , label?:string }) => {
    return (
        <div className={'flex flex-col gap-2.5'}>
            <div className={'flex  items-end  gap-x-2.5  '}>
                <div className={''}>
                    <p className={'text-[7px] font-black'}>
                        ONE GROUP
                    </p>
                    <img
                        src="/frame2.svg"
                        alt=""
                        className="w-full h-full"
                    />

                </div>
                <p className={'text-[#939393] font-light text-sm -mb-1.5'}>
                    {title}
                </p>
            </div>
            <div>
                <p className={'text-lg font-medium'}>
                    {label}
                </p>
            </div>
        </div>
    );
};

export default SectionTitle
