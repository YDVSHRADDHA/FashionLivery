import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  brand: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface LiveryState {
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;

  // Wishlist
  wishlist: string[]; // Product IDs
  toggleWishlist: (productId: string) => void;

  // Cart
  cart: (Product & { quantity: number })[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;

  // Search
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useLiveryStore = create<LiveryState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      isAuthModalOpen: false,
      setAuthModalOpen: (open) => set({ isAuthModalOpen: open }),

      wishlist: [],
      toggleWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.includes(productId)
          ? state.wishlist.filter((id) => id !== productId)
          : [...state.wishlist, productId]
      })),

      cart: [],
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId)
      })),
      clearCart: () => set({ cart: [] }),

      isSearchOpen: false,
      setSearchOpen: (open) => set({ isSearchOpen: open }),
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'livery-storage',
      partialize: (state) => ({ wishlist: state.wishlist, user: state.user }),
    }
  )
);
