import "../../../style.css"

import {
    getCart,
    updateQuantity,
    calculateTotal, getCartCount
} from "../../../utils/cart"

import {
    getProductImage
} from "../../../utils/productImages"

const cartCount =
    document.querySelector<HTMLSpanElement>(
        "#cart-count"
    )
const cartItemsContainer =
    document.querySelector<HTMLElement>(
        "#cart-items"
    )

const cartMessage =
    document.querySelector<HTMLDivElement>(
        "#cart-message"
    )

const cartTotal =
    document.querySelector<HTMLParagraphElement>(
        "#cart-total"
    )

const cartSummary =
    document.querySelector<HTMLElement>(
        "#cart-summary"
    )


function formatPrice(price: number): string {

    return price.toLocaleString(
        "es-AR",
        {
            style: "currency",
            currency: "ARS"
        }
    )
}


function renderCart(): void {

    if (!cartItemsContainer) {
        return
    }
    if (cartCount) {
        cartCount.textContent =
            getCartCount().toString()
    }

    const cart =
        getCart()


    cartItemsContainer.innerHTML = ""


    if (cart.length === 0) {

        if (cartMessage) {

            cartMessage.textContent =
                "El carrito está vacío."
        }


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(0)
        }


        if (cartSummary) {

            cartSummary.hidden = true
        }


        return
    }


    if (cartMessage) {

        cartMessage.textContent = ""
    }


    if (cartSummary) {

        cartSummary.hidden = false
    }


    cart.forEach(
        (item): void => {

            const article =
                document.createElement("article")

            article.classList.add(
                "cart-item"
            )
            const image =
                document.createElement("img")

            image.src =
                getProductImage(item.product.imagen)

            image.alt =
                item.product.nombre

            image.classList.add(
                "cart-item-image"
            )

            const title =
                document.createElement("h3")

            title.textContent =
                item.product.nombre


            const price =
                document.createElement("p")

            price.textContent =
                `Precio: ${formatPrice(
                    item.product.precio
                )}`


            const quantity =
                document.createElement("p")

            quantity.textContent =
                `Cantidad: ${item.quantity}`


            const subtotal =
                document.createElement("p")

            subtotal.textContent =
                `Subtotal: ${formatPrice(
                    item.product.precio *
                    item.quantity
                )}`


            const controls =
                document.createElement("div")

            controls.classList.add(
                "cart-controls"
            )


            const decreaseButton =
                document.createElement("button")

            decreaseButton.type =
                "button"

            decreaseButton.textContent =
                "-"


            decreaseButton.addEventListener(
                "click",
                (): void => {

                    updateQuantity(
                        item.product.id,
                        item.quantity - 1
                    )

                    renderCart()
                }
            )


            const increaseButton =
                document.createElement("button")

            increaseButton.type =
                "button"

            increaseButton.textContent =
                "+"


            increaseButton.addEventListener(
                "click",
                (): void => {

                    updateQuantity(
                        item.product.id,
                        item.quantity + 1
                    )

                    renderCart()
                }
            )


            controls.append(
                decreaseButton,
                increaseButton
            )


            article.append(
                image,
                title,
                price,
                quantity,
                subtotal,
                controls
            )


            cartItemsContainer.appendChild(
                article
            )
        }
    )


    if (cartTotal) {
        cartTotal.textContent =
            `Total: ${formatPrice(calculateTotal())}`
    }
}


renderCart()