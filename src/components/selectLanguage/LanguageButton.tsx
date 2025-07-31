'use client'
import {useState} from "react";
import {Icon} from "@/components/icon";
import {cn} from "@/lib/utils";

const LanguageButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        {code: "Fa", name: "فارسی"},
        {code: "En", name: "English"},
        {code: "Ar", name: "العربية"},
        {code: "Ru", name: "Русский"},
        {code: "Tr", name: "Türkçe"},
    ];
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={toggleDropdown}
                className={cn("bg-white cursor-pointer w-[88px] h-[32px] rounded-xl flex items-center border-b justify-center gap-3.5 transition-all duration-700 hover:shadow-md",
                    isOpen ? 'rounded-b-none border-gray-600 ': 'border-transparent'
                    )}
            >
                <span className="text-xs">{selectedLang.code}</span>
                <Icon
                    name="arrow_down"
                    className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />


            </button>

            <div
                className={`absolute top-8 end-0 start-0  bg-white rounded-b-xl shadow-lg overflow-hidden transition-all duration-700 ${
                    isOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {languages.map((lang) => (
                    <div
                        key={lang.code}
                        onClick={() => {
                            setSelectedLang(lang);
                            setIsOpen(false);
                        }}
                        className="px-2 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 flex-row items-center justify-between"
                    >
                        <span className="text-md">{lang.code}</span>
                        <span className="text-xs">{lang.name}</span>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageButton;
