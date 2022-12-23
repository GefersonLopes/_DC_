import styled from "styled-components";

export const Div_Styled = styled.div`
    width: 100vw;
    height: 40vh;
    position: relative;

    video {
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 768px) {
        
        width: 100vw;
        height: 50%;

        video {
            width: 100%;
            height: 31rem;
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
        font-weight: bold;
        color: #ffff;
    }

    p {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.7rem;
        color: #808080;
    }
`;
