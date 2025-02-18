/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useRequestContext from "@/hooks/use_request_context";
import Image from "next/image";
import getZodiacInfo from "@/utils/get_zodiac";

interface WaitingProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const Waiting = ({ setStep }: WaitingProps) => {
    const [zodiac, setZodiac] = useState<{
            sign: string;
            emoji: string;
            description: string,
            gender?: string
        }>({ sign: "", emoji: "", description: "", gender: ""})


    const { streamedData, formData } = useRequestContext()

    // move to next screen when loading is set to false
    useEffect(() => {
        const data = streamedData.split("--")
        if (data.length > 2) {
            setStep(3)
        }
    }, [streamedData])

    useEffect(() => {
        let gender: string = ""
        if (formData.gender !== "UNKNOWN" && formData.gender !== "") {
            gender = " " + formData.gender.toLocaleLowerCase()
        }
        if (formData.due_date !== "") {
            setZodiac({ ...zodiac, sign:getZodiacInfo(formData.due_date).sign, emoji: getZodiacInfo(formData.due_date).emoji, description: getZodiacInfo(formData.due_date).description, gender: gender})
        }
    }, [formData.due_date])



    return (
        <section className={`flex items-center p-4 md:p-12 shadow-lg flex-col gap-6 rounded-lg bg-[#f8f7ee] text-black  w-full max-w-2xl min-h-[400px] self-center ${formData.due_date !== "" ? '' : 'justify-center'}`}>
            {
                (formData.due_date !== '') &&
                <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] text-black self-start font-bold">
                        Your baby is {zodiac.sign}{zodiac.gender}{zodiac.emoji}:
                    </h1>
                    <p className="font-sub font-extralight text-left w-[100%]">
                        {zodiac.description}
                    </p>
                </ div>
            }
            <p className="text-center inline">
                Searching the galaxy of baby names, just a moment!
                <Image width={10} height={10} src="/worm.png" alt="Mother of Invention" className="w-5 m-[1px] inline animate-bounce" />
                <Image width={10} height={10} src="/berry.png" alt="Mother of Invention" className="w-4 m-[1px] inline animate-bounce" />
                <Image width={10} height={10} src="/apple.png" alt="Mother of Invention" className="w-4 m-[1px] inline animate-bounce" />
            </p>
        </section>
    )
}

export default Waiting