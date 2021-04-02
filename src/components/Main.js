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
    const TRANSCRIPT = JSON.parse(JSON.stringify(DATA)); // pls ignore this way of cloning
        TRANSCRIPT.word_timings.forEach(wt => {
            wt.forEach(w => {
                w.startTime=Number(w.startTime.replace('s',''))            
                w.endTime=Number(w.endTime.replace('s',''))            
            })
        })
        let [data, setData] = useState(TRANSCRIPT);
        let [searchText, setSearchText] = useState(null);
        let [player, setPlayer] = useState({
            play: false,
            currentTime:null
        })

        useEffect(() => {
            audio.addEventListener('timeupdate', (e) => {
                setPlayer({currentTime: e.target.currentTime,play:true });
            });
        },[]);
    
    audio.crossOrigin = 'anonymous';
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
                    play: play,
                    currentTime:player.currentTime
                })
            }}/>
        </div>
        <div className="container-fluid">
            <Waveform setCurrentTime={t => {
                setPlayer({currentTime: t,play:true });
            }} currentTime={player.currentTime}  transcript={data} />
            <Transcript searchText={searchText} setSearchText={setSearchText} wordClick={(word) => {
                audio.currentTime = word.startTime;
                audio.play();
                setPlayer({
                    currentTime: word.startTime,
                    play:true
                })
            }} currentTime={player.currentTime} transcript={data}/>
    </div>
    </div>
}