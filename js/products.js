async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.querySelector("#all-products .container");
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("product-picture");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = `product: ${product.title}`;
    img.width = 250;
    img.loading = "lazy";
    pictureDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("product-info");

    const category = document.createElement("h2");
    category.classList.add("categories");
    category.textContent = product.category;

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.classList.add("price");
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `US$ ${product.price}`;
    price.appendChild(priceSpan);

    const button = document.createElement("button");
    button.textContent = "Add to bag";

    infoDiv.appendChild(category);
    infoDiv.appendChild(title);
    infoDiv.appendChild(price);
    infoDiv.appendChild(button);

    productElement.appendChild(pictureDiv);
    productElement.appendChild(infoDiv);

    fragment.appendChild(productElement);
  });
  container.appendChild(fragment);
}

loadProducts();
