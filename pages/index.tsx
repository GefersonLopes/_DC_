import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Player } from "../components/player/player";
import { List } from "../components/list/list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <main>
                <Player />
                <List />
            </main>
        </>
    );
}
