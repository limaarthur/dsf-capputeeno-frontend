import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 16rem;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(0.6rem);

  img {
    width: 19rem;
    height: 21rem;
    border-radius: 0.4rem 0.4rem 0rem 0rem; 
  }

  h3 {
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem 0.8rem;
    width: 100%;
  }
`;