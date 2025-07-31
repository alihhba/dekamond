import {Layout} from "@/types/layout";
import Header from "@/app/layouts/Header";

const MainLayout = ({
                        children,
                    }: Layout) => {
    return (
        <div className={'w-full h-full'}>
            <div className={'w-full  top-0 pt-6 z-50 '}>
                <Header/>
            </div>
            <div className={'w-full'}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout
