export const addRecentlyViewed = (productId) => {
  const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  if (!stored.includes(productId)) {
    const updated = [productId, ...stored].slice(0, 10); // Limit to last 10 items
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
  }
};
