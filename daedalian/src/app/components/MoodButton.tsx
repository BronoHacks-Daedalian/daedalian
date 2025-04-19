'use client'

import { useRouter } from 'next/navigation';
import Image from "next/image";

type moodProps = {
    moodText: string
    moodValue: number
    moodImage: string
}

//TODO: Change subdomain name of ai to yong's ai page

function MoodButton(props: moodProps) {
    const {moodText, moodValue, moodImage} = props
    const router = useRouter()
    return (
        <div>
            <button 
                className='font-[family-name:var(--font-geist-mono)] text-2xl border border-black px-5 py-3 bg-yellow-500 text-white rounded hover:bg-white hover:text-black transition-colors duration-200 ease-in-out active:bg-orange-500'
                onClick={() => router.push(`/ai/?mood=${moodValue}`)}
            >
                <Image
                    src={moodImage}
                    alt=""
                    width={50}
                    height={50}
                    priority
                />
            {moodText}</button>
    
        </div>
    )
        
}

export default MoodButton;