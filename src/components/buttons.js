import { useContext } from 'react'
import { Provider } from './provider'
import Moon from "../images/moon.svg";
import Sun from "../images/sun.svg";

export const Buttons = () => {
	const changeTheme = useContext(Provider)

	const Dark = () => {
		changeTheme.Dark()
	}

	const Light = () => {
		changeTheme.Light()
	}
	return (
		<header className='header'>
			<button className={changeTheme.color === "light" ? "light" : "dark"} id='moon' onClick={Dark}>
			<img src={Moon} alt="Your SVG" />
			</button>
			<button className={changeTheme.color === "dark" ? "light" : "dark"} id='sun' onClick={Light}>
			<img src={Sun} alt="Your SVG" />
			</button>
		</header>
	)
}