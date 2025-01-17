import styled from "styled-components";

export const FilterByTypeContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
`;

export const FilterItem = styled.li`
  font-family: inherit;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);
`;