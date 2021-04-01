import { Header } from "./Header"
import { DATA } from '../data/transcript';
import { useState,useRef,useEffect } from "react";
import {Waveform} from './Waveform'
import { Transcript } from "./Transcript";

import AUDIO from '../data/audio.wav'
// const audio = new Audio(AUDIO_URL);
let audio = new Audio(AUDIO)

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
        let [searchText, setsearchText] = useState(null);
        let [player, setPlayer] = useState({
            play: false,
            currentTime:null
        })

        useEffect(() => {
            audio.addEventListener('timeupdate', (e) => {
                console.log(e.target.currentTime,'e')
                setPlayer({ ...player,currentTime: e.target.currentTime });
            });
        },[]);
    
    audio.crossOrigin = 'anonymous';
    const audioEl = useRef(null)
    return <div className="main">
        <div className="container-fluid">
            <Header player={player} setPlay={(play) => {
                if (play)
                {
                 audio.play();                    
                }
                else {
                    audio.pause();
                }
                setPlayer({
                    play:play
                })
            }}/>
        </div>
        <div className="container">
                {/* <Waveform transcript={data} /> */}
            <Transcript wordClick={(word) => {
                audio.currentTime = word.startTime;
                audio.play();
                setPlayer({
                    currentTime: word.startTime
                })
            }} currentTime={player.currentTime} transcript={data}/>
    </div>
    </div>
}