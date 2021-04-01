export const Header = ({})=>
{
    return <div class="header">
        <div className="row">
            <div className="col-md-4">
                <div className="controls">
                <button className="btn btn-icon"><i class="fa fa-undo" aria-hidden="true"></i></button>
                <button className="btn btn-pause"><i class="fa fa-pause" aria-hidden="true"></i></button>
                <button className="btn btn-repeat"><i class="fa fa-repeat" aria-hidden="true"></i></button>

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