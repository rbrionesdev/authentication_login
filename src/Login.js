import React from "react"
import { useAuth0 } from "@auth0/auth0-react"; // exportamos el hook useAuth0 de la libreria

export const LoginButton = () => { // creamos un componente login button
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>
      Login
    </button>
  ); //devuelve un boton "login" y le pasamos la funcion loginWithRedirect
};