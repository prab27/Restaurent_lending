import styled from 'styled-components';

const CategoryButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 15px;
  padding: 7px 15px;
  margin: 5px;
  cursor: pointer;
  white-space: nowrap; /* Prevent text from wrapping */
  transition: background 0.3s;
  font-size: px;
  display: inline-block; /* Allow buttons to fit content */
  width: auto; /* Ensure width adjusts based on content */

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export default CategoryButton;
