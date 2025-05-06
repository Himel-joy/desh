// Toggle hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navContent").classList.toggle("active");
  });
  
  // Search bar enter key
  document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      alert("Searching for: " + this.value);
    }
  });
 
  const products = [
    { image: 'pexels-veeterzy-303383.jpg', originalPrice: 249.99, discountPrice: 199.99 },
    { image: 'pexels-pixabay-51383.jpg', originalPrice: 299.99, discountPrice: 249.99 },
    { image: 't.jpg', originalPrice: 179.99, discountPrice: 149.99 },
    { image: 'w.jpg', originalPrice: 109.99, discountPrice: 89.99 },
    { image: 't.jpg', originalPrice: 449.99, discountPrice: 399.99 },
    { image: 'z.jpg', originalPrice: 349.99, discountPrice: 299.99 }
  ];
  
  const container = document.getElementById('product-grid');
  
  // Create styles for hover effects and grid layout once
  const style = document.createElement('style');
  style.textContent = `
    #product-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  
    .product-card {
      width: 100%;
      height: 500px;
      position: relative;
      overflow: hidden;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
  
    .product-card:hover {
      transform: scale(1.03);
    }
  
    .product-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  
    .product-card:hover img {
      transform: scale(1.1);
    }
  
    .discount-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: #e60000;
      color: #fff;
      padding: 5px 10px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 4px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  
    .price-tag {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: #ffffffcc;
      color: #000;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
  
  // Generate product cards
  products.forEach(product => {
    const discountPercent = Math.round(100 - (product.discountPrice / product.originalPrice) * 100);
  
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
  
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = 'Product';
  
    const discountBadge = document.createElement('div');
    discountBadge.className = 'discount-badge';
    discountBadge.textContent = `${discountPercent}% OFF`;
  
    const priceTag = document.createElement('div');
    priceTag.className = 'price-tag';
    priceTag.innerHTML = `
      <span style="text-decoration: line-through; color: #888; margin-right: 6px;">$${product.originalPrice.toFixed(2)}</span>
      <span style="color: #ff3300;">$${product.discountPrice.toFixed(2)}</span>
    `;
  
    productDiv.appendChild(img);
    productDiv.appendChild(discountBadge);
    productDiv.appendChild(priceTag);
    container.appendChild(productDiv);
  });
  