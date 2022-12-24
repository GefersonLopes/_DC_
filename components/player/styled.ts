import styled from "styled-components";

export const Div_Styled = styled.div`
    width: 100vw;
    height: 40vh;
    position: relative;

    video {
        width: 100%;
        height: 100%;

        position: relative;
    }

    @media only screen and (min-width: 768px) {
        width: 100vw;
        height: 50%;

        video {
            width: 100%;
            height: 31rem;
        }

        .playerConfig {
            bottom: 4.2rem;
        }
    }

    @media only screen and (max-width: 767px) {
        #Btn_normal {
            display: none;
        }
        #Btn_cine {
            display: none;
        }
    }

    @media only screen and (min-width: 1024px) {
        video {
            width: 69vw;
        }
    }


    h2 {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: #cccccc;
    }

    p {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: #808080;
    }

    div {
        height: 2rem;
        width: 100%;
        border-radius: 20px;

        position: absolute;
        bottom: 0.1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        background-color: transparent;
    }

    #inputPlayer {
        -webkit-appearance: none;
        appearance: none;
        display: inline-block;

        position: absolute;
        bottom: 1.8rem;

        width: 98%;
        height: 10px;

        border: none;

        height: 0.5em;

        border-radius: 5px;
        background-color: #ff0000;
        outline: none;
    }

    #inputPlayer::-webkit-slider-thumb {
        -webkit-appearance: none; 

        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #b22222;
    }

    @media only screen and (min-width: 768px) {
        #inputPlayer {
            bottom: 6rem;
        }
    }

    #Btn_play {
        position: absolute;
        left: 1rem;
    }
    
    #volumeInput {
        -webkit-appearance: none;
        appearance: none;
        display: inline-block;
        
        position: absolute;
        left: 4rem;
        
        width: 3rem;
        height: 0.2rem;

        border: none;
        border-radius: 5px;

        background-color: #ffff;
        outline: none;
    }

    #volumeInput::-webkit-slider-thumb {
        -webkit-appearance: none; 

        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #ffff;
    }

    #volumeSvg {
        position: absolute;
        left: 2.5rem;
        
    }

    #tempId {
        position: absolute;
        left: 7rem;
        margin-bottom: 0.5rem;
    }

    svg {
        cursor: pointer;
    }

    .buttonsGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;

        position: absolute;
        right: 1rem;
    }

    select {
        background-color: 	rgb(0,0,0, 0.2);
        color: white;
        border: none;
        border-radius: 5px;
        outline: none;
    }
`;
