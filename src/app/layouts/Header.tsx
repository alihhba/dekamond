import MainLayout from "@/app/layouts/MainLayout";
import {Icon} from "@/components/icon";
import {SelectLanguage} from "@/components/selectLanguage";


const items: { title: string }[] = [
    {
        title: 'درباره ما'
    }, {
        title: 'وبلاگ'
    }, {
        title: 'معرفی شرکت ها'
    }, {
        title: 'تماس با ما'
    }, {
        title: 'موقعیت های شغلی'
    }
]

const Header = () => {
    return (
        <div className={'w-full bg-black z-50'}>
            <MainLayout className={'flex flex-row-reverse h-15.25  bg-transparent w-full items-center justify-between'}>
                <div>
                    <SelectLanguage/>
                </div>


                <div className={'flex items-center flex-row-reverse gap-13.5'}>
                    {items?.map((item , i) => {
                        return (
                            <div
                            key={i}
                            >
                                <p className={'text-xs text-white font-normal'}>{item?.title}</p>
                            </div>
                        )
                    })?.reverse()}
                </div>

                <div>
                    <Icon name={'logo'} className={'w-16 h-full'}/>
                </div>
            </MainLayout>
        </div>

    );
};

export default Header
