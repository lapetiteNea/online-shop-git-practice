function filterByPrice(products, maxPrice) {
  return products.filter(p => p.price <= maxPrice);
}