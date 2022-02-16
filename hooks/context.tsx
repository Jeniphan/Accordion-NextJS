import React, { FC } from 'react'
import { Theme } from '@helper/types'
import data from 'data'

interface SharedState {
	theme: Theme
	setTheme?: (value: Theme) => void
}

interface DataSharing {
	id: number
	title: string
	description: string
}

const defaultState: SharedState = {
	theme: 'light',
}

const AppContext = React.createContext(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const [content, setContent] = React.useState(data)

	const sharedState: SharedState = { theme, setTheme }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => React.useContext<SharedState>(AppContext)
