import "../../style.css"
import { protegerRuta } from "../../main"

import {
  obtenerSesion,
  cerrarSesion
} from "../../utils/auth"


protegerRuta("admin")


const usuario = obtenerSesion()

const emailUsuario =
  document.querySelector<HTMLSpanElement>("#usuario-email")

const botonLogout =
  document.querySelector<HTMLButtonElement>("#btn-logout")


if (usuario && emailUsuario) {
  emailUsuario.textContent = usuario.email
}


botonLogout?.addEventListener("click", (): void => {

  cerrarSesion()

  window.location.href =
    "../auth/login/login.html"
})