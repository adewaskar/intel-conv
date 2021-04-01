import './Index.css'
import { UserTranscript } from "./UserTranscript";

export const Transcript = ({transcript})=>
{
    return <div class="transcript">
        {transcript.transcript_text.map((text, i) => {
            let index=i % 2 === 0?0:1;
           return  <UserTranscript index={index} words={transcript.word_timings[index]} startTime={ transcript.word_timings[index][0].startTime}/>
        })}
        
    </div>
}