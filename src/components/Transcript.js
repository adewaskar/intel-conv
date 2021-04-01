import './Index.css'
import { UserTranscript } from "./UserTranscript";

export const Transcript = ({transcript,currentTime,wordClick})=>
{
    return <div className="transcript">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11">
            <div className="search-transcript">
            <div class="input-group mb-3 search-box">
            <span class="input-group-text" id="basic-addon1"><span className="fa fa-search"></span> </span>
            <input type="text" class="form-control" placeholder="Search call transcript" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

        </div>
            </div>
       </div>
        {transcript.transcript_text.map((text, i) => {
            let index=i % 2 === 0?0:1;
           return  <UserTranscript wordClick={wordClick} currentTime={currentTime} index={index} words={transcript.word_timings[index]} startTime={ transcript.word_timings[index][0].startTime}/>
        })}
        
    </div>
}