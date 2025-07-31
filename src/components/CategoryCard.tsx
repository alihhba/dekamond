import {cn} from "@/lib/utils";
import {Icon} from "@/components/icon";

const CategoryCard = () => {
    return (
        <div
            className={'h-15.5 relative   transition-all cursor-pointer duration-700 group hover:bg-[#F5F5F5] w-full max-w-56 bg-black rounded-2xl flex items-center group-hover:justify-start justify-center'}>
            <p className={cn(
                'text-white text-[24px]  group-hover:translate-x-16 transition-all duration-700 group-hover:text-black'
            )}>
                رسانه
            </p>

            <div className={'h-10 w-10 bg-white group-hover:-translate-x-20 absolute  group-hover:bg-black  transition-all duration-700 opacity-0 group-hover:opacity-100  flex items-center justify-center rounded-xl'}>
                <Icon name={'arrow2'} className={'group-hover:text-white transition-all duration-700'}/>
            </div>
        </div>
    );
};

export default CategoryCard
