import type { IProduct, ICartItem } from "../types/product"

const CART_KEY = "cart"

export function getCart(): ICartItem[] {
  const storedCart = localStorage.getItem(CART_KEY)

  if (!storedCart) {
    return []
  }

  return JSON.parse(storedCart) as ICartItem[]
}

function saveCart(cart: ICartItem[]): void {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  )
}

export function addToCart(product: IProduct): void {
  const cart = getCart()

  const existingItem = cart.find(
    (item) => item.product.id === product.id
  )

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      product: product,
      quantity: 1,
    })
  }

  saveCart(cart)
}

export function updateQuantity(
  productId: number,
  quantity: number
): void {
  const cart = getCart()

  if (quantity <= 0) {
    const updatedCart = cart.filter(
      (item) => item.product.id !== productId
    )

    saveCart(updatedCart)
    return
  }

  const item = cart.find(
    (item) => item.product.id === productId
  )

  if (item) {
    item.quantity = quantity
    saveCart(cart)
  }
}

export function calculateTotal(): number {
  const cart = getCart()

  return cart.reduce(
    (total, item) =>
      total + item.product.precio * item.quantity,
    0
  )
}
export function getCartCount(): number {
  const cart = getCart()

  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  )
}