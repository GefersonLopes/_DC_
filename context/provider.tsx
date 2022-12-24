import { useState, createContext, useEffect, useRef, MutableRefObject } from "react";
import { Auth, IReactNode, ItemPlayer } from "../interfaces/IContexts";
import { videos } from "../pages/api/hello";

export const AuthContext = createContext({} as Auth);

const AuthProvider = ({ children }: IReactNode) => {
    const url =
        "https://player.vimeo.com/external/579933573.sd.mp4?s=baf4f2f350e3e65cb38ee64f4491324f3b4ef306&profile_id=165&oauth2_token_id=57447761";

    const $videoplayer: MutableRefObject<null> = useRef(null);
    const [playerList, setPlayerList] = useState(videos);
    const [urlVideo, setUrlVideo] = useState(url);
    const [timeVideo, setTimeVideo] = useState(0);
    const [durationVideo, setDurationVideo] = useState(0);
    const [porcentageVideo, setPorcentageVideo] = useState(0);

    const filterPlayerList = (category: string): void => {
        let filteredList = videos.filter(
            (player) => player.category === category
        );
        if (filteredList.length == 0) {
            filteredList = videos;
        }
        setPlayerList(filteredList);
    };

    const NormalMode = (): void => {
        // Torna o reprodutor do vídeo no modo normal
        const videoPlayer = document.querySelector("video");
        const buttonNormal = document.getElementById("Btn_normal");
        buttonNormal!.style.display = "none";
        const buttonCine = document.getElementById("Btn_cine");
        buttonCine!.style.display = "initial";

        videoPlayer!.style.width = "65vw";
        const main = document.querySelector("main");
        main!.style.flexDirection = "row";
    };

    const TheaterMode = (): void => {
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

    const PlayPausePlayer = (): void => {
        const videoPlayer = document.querySelector("video");
        videoPlayer!.paused ? videoPlayer!.play() : videoPlayer!.pause();

    };


    const FullScreen = (): void => {
        const videoPlayer = document.querySelector("video");
        videoPlayer?.requestFullscreen && videoPlayer!.requestFullscreen();
    };

    const PlaybackSpeed = (): void => {
        const videoPlayer = document.querySelector("video");
        const select = document.querySelector("select");

        videoPlayer!.playbackRate = Number(select!.value);
    };

    const VideoVolume = (): void => {
        const videoPlayer = document.querySelector("video");
        const input = document.querySelector("input");
        videoPlayer!.volume = Number(input!.value) / 100;
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
            PlayPausePlayer,
            FullScreen,
            PlaybackSpeed,
            VideoVolume,
            timeVideo,
            $videoplayer,
            setTimeVideo,
            durationVideo,
            setDurationVideo,
            porcentageVideo,
            setPorcentageVideo,
        },
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
