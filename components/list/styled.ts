import styled from "styled-components";

export const SectionList_Styled = styled.section`
    margin-top: 0.5rem;

    .ListFilter {
        width: 90vw;
        margin-top: 5rem;
        margin-left: 1rem;
        padding-bottom: 0.8rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        overflow-x: auto;

        button {
            height: 2.2rem;

            color: #fff;
            background-color: #808080;

            border: solid 0.7px #fff;
            border-radius: 50px !important;
            padding: 0.5rem 0.8rem !important;

            font-family: Roboto;
            font-weight: 500;
        }

        .checked {
            background-color: #fff;
            color: #000;
        }
    }

    @media screen and (min-width: 768px) {

        width: 45vw;

        .ListFilter {
            margin: 0;
            width: 100%;

            overflow-x: auto;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 25rem;
    }
`;

export const PlayerList_Styled = styled.ul`
    margin-top: 1rem;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        img {
            width: 10rem;
            height: 6rem;
        }

        h3 {
            margin-top: 0.5rem;
            font-size: 1rem;
            font-weight: 100;
            color: rgb(255, 255, 255, 0.8);
        }

        p {
            font-size: 0.9rem;
            color: rgb(255, 255, 255, 0.4);
        }

        span {
            font-size: 0.9rem;
            color: rgb(255, 255, 255, 0.4);
        }

        button {
            margin-top: 0.5rem;
            background-color:  rgb(255, 255, 255, 0.4);
            border: none;
            color: #fff;
        }
    }
`;
