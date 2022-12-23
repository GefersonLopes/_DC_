import { useContext } from "react";
import { AuthContext } from "../../context/provider";
import { Div_Styled } from "./styled";

export const Player = () => {
    const { data } = useContext(AuthContext);
    return (
        <>
            <Div_Styled>
                <video
                    loop
                    controls
                    autoPlay
                    src={data.urlVideo}
                ></video>
                <br />
                <button id="Btn_play" onClick={()=> data.PlayPausePlayer()}>PAUSE/PLAY</button>
                <button id="Btn_cine" onClick={()=> data.TheaterMode()}>CINEMA</button>
                <button id="Btn_normal" onClick={()=> data.NormalMode()} style={{display:"none"}}>NORMAL</button>
                <h2>O café saindo fumaça - Feito pela minha coroa mano</h2>
                <p>62 mil visualizações . há 5 dias</p>
            </Div_Styled>
        </>
    );
};
