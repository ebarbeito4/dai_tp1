"use client";

import { useEffect, useState } from "react";
import ListaNotas from "@/app/components/ListaNotas";
import styles from "./Notas.module.css";

export default function NotasPage() {
	const [notas, setNotas] = useState([8, 5, 10]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		const temporizador = setTimeout(() => {
			setCargando(false);
		}, 2000);

		return () => clearTimeout(temporizador);
	}, []);

	useEffect(() => {
		document.title = `Pio Promedios - ${notas.length} notas`;
	}, [notas]);

	const agregarNota = (nota) => {
		const copia = [];
		notas.forEach((n) => copia.push(n));
		copia.push(nota);
		setNotas(copia);
	};

	const eliminarNota = (indice) => {
		const copia = [];
		notas.forEach((n, i) => {
			if (i !== indice) copia.push(n);
		});
		setNotas(copia);
	};

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
