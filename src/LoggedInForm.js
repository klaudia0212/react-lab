
import { useState } from "react";

export default function LoggedInForm(props) {

  return (
      <div>
        <h2>Witaj {props.email}!</h2>
        <button type="button" onClick={ props.onLogout}>
          Wyloguj
        </button>
      </div>
    );
}