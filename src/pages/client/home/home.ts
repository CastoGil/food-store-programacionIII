import "../../../style.css"

import {
    PRODUCTS,
    getCategories
} from "../../../data/data"

import {
    getProductImage
} from "../../../utils/productImages"

import type {
    IProduct
} from "../../../types/product"

import {
    addToCart,
    getCartCount
} from "../../../utils/cart"

const cartCount =
    document.querySelector<HTMLSpanElement>(
        "#cart-count"
    )

const productsContainer =
    document.querySelector<HTMLDivElement>(
        "#products-container"
    )

const categoriesContainer =
    document.querySelector<HTMLDivElement>(
        "#categories-container"
    )

const searchMessage =
    document.querySelector<HTMLDivElement>(
        "#search-message"
    )

const searchInput =
    document.querySelector<HTMLInputElement>(
        "#search-input"
    )

let searchTerm = ""

let selectedCategoryId: number | null = null


const availableProducts =
    PRODUCTS.filter(
        (product) => !product.eliminado
    )


function renderProducts(
    products: IProduct[]
): void {

    if (!productsContainer) {
        return
    }

    productsContainer.innerHTML = ""


    if (products.length === 0) {

        if (searchMessage) {

            searchMessage.textContent =
                "No se encontraron productos."
        }

        return
    }


    if (searchMessage) {

        searchMessage.textContent = ""
    }


    products.forEach(
        (product: IProduct): void => {

            const article =
                document.createElement("article")

            article.classList.add(
                "product-card"
            )
            const image =
                document.createElement("img")

            image.src =
                getProductImage(product.imagen)

            image.alt =
                product.nombre

            image.classList.add(
                "product-image"
            )

            const title =
                document.createElement("h3")

            title.textContent =
                product.nombre


            const description =
                document.createElement("p")

            description.textContent =
                product.descripcion


            const category =
                document.createElement("p")

            category.textContent =
                `Categoría: ${product.categorias
                    .map((item) => item.nombre)
                    .join(", ")
                }`


            const price =
                document.createElement("p")

            price.classList.add(
                "product-price"
            )

            price.textContent =
                formatPrice(product.precio)


            const stock =
                document.createElement("p")

            stock.textContent =
                `Stock: ${product.stock}`


            const button =
                document.createElement("button")

            button.type = "button"


            if (
                !product.disponible ||
                product.stock <= 0
            ) {

                button.textContent =
                    "No disponible"

                button.disabled = true

            } else {

                button.textContent =
                    "Agregar"


                button.addEventListener(
                    "click",
                    (): void => {

                        addToCart(product)
                        updateCartCount()

                        if (searchMessage) {

                            searchMessage.textContent =
                                `${product.nombre} fue agregado al carrito.`
                        }
                    }
                )
            }


            article.append(
                image,
                title,
                description,
                category,
                price,
                stock,
                button
            )


            productsContainer.appendChild(
                article
            )
        }
    )
}

function applyFilters(): void {

    const filteredProducts =
        availableProducts.filter(
            (product): boolean => {

                const matchesSearch =
                    product.nombre
                        .toLowerCase()
                        .includes(
                            searchTerm.toLowerCase()
                        )


                const matchesCategory =
                    selectedCategoryId === null
                    ||
                    product.categorias.some(
                        (category) =>
                            category.id === selectedCategoryId
                    )


                return (
                    matchesSearch
                    &&
                    matchesCategory
                )
            }
        )


    renderProducts(
        filteredProducts
    )
}
function formatPrice(price: number): string {

    return price.toLocaleString(
        "es-AR",
        {
            style: "currency",
            currency: "ARS"
        }
    )
}



function renderCategories(): void {

    if (!categoriesContainer) {
        return
    }

    categoriesContainer.innerHTML = ""

    const allButton =
        document.createElement("button")

    allButton.type = "button"
    allButton.textContent = "Todos"

    allButton.classList.add(
        "category-button"
    )

    allButton.dataset.categoryId =
        "all"

    allButton.addEventListener(
        "click",
        (): void => {

            selectedCategoryId = null
            searchTerm = ""

            if (searchInput) {
                searchInput.value = ""
            }

            updateActiveCategory()

            applyFilters()
        }
    )

    categoriesContainer.appendChild(
        allButton
    )


    const categories =
        getCategories()


    categories.forEach(
        (category): void => {

            const button =
                document.createElement("button")

            button.type = "button"

            button.textContent =
                category.nombre

            button.classList.add(
                "category-button"
            )

            button.dataset.categoryId =
                category.id.toString()

            button.addEventListener(
                "click",
                (): void => {

                    selectedCategoryId =
                        category.id

                    searchTerm = ""

                    if (searchInput) {
                        searchInput.value = ""
                    }

                    updateActiveCategory()

                    applyFilters()
                }
            )

            categoriesContainer.appendChild(
                button
            )
        }
    )
}


searchInput?.addEventListener(
    "input",
    (): void => {

        searchTerm =
            searchInput.value.trim()

        selectedCategoryId = null

        updateActiveCategory()

        applyFilters()
    }
)

function updateCartCount(): void {

    if (cartCount) {
        cartCount.textContent =
            getCartCount().toString()
    }
}

function updateActiveCategory(): void {

    const buttons =
        document.querySelectorAll<HTMLButtonElement>(
            ".category-button"
        )

    buttons.forEach(
        (button): void => {

            const categoryId =
                button.dataset.categoryId

            const isActive =
                selectedCategoryId === null
                    ? categoryId === "all"
                    : categoryId ===
                      selectedCategoryId.toString()

            button.classList.toggle(
                "active",
                isActive
            )
        }
    )
}
renderCategories()
updateActiveCategory()
applyFilters()
updateCartCount()