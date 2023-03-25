import React, { useState } from 'react'
import { Provider } from './provider'

export const ProviderContext = props => {
	const [color, getColor] = useState('light')

	const Dark = () => {
		getColor('dark')
	}

	const Light = () => {
		getColor('light')
	}

	const Hook = () => {
		return {
			color,
			Dark,
			Light,
		}
	}

	return (
		<Provider.Provider value={Hook()}>
			{props.children}
		</Provider.Provider>
	)
}
