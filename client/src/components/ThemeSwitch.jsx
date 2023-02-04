
import { useEffect, useState } from "react";
function ThemeSwitch() {
	const [theme, storeTheme] = useState(localStorage.getItem('theme'));
	const html = document.querySelector("html");
	const change = () => {
		var currentTheme = html.getAttribute("data-theme");
		var targetTheme = "light";

		if (currentTheme === "light") {
			targetTheme = "dark";
		}

		html.setAttribute('data-theme', targetTheme)
		localStorage.setItem('theme', targetTheme);
		storeTheme(targetTheme)
	}


	useEffect(() => {
		var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		storedTheme = storedTheme ? storedTheme : 'light';
		html.setAttribute('data-theme', storedTheme)
		storeTheme(storedTheme);
	}, [])
	return (
		<div className="inline--block pointer btn btn-transparent" title="Switch theme">
			{ theme == 'light' &&
				<div onClick={() => change()}>
					<span className="material-icons">
						dark_mode
					</span>
				</div>
			}
			{ theme == 'dark' &&
				<div onClick={() => change()}>
					<span className="material-icons text--warning">
						light_mode
					</span>
				</div>
			}
		</div>
	);
}

export default ThemeSwitch;
