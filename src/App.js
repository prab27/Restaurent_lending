import { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import CategoryButton from './components/CategoryButton';
import Header from './components/Header';
import MealList from './components/MealList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './components/Banner';

const Container = styled.div`
  padding: 20px;
`;

const CategoryContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const theme = {
  colors: {
    primary: '#2ecc71',
    primaryDark: '#27ae60',
    secondary: '#95a5a6',
    text: '#2c3e50',
    background: '#f9f9f9',
    white: '#ffffff', // Added white color for background
  },
};

const defaultCategories = ['Dessert', 'Chicken', 'Breakfast', 'Lamb'];

function App() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
    fetchDefaultMeals();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchMealsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setCategories(response.data.categories);
  };

  const fetchDefaultMeals = async () => {
    const mealPromises = defaultCategories.map((category) =>
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    );
    const mealResponses = await Promise.all(mealPromises);
    const defaultMeals = mealResponses.flatMap((response) => response.data.meals);
    setMeals(defaultMeals);
  };

  const fetchMealsByCategory = async (category) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    setMeals(response.data.meals);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 0, // Ensure the slider starts from the beginning
  };

  return (
    <ThemeProvider theme={theme}>
      <Banner />
      <Container>
        <Header />
        <CategoryContainer>
          <CategoryTitle>Shop by Category</CategoryTitle>
          <SubTitle>Top Category of Organic Food</SubTitle>
          <Slider {...sliderSettings}>
            {categories.map((category) => (
              <CategoryButton key={category.idCategory} onClick={() => setSelectedCategory(category.strCategory)}>
                {category.strCategory}
              </CategoryButton>
            ))}
          </Slider>
        </CategoryContainer>
        <MealList meals={meals} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
