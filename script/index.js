
const loadCategories =()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res =>res.json())
    .then(data => displayCategories(data));
};

const loadProductsByCategory = (category)=>{
    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayProductsByCategories(data));

};

const loadAllProducts=()=>{
    const url = `https://fakestoreapi.com/products`
    fetch(url)
    .then(res => res.json())
    .then(data=>displayAllProducts(data));

};


const displayAllProducts=(allProducts)=>{
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML="";
    allProducts.forEach(allProduct=>{
        const card = document.createElement("div");
        card.innerHTML=` <div class="card bg-base-100 w-72 shadow-sm">
  <figure class="bg-slate-100">
    <img
      src="${allProduct.image}"
      alt="Shoes" class="h-48 object-cover py-5" />
  </figure>
  <div class="card-body" >

    <div class="flex justify-between">
        <h2 class="card-title">
      ${allProduct.category}</h2>
      <div class="flex gap-1">
         <span><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i></span>
         <p>${allProduct.rating.rate}</p>
         <p>(${allProduct.rating.count})</p>
      </div>
     
    </div>
    
    <p class="text-ellipsis line-clamp-1 ">${allProduct.title}</p>
    <h1 class="font-semibold text-2xl"><span>$<span>${allProduct.price}</h1>

    <div class="card-actions justify-between">
      
      <button  class="btn  text-gray-400 hover:text-white border-gray-400  btn-outline btn-primary shadow-sm"><i class="fa-solid fa-eye"></i>Details</button>
      <button  class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i>Add</button>
    </div>
  </div>
</div>`;
        productContainer.append(card);
    });
};


const displayProductsByCategories = (products)=>{
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML="";
    products.forEach(product => {
        console.log(product);
        const card = document.createElement("div");
        card.innerHTML=` <div class="card bg-base-100 w-72 shadow-sm">
  <figure class="bg-slate-100">
    <img
      src="${product.image}"
      alt="Shoes" class="h-48 object-cover py-5" />
  </figure>
  <div class="card-body" >

    <div class="flex justify-between">
        <h2 class="card-title">
      ${product.category}</h2>
      <div class="flex gap-1">
         <span><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i></span>
         <p>${product.rating.rate}</p>
         <p>(${product.rating.count})</p>
      </div>
     
    </div>
    
    <p class="text-ellipsis line-clamp-1 ">${product.title}</p>
    <h1 class="font-semibold text-2xl"><span>$<span>${product.price}</h1>

    <div class="card-actions justify-between">
      
      <button  class="btn  text-gray-400 hover:text-white border-gray-400  btn-outline btn-primary shadow-sm"><i class="fa-solid fa-eye"></i>Details</button>
      <button  class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i>Add</button>
    </div>
  </div>
</div>`;
        productContainer.append(card);
    });
};



const displayCategories =(categories)=>{
   const categoryContainer = document.getElementById("category-container");
   categoryContainer.innerHTML="";
   const allDiv = document.createElement("div");
   allDiv.innerHTML=`<button class="btn text-black hover:text-white border-gray-400 rounded-4xl btn-outline btn-primary">All</button>`;
   allDiv.addEventListener("click", () => loadAllProducts());
   categoryContainer.append(allDiv);
   for(let category of categories){
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`
    <button  class="btn  text-black hover:text-white border-gray-400 rounded-4xl btn-outline btn-primary">${category}</button>
    `;
    btnDiv.addEventListener("click", () => loadProductsByCategory(category));
    categoryContainer.append(btnDiv);
   }
}

loadCategories();