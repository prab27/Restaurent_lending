import React from 'react';
import styled from 'styled-components';
import './MealList.css'; // Ensure this is imported

const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px; /* Adjust for negative margin to ensure proper spacing */
  width:auto
`;

const MealItem = styled.div`
  flex: 0 1 calc(48.5% - 20px); /* Two items per row with spacing */
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 768px) {
    flex: 0 1 calc(100% - 20px); /* Full width on smaller screens */
  }
`;

const MealImage = styled.img`
  width: 100px; /* Set a fixed width for the image */
  height: 100px; /* Set a fixed height for the image */
  border-radius: 50%;
`;

const MealDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

const MealList = ({ meals }) => {
  return (
    <MealContainer>
      {meals.map((meal) => (
        <MealItem key={meal.idMeal}>
          <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          <MealDescription>Description of the meal goes here.</MealDescription>
        </MealItem>
      ))}
    </MealContainer>
  );
};

export default MealList;
