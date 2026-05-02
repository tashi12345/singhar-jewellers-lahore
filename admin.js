document.addEventListener('DOMContentLoaded', () => {
      const productForm = document.getElementById('product-form');
      const adminProductList = document.getElementById('admin-product-list');

                              const renderProducts = () => {
                                        const products = JSON.parse(localStorage.getItem('jewellery_products')) || [];
                                        adminProductList.innerHTML = products.map(p => `
                                                    <div class="admin-item">
                                                                    <span>${p.name} - ${p.price}</span>
                                                                                    <button onclick="deleteProduct(${p.id})">Delete</button>
                                                                                                </div>
                                                                                                        `).join('');
                              };

                              productForm.addEventListener('submit', (e) => {
                                        e.preventDefault();
                                        const products = JSON.parse(localStorage.getItem('jewellery_products')) || [];
                                        const newProduct = {
                                                      id: Date.now(),
                                                      name: document.getElementById('product-name').value,
                                                      price: document.getElementById('product-price').value,
                                                      image: document.getElementById('product-image').value
                                        };
                                        products.push(newProduct);
                                        localStorage.setItem('jewellery_products', JSON.stringify(products));
                                        productForm.reset();
                                        renderProducts();
                              });

                              window.deleteProduct = (id) => {
                                        let products = JSON.parse(localStorage.getItem('jewellery_products')) || [];
                                        products = products.filter(p => p.id !== id);
                                        localStorage.setItem('jewellery_products', JSON.stringify(products));
                                        renderProducts();
                              };

                              renderProducts();
                                                             });
