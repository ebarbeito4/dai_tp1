"use client";

import NotaInput from "@/app/components/NotaInput";
import NotaItem from "@/app/components/NotaItem";
import styles from "@/app/components/ListaNotas.module.css";

export default function ListaNotas({ notas, onAgregar, onEliminar }) {
	const items = [];
	for (let i = 0; i < notas.length; i++) {
		items.push(
			<NotaItem
				key={i}
				nota={notas[i]}
				indice={i}
				onEliminar={onEliminar}
			/>
		);
	}

	let suma = 0;
	for (let i = 0; i < notas.length; i++) {
		suma += notas[i];
	}

	const promedio = notas.length > 0 ? suma / notas.length : 0;

	return (
		<div className={styles.lista}>
			<NotaInput onAgregar={onAgregar} />
			<p className={styles.promedio}>Promedio: {promedio}</p>
			{notas.length === 0 ? (
				<p className={styles.vacio}>No hay notas cargadas.</p>
			) : (
				<ul className={styles.items}>{items}</ul>
			)}
		</div>
	);
}
