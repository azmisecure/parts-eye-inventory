
export interface Part {
  id: string;
  name: string;
  sku: string;
  category: string;
  location: string;
  quantity: number;
  minQuantity: number;
  price: number;
  lastUpdated: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  partCount: number;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  partCount: number;
}
