"use client";

import { useState } from "react";
import styles from "@/app/components/NotaInput.module.css";

export default function NotaInput({ onAgregar }) {
  const [nota, setNota] = useState("");

  const manejarCambio = (event) => {
    setNota(event.target.value);
  };

  const notaValida = nota !== "" && Number(nota) >= 0 && Number(nota) <= 10;

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