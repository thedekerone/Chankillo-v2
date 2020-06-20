import { keyframes } from "styled-components";

export const fade = keyframes`
    from{
        width: 0;
    }

    to{
        width: calc(100% - 5.75rem);
    }

`;

export const fadeOut = keyframes`
    from{
        width: calc(100% - 5.75rem);
    }

    to{
        width: 0;
    }

`;
