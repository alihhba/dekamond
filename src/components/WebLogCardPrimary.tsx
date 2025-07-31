import {cn} from "@/lib/utils";
import Tag from "@/components/Tag";
import {Icon} from "@/components/icon";
import Location from "@/components/Location";


interface WebLogCardPrimaryI {
    tags?: { title: string }[]
}

const WebLogCardPrimary = ({
                               tags
                           }: WebLogCardPrimaryI) => {
    return (
        <div
            className={cn('bg-[#F5F5F5] h-65 flex justify-between group hover:bg-black  p-3.5 w-full  rounded-3xl ')}>
            <div className={'w-7/12'}>

                <div className={'flex items-center gap-2.5'}>
                    {tags?.map((tag, i) => {
                            return (
                                <Tag
                                    key={i}
                                    title={tag?.title}/>
                            )
                        }
                    )}
                </div>

                <div className={'mt-6 flex flex-col gap-2'}>
                    <p className={'text-[18px] font-semibold text-black group-hover:text-white  '}>لورم
                        ایپسوم متن ساختگی!</p>

                    <p className={'text-[14px] font-light  text-black group-hover:text-white  '}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                    </p>
                </div>

                <div className={'mt-4'}>
                    <Location/>
                </div>
            </div>

            <div className={'w-5/12 relative flex items-start justify-end h-auto rounded-e-3xl overflow-hidden  flex-col'}>
                <img src="/image1.svg" className={'h-full object-cover min-w-full'} alt=""/>

                <div className={'absolute bottom-3.5 end-3.5'}>
                    <div
                        className={'h-10 w-10 bg-white  flex items-center justify-center rounded-xl'}>
                        <Icon name={'arrow2'}/>
                    </div>
                </div>


                <div
                    className={'absolute h-full w-40 start-0 bg-gradient-to-r from-transparent to-[rgba(245,245,245,1)] group-hover:from-transparent group-hover:to-[rgba(20,20,20,1)]  '}
                ></div>

            </div>
        </div>
    );
};

export default WebLogCardPrimary
