import { UserWave } from "./UserWave"

export const Waveform = ({transcript})=>
{
    const D = JSON.parse(JSON.stringify(transcript));
    const total_time = D.word_timings.pop().pop().endTime;
    return <div className="waveform">
        <div className="row">
            <div className="col-md-3">
                <span>0:28/{total_time}</span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <UserWave index={0} transcript={D} total_time={total_time}/>
            </div>
            <div className="col-md-12">
            <UserWave index={1} transcript={D} total_time={total_time}/>
            </div>
        </div>
    </div>
}