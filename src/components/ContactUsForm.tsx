'use client'
import React from 'react';
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Select from "@/components/ui/Select";

const ContactUsForm = () => {
    return (
        <div className=" flex flex-col gap-5">

            <div className={'flex items-center gap-5'}>

            <Input
                label={'نام/نام شرکت:'}
                icon={'profile'}
                placeholder={'نام'}
                type={'text'}
            />

                <Select
                    label="دسته بندی"
                    icon="category"
                    placeholder="انتخاب کنید..."
                    options={[
                        { value: "job", label: "موقعیت شغلی" },
                        { value: "idea", label: "ایده و طرح" },
                        { value: "feedback", label: "انتقادات و پیشنهادات" }
                    ]}
                    // value={selectedValue}
                    // onChange={(value) => setSelectedValue(value)}
                />
            </div>

            <div className={'flex items-center gap-5'}>
                <Input
                    label={'شماره تماس:'}
                    icon={'call'}
                    placeholder={'شماره تماس'}
                    type={'text'}
                />
                <Input
                    label={'ایمیل:'}
                    icon={'sms'}
                    placeholder={'ایمیل'}
                    type={'email'}
                />


            </div>

            <TextArea
                label={'درخواست:'}
                icon={'sms_tracking'}
                placeholder={'درخواست خود را بنویسید...'}
                type={'text'}
            />

            <div className={'w-full flex items-center justify-between'}>
                <div>
                    <img src="/frame6.svg" alt=""/>
                </div>

                <button
                type={'submit'}
                className={'text-white cursor-pointer font-light bg-black rounded-xl h-10 w-[120px]'}
                >
                ارسال
                </button>
            </div>


        </div>
    );
};

export default ContactUsForm;
