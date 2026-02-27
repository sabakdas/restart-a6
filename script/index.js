
const loadCategories =()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res =>res.json())
    .then(data => displayCategories(data));
};

const displayCategories =(categories)=>{
   const categoryContainer = document.getElementById("category-container");
   categoryContainer.innerHTML="";
   const allDiv = document.createElement("div");
   allDiv.innerHTML=`<button class="btn text-black hover:text-white border-gray-400 rounded-4xl btn-outline btn-primary">All</button>`;
   categoryContainer.append(allDiv);
   for(let category of categories){
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`
    <button class="btn text-black hover:text-white border-gray-400 rounded-4xl btn-outline btn-primary">${category}</button>
    `;
    categoryContainer.append(btnDiv);
   }
}

loadCategories();