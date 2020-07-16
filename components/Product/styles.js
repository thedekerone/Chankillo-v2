import styled from "styled-components";

export const ProductName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  margin-top: 1.2rem;
  margin-bottom: 3.1rem;
  line-height: 2.25rem;
  @media (max-width: 700px) {
    margin-bottom: 2rem;
    margin-top: 0.8rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 17rem;
  object-fit: cover;
  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;
