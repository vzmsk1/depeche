export interface ProductProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number | null;
}
