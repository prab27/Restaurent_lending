import React from 'react';
import styled from 'styled-components';

const MealItemContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 200px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const MealItem = ({ meal }) => (
  <MealItemContainer>
    <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} />
    <h3>{meal.strMeal}</h3>
  </MealItemContainer>
);

export default MealItem;
