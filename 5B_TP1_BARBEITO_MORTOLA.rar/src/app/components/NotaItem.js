"use client";

import styles from "@/app/components/NotaItem.module.css";

export default function NotaItem({ nota, indice, onEliminar }) {
	return (
		<li className={styles.item}>
			<p className={styles.nota}>
				Nota N° {indice + 1}: {nota}
			</p>
			<p className={nota >= 6 ? styles.aprueba : styles.noAprueba}>
				{nota >= 6 ? "✅ Aprueba" : "❌ No aprueba"}
			</p>
			<button className={styles.boton} onClick={() => onEliminar(indice)}>
				Eliminar
			</button>
		</li>
	);
}