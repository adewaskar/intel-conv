import './Index.css'

export const UserTranscript = ({words,startTime,index,wordClick,currentTime})=>
{
    return <div class={`user-transcript ind-${index}`}>
        <div className="row">
            {index===1?<div class="col-md-1"></div>:null}
            <div className="col-md-1">
                <div class="time">{startTime}</div>
            </div>
            <div className={`col-md-${index === 1 ? '10' : '9'} text`}>
                {words.map(w => <span class={`${((currentTime>=w.startTime)&&(currentTime<=w.endTime))?'active':''}`} onClick={()=>wordClick(w)}>{w.word} </span>)}
            </div>
        </div>
    </div>
}