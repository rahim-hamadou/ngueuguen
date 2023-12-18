"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className=" footer_container bg-sky-800 hover:bg-sky-700  text-center  lg:text-left">
			<div className="footer_contain">
				<ul className={styles.footer_list}>
					<li className={styles.footer_list_item}>
						<a className="hover:text-white" href="/">
							NGUEUGUEN MERE & FILS
						</a>
					</li>
					<li className={styles.footer_list_item}>
						<a className="hover:text-white" href="/activity">
							Mon activité
						</a>
					</li>
					<li className={styles.footer_list_item}>
						<a className="hover:text-white" href="/contact">
							Me joindre
						</a>
					</li>
				</ul>
			</div>
			<div className="p-1 text-sm text-center text-neutral-800 dark:text-neutral-900">
				© 2023 Copyright :{" "}
				<a
					className=" hover:text-white text-neutral-900 dark:text-neutral-900"
					href="https://rahim-hamadou.netlify.app/"
				>
					Rahim HAMADOU
				</a>
			</div>
		</footer>
	);
}
