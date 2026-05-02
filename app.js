document.addEventListener('DOMContentLoaded', () => {
      const productGrid = document.getElementById('product-grid');

                              const loadProducts = () => {
                                        const products = JSON.parse(localStorage.getItem('jewellery_products')) || [
                                          { id: 1, name: 'Gold Necklace', price: 'Rs. 150,000', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                                          { id: 2, name: 'Diamond Ring', price: 'Rs. 250,000', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                                          { id: 3, name: 'Emerald Pendant', price: 'Rs. 180,000', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
                                                  ];

                                        productGrid.innerHTML = products.map(p => `
                                                    <div class="product-card">
                                                                    <img src="${p.image}" alt="${p.name}">
                                                                                    <h3>${p.name}</h3>
                                                                                                    <p>${p.price}</p>
                                                                                                                </div>
                                                                                                                        `).join('');
                              };

                              loadProducts();

                              window.addEventListener('storage', loadProducts);
});
