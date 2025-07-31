interface TagI {
    title: string;
}

const Tag = ({
                 title
             }: TagI) => {
    return (
        <div className={'px-4 h-[26px] w-fit flex items-center justify-center  bg-white rounded-[10px]'}>
            <p className={'text-[10px] font-light'}>
            {title}
            </p>
        </div>
    );
};

export default Tag
