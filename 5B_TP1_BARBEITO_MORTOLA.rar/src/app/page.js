"use client";

import { useEffect, useState } from "react";
import styles from "@/app/Home.module.css";

export default function Home() {
  // Estado para guardar el nombre del alumno ingresado por el usuario.
  const [alumno, setAlumno] = useState("");
  // Estado para mostrar u ocultar la ayuda de uso de la app.
  const [mostrarAyuda, setMostrarAyuda] = useState(false);

  // Cambia el título de la pestaña cuando se carga la página principal.
  useEffect(() => {
    document.title = "Pio Promedios - Inicio";
  }, []);

  // Muestra en la consola cada vez que cambia el nombre del alumno.
  useEffect(() => {
    console.log("El alumno cambió:", alumno);
  }, [alumno]);

  return (
    <main className={styles.pagina}>
      <section className={styles.columna}>
        <h1>Pio Promedios</h1>
        {/* Input para ingresar el nombre del alumno */}
        <input
          className={styles.input}
          type="text"
          value={alumno}
          onChange={(event) => setAlumno(event.target.value)}
          placeholder="Ingresá tu nombre"
        />

        <div className={styles.bienvenida}>
          {/* Si no hay nombre cargado, pedimos que lo ingrese. */}
          {alumno === "" ? (
            <p className={styles.mensaje}>
              Por favor, ingresá tu nombre para continuar.
            </p>
          ) : (
            <>
              {/* Si ya ingresó un nombre, mostramos la bienvenida y el enlace a la calculadora. */}
              <h2>¡Hola, {alumno}!</h2>
              <p className={styles.mensaje}>
                La calculadora de notas está disponible en{" "}
                <a href="http://localhost:3000/notas">http://localhost:3000/notas</a>.
              </p>
            </>
          )}
        </div>

        {/* Botón para mostrar u ocultar la ayuda del uso de la app. */}
        <button
          className={styles.boton}
          onClick={() => setMostrarAyuda(!mostrarAyuda)}
        >
          Mostrar/Ocultar ayuda
        </button>

        {/* Lista de instrucciones que aparece solo cuando el usuario activa la ayuda. */}
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
