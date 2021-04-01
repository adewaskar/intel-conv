import { useState } from "react";

export const Tile = ({word,total_time,index})=>
{
    const width = ((word.endTime - word.startTime) / total_time)*100;
    const left_position = (word.startTime / total_time) * 100;
    return <div className={`tile ind-${index}`} style={{width:width+'%',height:'24px',marginRight:'0.5%',position:'absolute',left:left_position+'%'}}>
    </div>
}