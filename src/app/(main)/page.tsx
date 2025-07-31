import {Icon} from "@/components/icon";
import MainLayout from "@/app/layouts/MainLayout";
import SectionTitle from "@/components/SectionTitle";
import CategoryCard from "@/components/CategoryCard";
import WebLogCardPrimary from "@/components/WebLogCardPrimary";
import WebLogCardSecondary from "@/components/selectLanguage/WebLogCardSecondary";
import InfoCard from "@/components/InfoCard";
import ContactUsForm from "@/components/ContactUsForm";
import SocialCard from "@/components/SocialCard";
import Footer from "@/components/Footer";
import {ScrollAnimation} from "@/components/ScrollAnimatedElement ";

export default function Home() {
    return (
        <div className={'h-[200dvh]'}>

            <div className={'w-full flex items-center justify-center h-[650px] bg-black -mt-[85px]'}>
                <Icon name={'video'} className={'w-21.25 h-21.25'}/>
            </div>

            {/*section one*/}
            <MainLayout className={'mt-[43px]'}>
                <div className={'flex items-start gap-[96px] justify-between'}>
                    <ScrollAnimation from={'right'}>
                        <div className={'w-3/12 flex flex-col justify-start gap-2'}>
                            <p className={'text-[30px] font-normal text-start'}>گروه
                            </p>
                            <p className={' text-[30px] font-normal text-start'}>
                                ارزش‌آفرین ‌وان</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation from={'left'}>
                        <p className={'w-full '}>وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری
                            هوشمندانه
                            و ساماندهی خردمندانه، زیرساخت های لازم برای آبادانی و سودرسانی همگانی را فراهم می آورد، تا
                            کسانی
                            که پویا و کوشا هستند، مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است که
                            با
                            شعار»آسایش برای همگان« نقشی محوری در زمینه‌های کلیدی مانند حمل و نقل، پولی-مالی،
                            سرمایه‌گذاری،
                            کارآفرینی، توسعه تجارت بین‌المللی، رسانه، فناوری و ارتباطات ایفا خواهد نمود.
                        </p>
                    </ScrollAnimation>
                </div>
            </MainLayout>


            {/*    section 2*/}
            <ScrollAnimation from={'bottom'}>
                <MainLayout className={'bg-[#F5F5F5] h-[140px] mt-[68px] flex justify-center rounded-3xl  relative'}>
                    <div className={'mt-[38px] text-center'}>
                        <p className={'text-xs font-medium mb-1  '}>ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت
                            ارزش‌آفرینی و افزودن ارزشی به جهان امروز ؛ چرا که باور داریم:
                        </p>
                        <p className={'text-xs font-medium '}> «فردا، فرزند امروز است.»
                        </p>
                    </div>

                    <div className={'w-full absolute bottom-0 h-[102px]'}>
                        <img src="/frame1.svg" className={'w-full h-full'} alt=""/>
                    </div>
                </MainLayout>
            </ScrollAnimation>


            <div className={'relative w-full pb-24'}>


                <MainLayout className={'mt-20'}>
                    <ScrollAnimation from={'right'}>
                        <SectionTitle
                            title={'دسته‌بندی شرکت ها'}
                            label={'  جمله کوتاه یا یک تایتل'}

                        />
                    </ScrollAnimation>

                    <ScrollAnimation from={'bottom'}>
                        <div className={'mt-10 flex flex-wrap  gap-6'}>
                            {Array.from({length: 10}).map((item, i) => {
                                return (

                                    <CategoryCard
                                        key={i}
                                    />
                                )
                            })}
                        </div>
                    </ScrollAnimation>
                </MainLayout>

                <img src="/frame3.svg" className={'w- h-full absolute top-0 end-0'} alt=""/>
            </div>


            <MainLayout>
                <ScrollAnimation from={'right'}>
                    <SectionTitle
                        title={'وبلاگ'}
                        label={'  جمله کوتاه یا یک تایتل'}
                    />
                </ScrollAnimation>

                <div className={'flex items-center gap-6 w-full mt-10'}>
                    <ScrollAnimation from={'right'}>
                        <WebLogCardPrimary
                            tags={[
                                {
                                    title: 'هواپیما'
                                }, {
                                    title: "سفر"
                                }, {
                                    title: 'فرودگاه'
                                }, {
                                    title: 'گردشگری'
                                }
                            ]}
                        />
                    </ScrollAnimation>
                    <ScrollAnimation from={'left'}>
                        <WebLogCardPrimary
                            tags={[
                                {
                                    title: 'هواپیما'
                                }, {
                                    title: "سفر"
                                }, {
                                    title: 'فرودگاه'
                                }, {
                                    title: 'گردشگری'
                                }
                            ]}
                        />
                    </ScrollAnimation>
                </div>
                <ScrollAnimation from={'bottom'}>
                    <div className={'flex items-center gap-6 mt-6'}>
                        <WebLogCardSecondary
                            tags={[
                                {
                                    title: 'سینما'
                                }, {
                                    title: "لحظه تی وی"
                                },
                            ]}
                        />

                        <WebLogCardSecondary
                            tags={[
                                {
                                    title: 'تاکسی'
                                }, {
                                    title: "دات وان سفر"
                                },
                            ]}
                        />
                        <WebLogCardSecondary
                            tags={[
                                {
                                    title: 'سینما'
                                }, {
                                    title: "لحظه تی وی"
                                },
                            ]}
                        />

                    </div>
                </ScrollAnimation>
            </MainLayout>


            <MainLayout className={'mt-20 flex items-center gap-10 h-[993px]'}>
                <div className={'h-full'}>
                    <ScrollAnimation from={'right'}>
                        <img src="/tower1.svg" className={'h-full '} alt=""/>
                    </ScrollAnimation>
                </div>

                {/*<ScrollAnimation from={'left'}>*/}
                <div className={'h-full w-full bg-[#F5F5F5] py-10 rounded-[40px] '}>
                    <div className={'pt-6 h-full flex flex-col gap-9 overflow-y-auto'}>
                        <div>
                            <div className={'px-10 flex items-center justify-between'}>

                                <SectionTitle
                                    title={'معرفی شرکت ها'}
                                />

                                <Icon name={'arrow2'}/>
                            </div>
                            <div className={'h-[300px] flex items-center gap-6 px-10 pt-6 mb-16'}>
                                {Array.from({length: 3}).map((item, i) => {
                                    return (
                                        <InfoCard
                                            hasMoreIcon={i === 0}
                                            key={i}/>
                                    )
                                })}

                            </div>
                        </div>

                        {Array.from({length: 6}).map((item, i) => {
                            return (
                                <div key={i}>
                                    <div key={i}>
                                        <div className={'px-10 flex items-center justify-between'}>

                                            <SectionTitle
                                                title={'معرفی شرکت ها'}
                                            />

                                            <Icon name={'arrow2'}/>
                                        </div>


                                        <div className={'h-[300px] flex items-center gap-6 px-10 mt-6'}>
                                            {Array.from({length: 3}).map((item, i) => {
                                                return (
                                                    <InfoCard
                                                        key={i}/>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/*</ScrollAnimation>*/}

            </MainLayout>


            <MainLayout className={'mt-20 flex w-full relative justify-between'}>
                <ScrollAnimation from={'right'}>
                    <div className={'flex flex-col gap-6'}>
                        <div>
                            <SectionTitle
                                title={'تماس با ما'}
                            />

                            <p className={'text-lg font-medium mt-2.5'}>
                                با ما در تماس باشید.
                            </p>
                            <p className={'text-[14px] font-medium mt-4'}>گفت‌وگو، آغاز هر پیوند است.
                            </p>
                            <p className={'text-[14px] font-medium '}> اگر پرسشی دارید، مایلید بیشتر درباره ما بدانید یا
                                ایده‌ای در ذهن دارید، خوشحال می‌شویم از شما بشنویم.</p>
                        </div>

                        <div className={'bg-[#F5F5F5] z-10 rounded-[30px] w-[600px] h-full p-10'}>
                            <ContactUsForm/>
                        </div>

                        <div className={'-mt-10 relative w-full h-full'}>
                            <img src={'/frame7.svg'}/>

                            <div className={'absolute top-0 end-0'}>
                                <div className={'flex items-center gap-4 flex-row-reverse'}>
                                    <SocialCard
                                        icon={'x'}
                                    />
                                    <SocialCard
                                        icon={'linkedin'}
                                    />
                                    <SocialCard
                                        icon={'email2'}
                                    />
                                    <SocialCard
                                        icon={'call2'}
                                    />
                                    <SocialCard
                                        icon={'whatsapp'}
                                    />
                                    <SocialCard
                                        icon={'telegram'}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollAnimation>


                <div className={'absolute -end-20 mt-[100px]'}>
                    <ScrollAnimation from={'left'}>
                        <img src="/frame4.svg" alt=""/>
                    </ScrollAnimation>
                </div>
            </MainLayout>


            <ScrollAnimation from={'bottom'}>
                <MainLayout className={'-mt-20 pb-[60px]'}>
                    <Footer/>
                </MainLayout>
            </ScrollAnimation>
        </div>
    )
}
