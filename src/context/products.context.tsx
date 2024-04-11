import { createContext, type SetStateAction } from 'react';
import { useState } from 'react';
import type { ProductProps } from '../components/product/product.props'
import PRODUCTS from '../shop-data.json';


interface ShopContextType {
	products: ProductProps[],
}

export const ProductsContext = createContext<ShopContextType>({
		products: [],
});

export function ProductsProvider({ children }: { children: React.ReactNode }) {
	const [products, setProducts] = useState<ProductProps[]>(PRODUCTS)
	const value = { products, setProducts}
	
	return <ProductsContext.Provider value={value}>
		{children}
	</ProductsContext.Provider>
}