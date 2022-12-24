import { useContext } from "react";
import { AuthContext } from "../../context/provider";
import { Div_Styled } from "./styled";

import { TfiLayoutWidthDefault, TfiLayoutWidthFull } from "react-icons/tfi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { BiFullscreen, BiVolumeFull, BiVolumeMute } from "react-icons/bi";

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
                <input
                    id="inputPlayer"
                    type="range"
                    value={(data.timeVideo / data.durationVideo) * 100}
                />
                <div className="playerConfig">
                    {data.isStop ? (
                        <BsFillPlayFill
                            id="Btn_play"
                            onClick={() => data.PlayPausePlayer()}
                        />
                    ) : (
                        <BsFillPauseFill
                            id="Btn_play"
                            onClick={() => data.PlayPausePlayer()}
                        />
                    )}

                    <BiVolumeFull id="volumeSvg" />
                                        <input
                        id="volumeInput"
                        type="range"
                        onClick={() => data.VideoVolume()}
                    />

                    <p
                        id="tempId"
                        style={{ color: "white" }}
                    >{`${data.timeVideo.toFixed(
                        2
                    )}/${data.durationVideo.toFixed(2)}`}</p>

                    <section className="buttonsGroup">
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
                    </section>
                </div>

                <h2>O café saindo fumaça - O vídeo não tem audio, mas a função de audio funciona ;)</h2>
                <p>62 mil visualizações . há 5 dias</p>
            </Div_Styled>
        </>
    );
};
