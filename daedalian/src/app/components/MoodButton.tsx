'use client'

import { useRouter } from 'next/navigation'

type moodProps = {
    moodText: string
    moodValue: number
}

//TODO: Change subdomain name of ai to yong's ai page

function MoodButton(props: moodProps) {
    const {moodText, moodValue} = props
    const router = useRouter()
    return (
        <button
            onClick={() => router.push(`/ai/?mood=${moodValue}`)}
        >{moodText}</button>
    )
}

export default MoodButton;