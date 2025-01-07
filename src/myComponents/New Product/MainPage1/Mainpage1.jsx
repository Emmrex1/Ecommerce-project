import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = lazy(() => import("@/Share/ProductCard")); // Lazy load ProductCard

const MainPage1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Fashion");

  const categories = [
    "Fashion",
    "Electronics",
    "Groceries",
    "Home & Kitchen",
    "Sport wears",
    "Gadget",
    "Books",
    "Toys",
    "Automobile",
    "Health & Beauty",
  ];

  // Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/category/${selectedCategory}`
        );
        setProducts(response.data.products || []);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "An error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Fetch suggestions
 
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        maxWidth: "1200px",
        mx: "auto",
        p: 3,
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={4}>
        {/* Banner Section */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
              alt="Special Offer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: "500px",
              }}
            />
          </Paper>
        </Grid>

        {/* Product Section */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 2,
              p: 3,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Tabs Header */}
            <Box sx={{ marginBottom: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#333", mb: 2 }}
              >
                Popular Products
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                Don't miss the current offer until the new year!
              </Typography>
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="Product Categories"
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "capitalize",
                    fontWeight: "500",
                    padding: "6px 16px",
                    fontSize: "0.875rem",
                    minWidth: "auto",
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab key={category} label={category} value={category} />
                ))}
              </Tabs>
            </Box>

            {/* Products Section */}
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress />
              </Box>
            ) : error ? (
              <Typography
                variant="body1"
                color="error"
                sx={{ textAlign: "center" }}
              >
                Error: {error}
              </Typography>
            ) : products.length === 0 ? (
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#999" }}
              >
                No products found in this category.
              </Typography>
            ) : (
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={true}
                modules={[Navigation]}
                className="w-full"
              >
                {products.map((product) => (
                  <SwiperSlide key={product._id}>
                    <Link
                      to={`/product/${product._id}`}
                      style={{ display: "block" }}
                    >
                      <Suspense fallback={<CircularProgress />}>
                        <ProductCard product={product} />
                      </Suspense>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage1;
