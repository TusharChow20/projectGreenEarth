# Plant a Tree – Campaign Website  

A responsive and dynamic website built to promote tree plantation campaigns. The platform allows users to browse plant categories, view details, and add plants to a cart system with real-time price calculation.  

---

## 📑 Table of Contents  
- [Features](#features)  
- [API Endpoints](#api-endpoints)  
- [Project Structure](#project-structure)  
- [Functionalities](#functionalities)  
- [Challenges Solved](#challenges-solved)  
- [Tech Stack](#tech-stack)  
- [Deployment](#deployment)  
- [Author](#author)  

---

## ✨ Features  
- Dynamic Category Loading – Categories fetched and displayed from API.  
- Tree Display by Category – Plants are loaded dynamically upon category selection.  
- Card Layout – Each card contains an image, name, description, category, price, and "Add to Cart" button.  
- Plant Details Modal – Clicking on a plant name opens a modal with full details.  
- Cart System – Add/remove plants with real-time price calculation.  
- Responsive Design – Mobile-first, responsive across all devices.  
- Loading Spinner – Displays while data is being fetched.  
- Active State Highlighting – Selected category button is highlighted.  

---

## 🌐 API Endpoints  
- **All Plants:**  
  `https://openapi.programming-hero.com/api/plants`  

- **All Categories:**  
  `https://openapi.programming-hero.com/api/categories`  

- **Plants by Category:**  
  `https://openapi.programming-hero.com/api/category/{id}`  
  Example: `https://openapi.programming-hero.com/api/category/1`  

- **Plant Details:**  
  `https://openapi.programming-hero.com/api/plant/{id}`  
  Example: `https://openapi.programming-hero.com/api/plant/1`  

---

## 📂 Project Structure  
├── index.html # Main entry file
├── style.css # Custom styles (if used with Tailwind/DaisyUI)
├── script.js # Main JavaScript logic
├── assets/ # Images and media files
└── README.md # Project documentation

---

## ⚙️ Functionalities  
- **Category Loading:** Loads all tree categories dynamically.  
- **Category Filtering:** Displays trees by selected category.  
- **Modal System:** Shows plant details in a modal window.  
- **Cart Management:**  
  - Add plants to cart.  
  - Remove plants from cart.  
  - Auto-calculates total price.  

---

## 🧪 Challenges Solved  
- Implemented real-time cart calculation.  
- Managed modal content dynamically with API data.  
- Handled loading states with spinners.  
- Highlighted active category button for better UX.  
- Ensured full responsiveness with Tailwind CSS utilities.  

---

## 🛠️ Tech Stack  
- HTML5  
- CSS3 (Tailwind CSS, DaisyUI)  
- Vanilla JavaScript  

---

## 🚀 Deployment  
- [Netlify](https://benevolent-scone-c8cea6.netlify.app/)  


---

## 👨‍💻 Author  
**Tushar Chowdhury**  

