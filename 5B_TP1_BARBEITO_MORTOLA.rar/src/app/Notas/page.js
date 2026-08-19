"use client";

import { useEffect, useState } from "react";
import ListaNotas from "@/app/components/ListaNotas";
import styles from "./Notas.module.css";

export default function NotasPage() {
	// Estado inicial con 3 notas de ejemplo para que la app tenga contenido al abrirse.
	const [notas, setNotas] = useState([8, 5, 10]);
	// Controla si la pantalla está cargando inicialmente antes de mostrar la lista.
	const [cargando, setCargando] = useState(true);

	// Simula una carga inicial de la página durante 2 segundos.
	useEffect(() => {
		const temporizador = setTimeout(() => {
			setCargando(false);
		}, 2000);

		return () => clearTimeout(temporizador);
	}, []);

	// Actualiza el título de la pestaña con la cantidad de notas actuales.
	useEffect(() => {
		document.title = `Pio Promedios - ${notas.length} notas`;
	}, [notas]);

	// Agrega una nueva nota al final del arreglo y actualiza el estado.
	const agregarNota = (nota) => {
		const copia = [];
		notas.forEach((n) => copia.push(n));
		copia.push(nota);
		setNotas(copia);
	};

	// Elimina una nota según su índice dentro del arreglo.
	const eliminarNota = (indice) => {
		const copia = [];
		notas.forEach((n, i) => {
			if (i !== indice) copia.push(n);
		});
		setNotas(copia);
	};

	// Decide qué contenido mostrar según el estado de carga.
	const renderizarContenido = () => {
		if (cargando) {
			return <p className={styles.cargando}>⏳ Cargando las notas...</p>;
		} else {
			return (
				<ListaNotas
					notas={notas}
					onAgregar={agregarNota}
					onEliminar={eliminarNota}
				/>
			);
		}
	};

	return (
		<main className={styles.contenedor}>
			<h1>Página de Notas</h1>
			{renderizarContenido()}
		</main>
	);
}
