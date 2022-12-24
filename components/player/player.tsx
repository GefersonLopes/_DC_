import { useContext } from "react";
import { AuthContext } from "../../context/provider";
import { Div_Styled } from "./styled";

import { TfiLayoutWidthDefault, TfiLayoutWidthFull } from "react-icons/tfi";
import { BsFillPlayFill } from "react-icons/bs";
import { BiFullscreen } from "react-icons/bi";

export const Player = () => {
    const { data } = useContext(AuthContext);
    return (
        <>
            <Div_Styled>
                <video
                    ref={data.$videoplayer}
                    // controls
                    src={data.urlVideo}
                    onTimeUpdate={() => {
                        data.setTimeVideo(
                            data.$videoplayer.current.currentTime
                        );
                        data.setDurationVideo(
                            data.$videoplayer.current.duration
                        );
                    }}
                ></video>
                <br />
                <div>
                    <BsFillPlayFill
                        id="Btn_play"
                        onClick={() => data.PlayPausePlayer()}
                    />
                    <TfiLayoutWidthDefault
                        id="Btn_cine"
                        onClick={() => data.TheaterMode()}
                    />
                    <TfiLayoutWidthFull
                        id="Btn_normal"
                        onClick={() => data.NormalMode()}
                        style={{ display: "none" }}
                    />
                    <BiFullscreen
                        onClick={() => {
                            data.FullScreen();
                        }}
                    />
                    <select
                        name="speed"
                        id="1"
                        onClick={() => data.PlaybackSpeed()}
                    >
                        <option value="0.2">0.25x</option>
                        <option value="0.5">0.5x</option>
                        <option value="0.75">0.75x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="1.5">1.5x</option>
                        <option value="1.75">1.75x</option>
                        <option value="2">2x</option>
                    </select>

                    <input type="range" onClick={() => data.VideoVolume()} />
                    <p style={{ color: "white" }}>{`${data.timeVideo.toFixed(2)}/${data.durationVideo.toFixed(2)}`}</p>
                    <input
                        id="inputPlayer"
                        type="range"
                        value={(data.timeVideo / data.durationVideo) * 100}
                    />
                </div>

                <h2>O café saindo fumaça - Feito pela minha coroa mano</h2>
                <p>62 mil visualizações . há 5 dias</p>
            </Div_Styled>
        </>
    );
};

