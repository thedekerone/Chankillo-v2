import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ${(props) => props.width && " width:" + props.width};
  ${(props) => props.maxWidth && " max-width:" + props.maxWidth};
  ${(props) => props.height && " height:" + props.height};
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  padding-top: 3.6875rem;
  background: white;
  & label {
    margin-bottom: 3.125rem;
    padding: 0 2.875rem;
    color: #afafaf;
    font-weight: 500;
    font-size: 1rem;
    height: 4rem;
    text-transform: capitalize;
  }
  & input {
    margin-top: 0.71rem;
    width: 100%;
    border: 1px solid #e3e3e3;
    padding: 0.5rem;
  }
  & input:focus {
    outline: none;
    border: 1.5px solid #2f9a72;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;
