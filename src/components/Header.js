import React from 'react';
import styled from 'styled-components';
import CategoryButton from './CategoryButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header = () => (
  <HeaderContainer>
    <div>
    
    </div>
    <div>
      <CategoryButton>Shop Now</CategoryButton>
    </div>
  </HeaderContainer>
);

export default Header;
