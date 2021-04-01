import { useState } from "react";
import { Tile } from "./Tile";

export const UserWave = ({transcript,total_time,index,setCurrentTime,currentTime})=>
{
    const words = [];
    transcript.word_timings.forEach((w, i) => {
        let IND = i % 2 === 0 ? 0 : 1;
        if (IND === index)
        {
            words.push(...w);            
        }
    })
    const width = ((currentTime / total_time) * 100);
    return <div className="row">
        <div className="col-md-3">
            26% Andrew S - {index}.
      </div>
      <div  onClick={e => {
                var rect = e.target.getBoundingClientRect();
                var x = e.clientX - rect.left; //x position within the element.
                const currentTime = (x / rect.width)*total_time;
                console.log(currentTime,'currentTime')
                // setCurrentTime(currentTime);
            }} className="col-md-9" style={{borderBottom:index===0?'1px solid':''}}>
            <div>
                <div className="tiles-flex" style={{ display: 'flex', position: 'relative' }}>
                    {words.map(w => {
                            return <Tile index={index} word={w} total_time = { total_time }/>
                        })
                    }
                </div>
                <div className="wave-covered" style={{width: (width<100)?(width+'%'):'100%'}}>
                
                </div>
           </div>
      </div>
    </div>
}