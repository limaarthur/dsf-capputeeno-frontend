import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 10rem;
  background-color: var(--bg-color);
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const Logo = styled.a`
  font-family: 'Saira Stencil One';
  font-weight: 400;
  color: var(--logo-color);
  font-size: 2.5rem;
  line-height: 150%;
`;