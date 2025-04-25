// Menu items array
const menuItems = [
    { name: "Chicken Biryani", price: 360, image: "images/biryani.jpg" },
    { name: "Mutton Biryani", price: 420, image: "images/mutton_biryani.jpg" },
    { name: "Veg Fried Rice", price: 300, image: "images/fried_rice.jpg" },
    { name: "Chicken 65", price: 280, image: "images/chicken65.jpg" },
    { name: "Paneer Butter Masala", price: 320, image: "images/paneer.jpg" },
    { name: "Parotta", price: 60, image: "images/parotta.jpg" },
    { name: "Egg Curry", price: 250, image: "images/egg_curry.jpg" },
    { name: "Fish Fry", price: 380, image: "images/fish_fry.jpg" },
    { name: "Tandoori Chicken", price: 400, image: "images/tandoori.jpg" },
    { name: "Veg Meals", price: 200, image: "images/veg_meals.jpg" }
  ];
  
  // Get the menu grid div
  const menuGrid = document.getElementById('menuGrid');
  
  // Create food cards
  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>₹${item.price}</p>
    `;
    menuGrid.appendChild(card);
  });
  