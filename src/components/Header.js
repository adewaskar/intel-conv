export const Header = ({player,setPlay})=>
{
    const play = player.play;
    const newPlay = !play;
    return <div className="header">
        <div className="row">
            <div className="col-md-4">
                <div className="controls">
                <button className="btn btn-icon play-hover"><i className="fa fa-undo" aria-hidden="true"></i></button>
                    <button onClick={() => {
                        console.log(newPlay,'ttt')
                        setPlay(newPlay)
                    }} className="btn btn-pause play-pause"><i className={`fa fa-${play ?'pause':'play'}`} aria-hidden="true"></i></button>
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