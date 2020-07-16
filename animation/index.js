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

export const appear = keyframes`
from{
    opacity:0
}

to{
    opacity: 1;
}

`;
export const disappear = keyframes`
from{
    opacity:1;
}

to{
    opacity: 0;

}


`;

export const slideIn = keyframes`
    from{
        opacity:0;
        left:100%;
    }

    to{
        opacity: 1;
        left:0
    }

`;
export const slideOut = keyframes`
    from{
        opacity:1;
        left:0;
    }

    to{
        opacity:0;
        left:-100%;
    }

`;

export const up = keyframes`
from{
    top:80px
}

to{
    top:0

}

`;
export const down = keyframes`
from{
    top:0
}

to{
    top:80px

}

`;

export const spin = keyframes`
    from{
        transform:rotateZ(0)
    }

    to{
        transform:rotateZ(360deg)
    }
`;

export const showUp = keyframes`
    from {
        bottom:-3.5rem;
    }
    to{
        bottom:0.5rem;
    }
`;
