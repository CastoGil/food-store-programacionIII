import "../../../style.css"

import {
  obtenerUsuarios,
  guardarUsuarios,
  guardarSesion,
  crearAdminInicial
} from "../../../utils/auth"
import { navigateTo } from "../../../utils/navigate"

crearAdminInicial()
const formulario =
  document.querySelector<HTMLFormElement>("#login-form")!

const inputEmail =
  document.querySelector<HTMLInputElement>("#email")!

const inputPassword =
  document.querySelector<HTMLInputElement>("#password")!


formulario.addEventListener("submit", (evento): void => {

  evento.preventDefault()


  const email = inputEmail.value.trim()

  const password = inputPassword.value.trim()


  const usuarios = obtenerUsuarios()


  const usuarioEncontrado = usuarios.find(
    (usuario) =>
      usuario.email === email &&
      usuario.password === password
  )


  if (!usuarioEncontrado) {

    alert("Email o contraseña incorrectos.")

    return
  }


  usuarioEncontrado.loggedIn = true

  guardarUsuarios(usuarios)

  guardarSesion(usuarioEncontrado)


  alert("Inicio de sesión correcto.")


  if (usuarioEncontrado.role === "admin") {

    navigateTo("../../admin/admin.html")

  } else {

    navigateTo("../../client/client.html")
  }

})