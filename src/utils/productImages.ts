import pizzaImage from "../assets/img/pizza.png"
import hamburguesaImage from "../assets/img/hamburguesa.png"
import bebidaImage from "../assets/img/bebida.png"
import postreImage from "../assets/img/postre.png"
import empanadaImage from "../assets/img/empanada.png"
import ensaladaImage from "../assets/img/ensalada.png"

const productImages: Record<string, string> = {
  "pizza.png": pizzaImage,
  "hamburguesa.png": hamburguesaImage,
  "bebida.png": bebidaImage,
  "postre.png": postreImage,
  "empanada.png": empanadaImage,
  "ensalada.png": ensaladaImage
}

export function getProductImage(
  imageName: string
): string {
  return productImages[imageName]
}