'use client'

import Footer from "../components/footer";
import MoodButton from "../components/MoodButton";

import "./mood.css"; 

export default function Mood() {

  //TODO: Sends a numeric value that reps mood to the page for the AI
  function ok(){
    console.log("hi")
  }

  return (
    <div className=' items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center"'>
        <h1 className="font-[family-name:var(--font-geist-mono)] text-5xl bold leading-tight">
          Mood Tracker</h1>
        <p className="font-[family-name:var(--font-geist-mono)] leading-none italic">
          How are you feeling today?</p>

        
        <div className="flex flex-row gap-[32px] items-center">
          <MoodButton
            moodText="Great"
            moodValue={1}
            moodImage="/productivityup.png"
          ></MoodButton>
          <MoodButton
            moodText="Okay"
            moodValue={2}
            moodImage="/productivitymid.png"
          ></MoodButton>
          <MoodButton
            moodText="Bad"
            moodValue={3}
            moodImage="/productivitydown.png"
          ></MoodButton>
        </div>
        <Footer />
      </main>
      
    </div>
  )
}
  