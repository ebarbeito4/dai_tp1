"use client";

import { useState } from "react";
import styles from "@/app/components/NotaInput.module.css";

export default function NotaInput({ onAgregar }) {
  // Guarda el valor que escribe el usuario en el input.
  const [nota, setNota] = useState("");

  // Actualiza el estado cada vez que cambia el valor del input.
  const manejarCambio = (event) => {
    setNota(event.target.value);
  };

  // Verifica que la nota sea un número válido entre 0 y 10.
  const notaValida = nota !== "" && Number(nota) >= 0 && Number(nota) <= 10;

  // Agrega la nota si es válida y limpia el input.
  const agregar = () => {
    onAgregar(Number(nota));
    setNota("");
  };

  return (
    <div className={styles.contenedorInput}>
      <input
        className={styles.input}
        type="number"
        value={nota}
        onChange={manejarCambio}
      />

      {/* Muestra un mensaje de error si la nota no es válida. */}
      {!notaValida && (
        <p className={styles.error}>
          Ingresá una nota entre 0 y 10.
        </p>
      )}

      <button
        className={styles.boton}
        onClick={agregar}
        disabled={!notaValida}
      >
        Agregar nota
      </button>
    </div>
  );
}