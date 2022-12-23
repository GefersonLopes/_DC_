import { useState, createContext } from "react";
import { Auth, IReactNode, ItemPlayer } from "../interfaces/IContexts";
import { videos } from "../pages/api/hello";

export const AuthContext = createContext({} as Auth);

const AuthProvider = ({ children }: IReactNode) => {
    const url =
        "https://player.vimeo.com/external/579933573.sd.mp4?s=baf4f2f350e3e65cb38ee64f4491324f3b4ef306&profile_id=165&oauth2_token_id=57447761";

    const [playerList, setPlayerList] = useState(videos);
    const [urlVideo, setUrlVideo] = useState(url);

    const filterPlayerList = (category: string): void => {
        let filteredList = videos.filter(
            (player) => player.category === category
        );
        if (filteredList.length == 0) {
            filteredList = videos;
        }
        setPlayerList(filteredList);
    };

    const NormalMode = () => {
        // Torna o reprodutor do vídeo no modo normal
        const buttonNormal = document.getElementById("Btn_normal");
        buttonNormal!.style.display = "none";
        const buttonCine = document.getElementById("Btn_cine");
        buttonCine!.style.display = "initial";

        const videoPlayer = document.querySelector("video");
        videoPlayer!.style.width = "65vw";
        const main = document.querySelector("main");
        main!.style.flexDirection = "row";
    };
    
    const TheaterMode = () => {
        // Torna o reprodutor do vídeo no modo teatro
        const buttonNormal = document.getElementById("Btn_normal");
        buttonNormal!.style.display = "initial";
        const buttonCine = document.getElementById("Btn_cine");
        buttonCine!.style.display = "none";
        
        const videoPlayer = document.querySelector("video");
        videoPlayer!.style.width = "100vw";
        const main = document.querySelector("main");
        main!.style.flexDirection = "column";
    };
    // onTimeUpdate
    const PlayPausePlayer = () => {
        const videoPlayer = document.querySelector("video");
        videoPlayer!.paused ? videoPlayer!.play() : videoPlayer!.pause();
    };

    const contextValue = {
        data: {
            playerList,
            setPlayerList,
            filterPlayerList,
            urlVideo,
            setUrlVideo,
            TheaterMode,
            NormalMode,
            PlayPausePlayer
        },
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
