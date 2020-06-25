import styled from "styled-components";

export const Wrapper = styled.div`
  ${(props) => props.position && "position:" + props.position};
  ${(props) => props.background && "background:" + props.background};
  ${(props) => props.margin && "margin:" + props.margin};
  ${(props) => props.maxWidth && "max-width:" + props.maxWidth};
  ${(props) => props.border && "border:" + props.border};
  ${(props) => props.width && "width:" + props.width};
  ${(props) => props.height && "height:" + props.height};
  ${(props) => props.padding && "padding:" + props.padding};
  ${(props) => props.flex && "display:flex"};
  ${(props) => props.display && "display:" + props.display};
  ${(props) =>
    props.justifyContent && "justify-content:" + props.justifyContent};
  ${(props) => props.alignItems && "align-items:" + props.alignItems};
  ${(props) => props.direction && "flex-direction:" + props.direction};

  @media (max-width: 900px) {
    ${(props) => props.xl_direction && "flex-direction:" + props.xl_direction};
    ${(props) => props.xl_justify && "justify-content:" + props.xl_justify};
    ${(props) => props.xl_align && "align-items:" + props.xl_align};
    ${(props) => props.xl_width && "width:" + props.xl_width};
    ${(props) => props.xl_padding && "padding:" + props.xl_padding};
    ${(props) => props.xl_margin && "margin:" + props.xl_margin};
  }
  @media (max-width: 700px) {
    ${(props) => props.lg_direction && "flex-direction:" + props.lg_direction};
    ${(props) => props.lg_justify && "justify-content:" + props.lg_justify};
    ${(props) => props.lg_align && "align-items:" + props.lg_align};
    ${(props) => props.lg_width && "width:" + props.lg_width};
    ${(props) => props.lg_padding && "padding:" + props.lg_padding};
    ${(props) => props.lg_margin && "margin:" + props.lg_margin};
  }
`;

export const Slider = styled(Wrapper)`
  overflow: auto;
  white-space: nowrap;
`;
