"use client";

import styles from "@/app/components/NotaItem.module.css";

export default function NotaItem({ nota, indice, onEliminar }) {
	return (
		<li className={styles.item}>
			{/* Muestra la nota con su posición dentro de la lista. */}
			<p className={styles.nota}>
				Nota N° {indice + 1}: {nota}
			</p>
			{/* Evalúa si la nota aprueba o no según el valor 6. */}
			<p className={nota >= 6 ? styles.aprueba : styles.noAprueba}>
				{nota >= 6 ? "✅ Aprueba" : "❌ No aprueba"}
			</p>
			{/* Botón para eliminar esta nota de la lista. */}
			<button className={styles.boton} onClick={() => onEliminar(indice)}>
				Eliminar
			</button>
		</li>
	);
}