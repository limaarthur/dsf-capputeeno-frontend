import styled from "styled-components";

export const CardControlContainer = styled.div`
position: relative;
padding-top: 0.6rem;

  .shopping-bag-icon {
    max-width: 1.4rem;
    color: var(--text-dark);
  }
`;

export const CartCount = styled.span` 
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  padding: 0.1rem 0.5rem;

  background-color: var(--delete-color);

  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  margin-left: -0.6rem;
`;