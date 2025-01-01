import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 22rem;
  position: relative;

  .search-icon {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    max-width: 1.4rem;
    color: var(--text-dark);
  }
`;

export const SearchFormInputContainer = styled.input`
  width: 22rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.6rem 1rem;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4rem;
  color: var(--text-dark);
`;
