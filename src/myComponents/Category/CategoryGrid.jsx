import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";


const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 5rem;
  justify-content: center; 
  align-items: center; 
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(6, auto);
    justify-content: center; 
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, auto);
    justify-content: center; 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
  }
`;

const categories = [
  {
    image: "https://banner2.cleanpng.com/20180328/ire/avjkqgryf.webp",
    title: "Beverages",
    itemCount: 11,
  },
  {
    image:
      "https://www.webpackaging.com/Up/Comp/1868/11164763/11164765-PBDOJMZF/i/prev/biscuits_and_cakes%20(1).jpg",
    title: "Biscuits & Snacks",
    itemCount: 6,
  },
  {
    image:
      "https://www.foodandwine.com/thmb/_RiUvsbuQpnoo5d9MEkeEEBipYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-bread-boulted-FT-BLOG0222-fd6fd999ef21475eb59b88ac1532950f.jpg",
    title: "Breads & Bakery",
    itemCount: 6,
  },
  {
    image:
      "https://www.healthyeating.org/images/default-source/home-0.0/blog-4.0/4-0-14blog_ismilkhealthyforbreakfast.jpg?sfvrsn=28a90cea_4",
    title: "Breakfast & Dairy",
    itemCount: 8,
  },
  {
    image:
      "https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/frozenfoodsconveninentandnutritious_600x450.jpg?as=0&w=967&rev=f23a06f8fafc47bc8c4bcd77e0fd18c9&hash=3C7783EBD220341CB893DE8477649F3A",
    title: "Frozen Foods",
    itemCount: 7,
  },
  {
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg",
    title: "Fruits & Vegetables",
    itemCount: 12,
  },
  {
    image:
      "https://www.bansalsupermarket.com/upload/category/grocery_staples/loose_grocessary.png",
    title: "Grocery & Staples",
    itemCount: 7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgneneio6M2ybJ3BeJ5VkS4d2hMD7vN2ChQ&s",
    title: "Household Needs",
    itemCount: 1,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7O-FBtNU622SEHm0-Ss-3P4BxIiY6hVaT8A&s",
    title: "Meats & Seafood",
    itemCount: 5,
  },

  {
    image:
      "https://www.bansalsupermarket.com/upload/category/grocery_staples/loose_grocessary.png",
    title: "Grocery & Staples",
    itemCount: 7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgneneio6M2ybJ3BeJ5VkS4d2hMD7vN2ChQ&s",
    title: "Household Needs",
    itemCount: 1,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7O-FBtNU622SEHm0-Ss-3P4BxIiY6hVaT8A&s",
    title: "Meats & Seafood",
    itemCount: 5,
  },
];

const CategoryGrid = () => {
  return (
    <Grid>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          title={category.title}
          itemCount={category.itemCount}
        />
      ))}
    </Grid>
  );
};

export default CategoryGrid;
