export type Category = 
  | "Noodles" 
  | "Dal + Rice" 
  | "Breads" 
  | "Biryani" 
  | "Sweets" 
  | "Soup" 
  | "Veg Starter" 
  | "Non-Veg Starter" 
  | "Tandoor Se Veg" 
  | "Tandoor Se Non Veg" 
  | "Sizzlers" 
  | "Main Course Veg" 
  | "Non-Veg Main Course" 
  | "Mutton";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  isBestSeller?: boolean;
  isVeg: boolean;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type OrderType = 'delivery' | 'dine-in';

export interface UserDetails {
  name: string;
  phone: string;
  address?: string;
  tableNumber?: string;
}