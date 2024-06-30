import React from 'react';
import styled from 'styled-components';

// Define responsive styles
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh; /* Adjusted height for better layout */
  overflow: hidden;
  position: relative; /* Needed for positioning BannerText absolutely */
  background: ${({ theme }) => theme.colors.background};
  
  /* Responsive styles */
  @media (max-width: 768px) {
    height: 50vh; /* Adjust height on smaller screens */
  }

  @media (max-width: 480px) {
    height: 40vh; /* Further adjust height on very small screens */
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerText = styled.div`
  position: absolute;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 20px; /* Add padding to ensure text is not too close to the edges */

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust text size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjust text size for mobile devices */
  }
`;

const Banner = () => (
  <BannerContainer>
    <BannerImage src="https://firebasestorage.googleapis.com/v0/b/assignment-92301.appspot.com/o/Screenshot%20from%202024-06-30%2011-57-42.png?alt=media&token=c6b5d55b-7320-48aa-b289-cecaf0b4f5d3" alt="Banner" />
    <BannerText>
    
    </BannerText>
  </BannerContainer>
);

export default Banner;
