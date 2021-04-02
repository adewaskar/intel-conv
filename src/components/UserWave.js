import { useState } from "react";
import { Tile } from "./Tile";

export const UserWave = ({transcript,total_time,index,setCurrentTime,currentTime})=>
{
    const words = [];
    const otherWords=[]
    let totalUserTime = 0;
    let totalOtherUserTime = 0;
    transcript.word_timings.forEach((w, i) => {
        let IND = i % 2 === 0 ? 0 : 1;
        if (IND === index)
        {
            words.push(...w);            
        }
        else {
            otherWords.push(...w);
        }
    })
    words.forEach(w => {
        totalUserTime += (w.endTime - w.startTime);
    })
    otherWords.forEach(w => {
        totalOtherUserTime += (w.endTime - w.startTime);
    })
    const timeProgress = Math.round(totalUserTime / (totalUserTime + totalOtherUserTime));
    console.log(totalUserTime,words,'words')
    const width = ((currentTime / total_time) * 100);
    return <div className="row">
        <div className="col-md-3">
            <span class={`name-prog-${index}`}>{ (timeProgress)*100}% User-{index+1}.</span>
      </div>
      <div  onClick={e => {
                var rect = e.target.getBoundingClientRect();
                var x = e.clientX - rect.left; //x position within the element.
                const currentTime = (x / rect.width)*total_time;
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