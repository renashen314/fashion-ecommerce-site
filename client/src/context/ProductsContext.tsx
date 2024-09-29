'use client'
import { createContext, useContext } from "react"; 
import { Product } from '../types/product'

interface ProductsContextType {
    products: Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const products: Product[] = [
      {
        id: 1,
        name: 'Chateau Margaux',
        origin: 'Burgundy, France',
        price: 199.99,
        type: 'Red',
        winery: 'Chateau Margaux Winery',
        imageUrl: 'https://images.unsplash.com/photo-1534735714471-c5ea63cbe1cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A full-bodied wine with intense flavors of dark fruits and a smooth finish.',
      },
      {
        id: 2,
        name: 'Penfolds Grange',
        origin: 'South Australia, Australia',
        price: 59.99,
        type: 'Red',
        winery: 'Penfolds Winery',
        imageUrl: 'https://images.unsplash.com/photo-1700893417207-99da24343476?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'An Australian classic with a rich aroma and complex flavors.',
      },
      {
        id: 3,
        name: "Cabernet Sauvignon",
        origin: "Napa Valley, USA",
        price: 49.99,
        type: "Red",
        winery: "Silver Oak Winery",
        imageUrl: 'https://images.unsplash.com/photo-1618611627105-74f7567bc6a2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "A bold red wine with rich flavors of blackberry, plum, and a hint of vanilla. Perfect for pairing with grilled meats and cheeses.",
      },
      {
        id: 4,
        name: 'Opus One',
        origin: 'Willamette Valley, USA',
        price: 32.99,
        type: 'white',
        winery: 'Penfolds Winery',
        imageUrl: 'https://images.unsplash.com/photo-1634496173551-dd16f77fd47c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A sweet and aromatic white wine with hints of peach, apricot, and honey. Great with spicy food or as a dessert wine.',
      },
      {
        id: 5,
        name: "Moët & Chandon Brut Imperial",
        origin: "Champagne, France",
        price: 59.99,
        type: "Sparkling",
        winery: "Moët & Chandon",
        imageUrl: "https://images.unsplash.com/photo-1635045180768-332216aac26c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A classic Champagne with vibrant flavors of citrus, apple, and a hint of brioche. Perfect for celebrations and toasts."
      }
    ];
    
    return (
        <ProductsContext.Provider value={{ products }}>
          {children}
        </ProductsContext.Provider>
      );
    
}
export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
      throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}