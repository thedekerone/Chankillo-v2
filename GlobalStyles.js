import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0
    }
    body{
        background: #FDFDFD;
        font-family: 'Montserrat', sans-serif;
    }
    button{
        font-family: "Montserrat", sans-serif;
    }
    @media (max-width: 1200px) {
        html{
            font-size: 14px;
        }
    }
    @media (max-width: 600px) {
        html{
            font-size: 12px;
        }
    }
`;
