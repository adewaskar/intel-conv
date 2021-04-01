import './Index.css'

export const UserTranscript = ({words,startTime,index,wordClick,currentTime})=>
{
    console.log(currentTime,words,'currentTime')
    return <div className={`user-transcript ind-${index}`}>
        <div className="row">
            {index===1?<div className="col-md-1"></div>:null}
            <div className="col-md-1">
                <div className="time">{startTime}</div>
            </div>
            <div className={`col-md-${index === 1 ? '10' : '9'} text`}>
                {words.map(w => <span className={`${((currentTime>=w.startTime)&&(currentTime<w.endTime))?'active':''} word`} onClick={()=>wordClick(w)}>{w.word} </span>)}
            </div>
        </div>
    </div>
}