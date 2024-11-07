import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
`;

const ItemCount = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const CategoryCard = ({ image, title, itemCount }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <ItemCount>{itemCount} Items</ItemCount>
    </Card>
  );
};

export default CategoryCard;
