import {Layout} from "@/types/layout";
import {cn} from "@/lib/utils";


interface IMainLayout extends Layout {
    className?: string;
}

const MainLayout = (
    {children, className = ''}: IMainLayout,
) => {
    return (
        <div
            className={cn(
                'max-w-[1224px] mx-auto',
                className
            )}>
            {children}
        </div>
    );
};

export default MainLayout
