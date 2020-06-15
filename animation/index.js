import { keyframes } from "styled-components";

export const fade = keyframes`
    from{
        width: 0;
    }

    to{
        width: calc(100% - 6.25rem);
    }

`;

export const fadeOut = keyframes`
    from{
        width: calc(100% - 6.25rem);
    }

    to{
        width: 0;
    }

`;
