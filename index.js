

// first landing all pants all category
const loadCategory = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(dataCategory=>{
        displayCategory(dataCategory.categories)
    })
}

//load the tree section cart
const loadCartSection = ()=>{
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=> res.json())
    .then(treeData =>{
        
        displayTreeCart(treeData.plants)
        manageSpinner(false);
    })
    //   manageSpinner(false);
}

//loading function
const manageSpinner =(status)=>{
    if(status==true){
        document.getElementById("load-spinner").classList.remove('hidden');
        document.getElementById("all-middle").classList.add('hidden');
        
    }
    else{
        document.getElementById("all-middle").classList.remove('hidden');
        document.getElementById("load-spinner").classList.add('hidden');
    }
}

const removeActive=()=>{
    const categoryBtn = document.querySelectorAll('.category-btn');
    categoryBtn.forEach(btn=>btn.classList.remove('activeBtn'))
}

// onlick of the category 
const categoryClicked=(id) =>{
    const categoryBtn =  document.getElementById("btn-category-click");
    
    fetch(`https://openapi.programming-hero.com/api/category/${id}`).then(res=>res.json())
    .then(json=>{
        removeActive()
        // console.log(json)
        displayTreeCart(json.plants)
        // console.log('hello')
        const categoryClicked = document.getElementById(`btn-category-click-${id}`)
        categoryClicked.classList.add('activeBtn')

    })



}
let takaMain=0;
//fuction for total taka
const totalTaka = (taka)=>{
    takaMain+=taka

    
    const totalPrice= document.getElementById('main-cart')
    const totalMoneyPera = document.getElementById('totalMoney');
    if(!totalMoneyPera){
        const createNewDiv = document.createElement('div');
        createNewDiv.innerHTML = `
        <p id="totalMoney">Total:-${takaMain}</p> 
        `
        totalPrice.append(createNewDiv)
    }
    else{
         totalMoney.textContent = `Total:- ${takaMain}`;
    }

    

   
    // return taka;
}
//remove the add cart
const removeItem = (taka, element) => {
    element.closest(".cart-item").remove();
    totalTaka(-taka);

    if (takaMain <= 0) {
        const getTotal = document.getElementById('totalMoney');
        if (getTotal) getTotal.remove();
    }
}

// Display added cart
const displayYourCart = (name, taka) => {
    alert(`${name} has been added to the cart.`)
    const yourCart = document.getElementById("your-cart");
    const neDivision = document.createElement('div');
    neDivision.className = "cart-item flex bg-[#CFF0DC50] p-3 items-center gap-4 mt-2 rounded-md";
    neDivision.innerHTML = `
        <div>
            <h3>${name}</h3>
            <p>৳${taka}</p>
        </div>
        <div>
            <i class="fa-solid fa-xmark cursor-pointer"></i>
        </div>
    `;
    neDivision.querySelector("i").addEventListener("click", function () {
        removeItem(taka, this);
    });

    yourCart.append(neDivision);
    totalTaka(taka);
}

//display details
const displayDetails=async (id)=>{
    await fetch(`https://openapi.programming-hero.com/api/plant/${id}`).then(res=>res.json()).then(json=>{
        displayModal(json.plants)
    })
}

//display the pop up modal
const displayModal=(plants)=>{
    // console.log(plants)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML='';
    const newDivContain = document.createElement('div');
    newDivContain.innerHTML=`
    <h1 class="text-xl font-bold">${plants.name}</h1>
        <img class="h-[300px] w-full rounded-lg mt-3" src="${plants.image}" alt="">
        <h2 class="mt-3"> <span class="font-semibold">Category:</span> ${plants.category}</h2>
        <h3 class="mt-3"><span class="font-semibold">Price:</span> ৳${plants.price}</h3>
        <h3 class="mt-3"><span class="font-semibold">Description:</span> ${plants.description}</h3>

        <form method="dialog" class="modal-backdrop">
        <button class="btn text-black mt-5 flex flex-row-reverse">close</button>

    </form>
    `
    modalContainer.append(newDivContain)

    document.getElementById('my_modal_2').showModal()
}
//display the cart section

const displayTreeCart =(treeData)=>{

    const allTrees = document.getElementById("all-tree-cart");
    allTrees.innerHTML='';
    
    treeData.forEach(data => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML =`
        <div class="bg-white p-5 space-y-10 flex flex-col h-full rounded-md ">
            <img class="w-[311px] h-[186px] rounded-md" src="${data.image}" alt="">
            <h1  onclick="displayDetails(${data.id})"  class="font-semibold">${data.name}</h1>
            <p>${data.description}</p>
            <div class=" mt-auto space-y-3">
                <div class="flex justify-between text-center items-center mt-auto ">
                    <button  class="btn btn-soft btn-success rounded-lg">${data.category}</button>
                    <p>৳${data.price}</p>

                </div>
                <button onclick="displayYourCart('${data.name}',${data.price})" class="btn btn-success rounded-lg w-full mt-auto ">Add to Cart</button>

        </div>
        `
        allTrees.append(newDiv)
    });
    
}

// displaying category card 
const displayCategory =(categoryData) =>{
    const allCategorySection = document.getElementById("all-category-section");
    allCategorySection.innerHTML='';
    for(data of categoryData){
        const addData = document.createElement('div')
        addData.innerHTML=`
        <button id="btn-category-click-${data.id}" onclick="categoryClicked(${data.id})" class="btn bg-transparent border-0 category-btn">${data.category_name}</button>
        `
        allCategorySection.append(addData)
    }
}

loadCartSection()
loadCategory()