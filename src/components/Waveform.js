import { UserWave } from "./UserWave"

export const Waveform = ({transcript,currentTime,setCurrentTime})=>
{
    const D = JSON.parse(JSON.stringify(transcript));
    const total_time = D.word_timings.pop().pop().endTime;
    return <div className="waveform">
        <div className="row" style={{marginBottom:'25px',marginTop:'15px'}}>
            <div className="col-md-3">
                <span style={{padding:'5px 10px',background:'#eff3f6',borderRadius:'5px'}}><b>{secondsToHms(currentTime)}</b> / {secondsToHms(total_time)}</span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <UserWave currentTime={currentTime} setCurrentTime={setCurrentTime} index={0} transcript={transcript} total_time={total_time}/>
            </div>
            <div className="col-md-12">
            <UserWave currentTime={currentTime} setCurrentTime={setCurrentTime} index={1} transcript={transcript} total_time={total_time}/>
            </div>
        </div>
    </div>
}

export const secondsToHms=(d) =>{
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var mDisplay = m;
    var sDisplay = s;
    return  mDisplay +':'+ sDisplay; 
}