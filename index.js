

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


loadCartSection()
loadCategory()