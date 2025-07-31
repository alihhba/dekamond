import Tag from "@/components/Tag";
import {Icon} from "@/components/icon";
import Location from "@/components/Location";

interface WebLogCardSecondaryI {
    tags: { title: string }[]
}

const WebLogCardSecondary = ({
                                 tags
                             }: WebLogCardSecondaryI) => {
    return (
        <div className={'w-full p-3.5 h-65 rounded-3xl bg-[#F5F5F5]'}>
            <div className={'flex items-center justify-between w-full'}>

            <div className={'flex items-center  gap-2.5'}>
                {tags?.map((tag, i) => {
                        return (
                            <Tag
                                key={i}
                                title={tag?.title}/>
                        )
                    }
                )}
            </div>

                <Location/>
            </div>

            <div className={'mt-2 pb-2 z-20'}>
                <p className={'text-lg font-semibold'}>
                    لورم ایپسوم متن ساختگی!
                </p>
            </div>

            <div
                className={'w-full relative  -mt-2 flex items-start justify-end h-auto rounded-b-3xl overflow-hidden  flex-col'}>
                <img src="/image2.svg" className={'h-full object-cover min-w-full'} alt=""/>

                <div className={'absolute bottom-3.5 end-3.5'}>
                    <div
                        className={'h-10 w-10 bg-white  flex items-center justify-center rounded-xl'}>
                        <Icon name={'arrow2'}/>
                    </div>
                </div>


                <div
                    className={'absolute h-40 w-full top-0 bg-gradient-to-t from-transparent to-[rgba(245,245,245,1)] '}
                ></div>

            </div>


        </div>
    );
};

export default WebLogCardSecondary
