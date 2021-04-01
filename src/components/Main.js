import { Header } from "./Header"
import { DATA } from '../data/transcript';
import { useState,useRef } from "react";
import {Waveform} from './Waveform'
import { Transcript } from "./Transcript";

const AUDIO_URL = '../data/audio.wav';
const audio = new Audio(AUDIO_URL);

export const Main = ({})=>
{
    const TRANSCRIPT = JSON.parse(JSON.stringify(DATA));
        TRANSCRIPT.word_timings.forEach(wt => {
            wt.forEach(w => {
                w.startTime=Number(w.startTime.replace('s',''))            
                w.endTime=Number(w.endTime.replace('s',''))            
            })
    })
    let [data, setData] = useState(TRANSCRIPT);
    let [player, setPlayer] = useState({
        play:false,
    })
    const audioEl = useRef(null)
    console.log(audioEl,'audioEl')
    return <div class="main">
        <audio ref={audioEl} src={AUDIO_URL} style={{ display: 'none' }} />
        <div className="container-fluid">
            <Header player={player} setPlay={(play) => {
                audioEl.current.play();
                setPlayer({
                    play:play
                })
            }}/>
        </div>
        <div className="container">
                {/* <Waveform transcript={data} /> */}
        <Transcript transcript={data}/>
    </div>
    </div>
}