import axios from 'axios';
import {Product} from '../interfaces/products';

export async function fetchProducts(): Promise<Product[]> {
  return await axios.get(
    `https://5d6da1df777f670014036125.mockapi.io/api/v1/product/`,
  );
}
