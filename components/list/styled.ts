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

            color: #cccccc;
            background-color: #333333;

            border: none;
            border-radius: 10px;
            padding: 0.5rem 0.8rem !important;

            font-family: Roboto;
            font-weight: 500;
        }

        .checked {
            background-color: #cccccc;
            color: #333333;
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
            border-radius: 7px;
        }

        h3 {
            margin-top: 0.5rem;
            font-size: 1rem;
            font-weight: 100;
            color: #cccccc;
        }

        p {
            font-size: 0.9rem;
            color: #cccccc;
        }

        span {
            font-size: 0.9rem;
            color: #cccccc;
        }

        button {
            margin-top: 0.5rem;
            background-color:  #333333;
            border: none;
            color: #fff;
        }
    }
`;
