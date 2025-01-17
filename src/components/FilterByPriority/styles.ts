import styled from "styled-components";

export const FilterByPriorityContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-end;

  width: 100%;

  position: relative;
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: inherit;
    font-weight: 400;
    font-size: 1rem;
    border: none;
    line-height: 1.4rem;

    background: transparent;
    color: var(--text-dark);
  }

  .chevron-down-icon {
    cursor: pointer;
    color: var(--text-dark);
    margin-left: 1rem;
  }
`;