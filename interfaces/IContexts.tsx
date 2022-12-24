import { MutableRefObject, ReactNode } from "react";

interface dataInterface {
    playerList: ItemPlayer[];
    
    setPlayerList: (value: ItemPlayer[]) => void;
    filterPlayerList: (value: string) => void;
    setUrlVideo:(value: string) => void;
    
    urlVideo: string;
    timeVideo: number;
    
    TheaterMode: () => void;
    NormalMode: () => void;
    PlayPausePlayer: () => void;
    FullScreen: () => void;
    PlaybackSpeed: () => void;
    VideoVolume: () => void;
    $videoplayer: MutableRefObject<any>
    setTimeVideo: (value: number) => void;
    durationVideo: number;
    setDurationVideo: (value: number) => void;
    porcentageVideo: number;
    setPorcentageVideo: (value: number) => void;
    isStop: boolean;
    setIsStop: (value: boolean) => void;
}

export interface Auth {
    data: dataInterface;
}

export interface ItemPlayer {
    id: number;
    img: string;
    title: string;
    desc: string;
    category: string;
    new?: boolean;
    auth: string;
}
export interface IReactNode {
    children: ReactNode;
}