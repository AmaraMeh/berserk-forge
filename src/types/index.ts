export interface Product {
  id: number;
  name: string;
  category: 'Sweatshirt' | 'Hoodie' | 'Accessory';
  price: number;
  imageUrl: string;
  description: string;
}