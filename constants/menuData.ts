import { Category, MenuItem } from '../types';

export const categories: Category[] = [
  "Noodles", "Dal + Rice", "Breads", "Biryani", "Sweets", "Soup", 
  "Veg Starter", "Non-Veg Starter", "Tandoor Se Veg", "Tandoor Se Non Veg", 
  "Sizzlers", "Main Course Veg", "Non-Veg Main Course", "Mutton"
];

export const menuItems: MenuItem[] = [
  // Noodles
  {
    id: 1,
    name: "Veg Hakka Noodles",
    price: 189,
    category: "Noodles",
    description: "Classic stir-fried noodles with fresh vegetables and aromatic spices.",
    isBestSeller: true,
    isVeg: true,
    image: "https://res.cloudinary.com/dvcgzneiy/image/upload/v1767263348/Whisk_951aaab98c03f97861f48a22fba0c32edr_wcgtzt.webp"
  },
  {
    id: 2,
    name: "Chicken Schezwan Noodles",
    price: 249,
    category: "Noodles",
    description: "Spicy noodles tossed with tender chicken chunks and Schezwan sauce.",
    isVeg: false
  },

  // Dal + Rice
  {
    id: 3,
    name: "Dal Makhani",
    price: 220,
    category: "Dal + Rice",
    description: "Black lentils simmered overnight with butter and cream.",
    isBestSeller: true,
    isVeg: true,
    image: "https://res.cloudinary.com/dvcgzneiy/image/upload/v1767263348/Whisk_562f5ab6f492472a193491d519eb0be0dr_vtje5l.webp"
  },
  {
    id: 4,
    name: "Jeera Rice",
    price: 140,
    category: "Dal + Rice",
    description: "Basmati rice tempered with cumin seeds and ghee.",
    isVeg: true
  },

  // Biryani
  {
    id: 7,
    name: "Royal Chicken Biryani",
    price: 350,
    category: "Biryani",
    description: "Long grain basmati rice cooked with marinated chicken and royal spices.",
    isBestSeller: true,
    isVeg: false,
    image: "https://res.cloudinary.com/dvcgzneiy/image/upload/v1767263348/Whisk_fa556516970e2acb9304b2ea716eb0b2dr_qgycmp.webp"
  },

  // Main Course
  {
    id: 13,
    name: "Butter Chicken",
    price: 390,
    category: "Non-Veg Main Course",
    description: "Tandoori chicken simmered in a creamy tomato gravy.",
    isBestSeller: true,
    isVeg: false,
    image: "https://res.cloudinary.com/dvcgzneiy/image/upload/v1767263348/Whisk_0aa6eeb5a439017a12e4274223851d9cdr_trkgsm.webp"
  },
  // ... (Other items kept as text-only for main menu)
  {
    id: 5,
    name: "Butter Naan",
    price: 50,
    category: "Breads",
    description: "Soft Indian flatbread topped with generous butter.",
    isVeg: true
  },
  {
    id: 6,
    name: "Garlic Naan",
    price: 65,
    category: "Breads",
    description: "Naan infused with minced garlic and coriander.",
    isVeg: true
  },
  {
    id: 8,
    name: "Paneer Tikka Biryani",
    price: 299,
    category: "Biryani",
    description: "Vegetarian delight featuring chargrilled paneer cubes in aromatic rice.",
    isVeg: true
  },
  {
    id: 9,
    name: "Crispy Corn",
    price: 210,
    category: "Veg Starter",
    description: "Golden fried sweet corn kernels seasoned with peppers.",
    isVeg: true
  },
  {
    id: 10,
    name: "Paneer Chilli Dry",
    price: 260,
    category: "Veg Starter",
    description: "Cottage cheese cubes tossed in spicy chilli soya sauce.",
    isVeg: true
  },
  {
    id: 11,
    name: "Chicken Lollipop",
    price: 320,
    category: "Non-Veg Starter",
    description: "Frenched chicken winglets, battered and fried to perfection.",
    isBestSeller: false, // Changed for this specific UI showcase
    isVeg: false
  },
  {
    id: 12,
    name: "Fish Amritsari",
    price: 380,
    category: "Non-Veg Starter",
    description: "Batter fried fish with carom seeds and Indian spices.",
    isVeg: false
  },
  {
    id: 14,
    name: "Paneer Lababdar",
    price: 310,
    category: "Main Course Veg",
    description: "Cottage cheese in a rich, creamy onion-tomato gravy.",
    isVeg: true
  },
  {
    id: 15,
    name: "Gulab Jamun",
    price: 90,
    category: "Sweets",
    description: "Deep-fried milk solids soaked in saffron sugar syrup.",
    isVeg: true
  },
  {
    id: 16,
    name: "Rasmalai",
    price: 120,
    category: "Sweets",
    description: "Soft cottage cheese dumplings in sweetened milk.",
    isVeg: true
  }
];
