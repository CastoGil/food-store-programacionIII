import "../../../style.css"
import type { IUser } from "../../../types/IUser"

import {
  obtenerUsuarios,
  guardarUsuarios,
  existeEmail
} from "../../../utils/auth"

import { navigateTo } from "../../../utils/navigate"


const formulario =
  document.querySelector<HTMLFormElement>("#registro-form")!

const inputEmail =
  document.querySelector<HTMLInputElement>("#email")!

const inputPassword =
  document.querySelector<HTMLInputElement>("#password")!


formulario.addEventListener("submit", (evento): void => {

  evento.preventDefault()


  const email = inputEmail.value.trim()
  const password = inputPassword.value.trim()


  if (existeEmail(email)) {
    alert("Ya existe un usuario registrado con ese email.")
    return
  }


  const nuevoUsuario: IUser = {
    id: Date.now(),
    email: email,
    password: password,
    loggedIn: false,
    role: "client"
  }


  const usuarios = obtenerUsuarios()

  usuarios.push(nuevoUsuario)

  guardarUsuarios(usuarios)


  alert("Usuario registrado correctamente.")


  formulario.reset()


  navigateTo("../login/login.html")
})