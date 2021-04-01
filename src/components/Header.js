export const Header = ({player,setPlay})=>
{
    return <div className="header">
        <div className="row">
            <div className="col-md-4">
                <div className="controls">
                <button className="btn btn-icon play-hover"><i className="fa fa-undo" aria-hidden="true"></i></button>
                    <button onClick={()=>setPlay(!player.play)} className="btn btn-pause play-pause"><i className={`fa fa-${player.play ?'pause':'play'}`} aria-hidden="true"></i></button>
                <button className="btn btn-repeat play-hover"><i className="fa fa-repeat" aria-hidden="true"></i></button>

                </div>
            </div>
            <div className="col-md-4">
                <div className="controls">
                    
                </div>
            </div>
            <div className="col-md-4">
                <div className="share">
                    <button className="btn btn-primary">Share</button>
                </div>
            </div>
        </div>
    </div>
}