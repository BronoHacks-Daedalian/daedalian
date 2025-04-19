'use client'

import { useRouter } from 'next/navigation'

type moodProps = {
    moodText: string
    moodValue: number
}

function MoodButton(props: moodProps) {
    const {moodText, moodValue} = props
    const router = useRouter()
    return (
        <button
            onClick={() => router.push('/todo')}
        >{moodText}</button>
    )
}

export default MoodButton;