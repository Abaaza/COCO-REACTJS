// src/types/menu.ts
export interface MenuItem {
    _id: string;
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    price: number;
    category: string;
    image?: string;
    available: boolean;  // Add this too if you want to match your backend model
  }
  
  export type Language = "en" | "ar";