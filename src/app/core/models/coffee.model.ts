export interface CoffeeOrigin {
  id: string;
  country: string;
  region: string;
  bean: string;
  notes: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface RoastLevel {
  id: number;
  title: string;
  description: string;
  filter: string;
}

export interface BrewMethod {
  id: string;
  name: string;
  grindSize: string;
  ratio: string;
  timing: string;
}

export interface DeliveryOption {
  island: string;
  time: string;
  cost: number;
}

export interface Product {
  id: string;
  name: string;
  origin: CoffeeOrigin;
  roastLevel: RoastLevel;
  price: number;
  description: string;
  image: string;
}
