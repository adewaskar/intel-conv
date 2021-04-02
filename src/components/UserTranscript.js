import './Index.css'

export const UserTranscript = ({words,startTime,index,wordClick,currentTime,searchText})=>
{
    const WORDS = JSON.parse(JSON.stringify(words));
    return <div className={`user-transcript ind-${index}`}>
        <div className="row">
            {index===1?<div className="col-md-1"></div>:null}
            <div className="col-md-1">
                <div className="time"><b>{startTime}</b></div>
            </div>
            <div className={`col-md-${index === 1 ? '10' : '9'} text`}>
                {WORDS.map(w => {
                    console.log(w,searchText,'searchTextsearchTextsearchTextsearchText')
                        const isSearch = searchText?(w.word.toLowerCase().includes(searchText.toLowerCase())):false;
                        if (isSearch)
                        {
                            w.isSearchText = true;                
                        }
                        
                    return <span className={`${((currentTime >= w.startTime) && (currentTime < w.endTime)) ? 'active' : ''} ${w.isSearchText ? 'search-text' : ''} word`} onClick={() => wordClick(w)}>{w.word} </span>
                })}
            </div>
        </div>
    </div>
}