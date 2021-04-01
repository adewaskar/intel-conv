import { useState } from "react";
import { Tile } from "./Tile";

export const UserWave = ({transcript,total_time,index})=>
{
    return <div class="row">
        <div className="col-md-3">
            26% Andrew S.
      </div>
      <div className="col-md-9">
            <div>
                <div className="tiles-flex" style={{ display: 'flex', position: 'relative' }}>
                    {transcript.word_timings.map(w => {
                            return <Tile word={w}  total_time = { total_time }/>
                        })
                    }
           </div>
           </div>
      </div>
    </div>
}