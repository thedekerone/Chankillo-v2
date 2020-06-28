import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0
    }
    body{
        background: #FbFbFb;
        font-family: 'Montserrat', sans-serif;
        position:relative;
    }

    h1,h2,h3,h4,h5,h6{
        color: #292929;
    }

    p{
        color: #525252;
    }

    button{
        font-family: "Montserrat", sans-serif;
    }

    li{
        margin-left: 2rem
    }

    .post-content{
        & img{
            width:100%!important;
            margin: 2rem 0;
        }
    }

    a{
        cursor:pointer;
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
