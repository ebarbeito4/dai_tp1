"use client";

import { useEffect, useState } from "react";
import styles from "@/app/Home.module.css";

export default function Home() {
  const [alumno, setAlumno] = useState("");
  const [mostrarAyuda, setMostrarAyuda] = useState(false);

  useEffect(() => {
    document.title = "Pio Promedios - Inicio";
  }, []);

  useEffect(() => {
    console.log("El alumno cambió:", alumno);
  }, [alumno]);

  return (
    <main className={styles.pagina}>
      <section className={styles.columna}>
        <h1>Pio Promedios</h1>
        <input
          className={styles.input}
          type="text"
          value={alumno}
          onChange={(event) => setAlumno(event.target.value)}
          placeholder="Ingresá tu nombre"
        />

        <div className={styles.bienvenida}>
          {alumno === "" ? (
            <p className={styles.mensaje}>
              Por favor, ingresá tu nombre para continuar.
            </p>
          ) : (
            <>
              <h2>¡Hola, {alumno}!</h2>
              <p className={styles.mensaje}>
                La calculadora de notas está disponible en http://localhost:3000/notas.
              </p>
            </>
          )}
        </div>

        <button
          className={styles.boton}
          onClick={() => setMostrarAyuda(!mostrarAyuda)}
        >
          Mostrar/Ocultar ayuda
        </button>

        {mostrarAyuda && (
          <ul className={styles.ayuda}>
            <li>Ingresá tu nombre para comenzar.</li>
            <li>Accedé a la calculadora desde la ruta /notas.</li>
            <li>Agregá o eliminá notas para calcular el promedio.</li>
          </ul>
        )}
      </section>
    </main>
  );
}
