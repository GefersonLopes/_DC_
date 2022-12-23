import { ReactNode } from "react";

interface dataInterface {
    playerList: ItemPlayer[];
    setPlayerList: (value: ItemPlayer[]) => void;
    filterPlayerList: (value: string) => void;
    urlVideo: string;
    setUrlVideo:(value: string) => void;
    TheaterMode: () => void;
    NormalMode: () => void;
    PlayPausePlayer: () => void;
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