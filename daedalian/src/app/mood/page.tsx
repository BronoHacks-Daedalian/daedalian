'use client'
 
import MoodButton from "../components/MoodButton";

import "./mood.css"; 

export default function Mood() {

  //TODO: Sends a numeric value that reps mood to the page for the AI
  function ok(){
    console.log("hi")
  }

  return (
    <div className='mood-page'>
      <h1>Mood Tracker</h1>
      <p>Welcome to the mood tracker.</p>

      
      <div className="mood-btn-container">
        <MoodButton
          moodText="Good"
          moodValue={1}
        ></MoodButton>
      </div>
      
    </div>
  )
}
  