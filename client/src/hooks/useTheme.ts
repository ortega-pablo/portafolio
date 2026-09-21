import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'pablo-portfolio-theme'

function getStored(): Theme | null {
	try {
		const v = localStorage.getItem(STORAGE_KEY)
		return v === 'dark' || v === 'light' ? v : null
	} catch {
		return null
	}
}

function setStored(v: Theme) {
	try {
		localStorage.setItem(STORAGE_KEY, v)
	} catch {
		// ignore — per-viewer convenience only
	}
}

function systemPrefersDark(): boolean {
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export function useTheme() {
	const [explicit, setExplicit] = useState<Theme | null>(() => getStored())
	const isDark = explicit ? explicit === 'dark' : systemPrefersDark()

	useEffect(() => {
		const root = document.documentElement
		if (explicit) root.setAttribute('data-theme', explicit)
		else root.removeAttribute('data-theme')
	}, [explicit])

	const toggle = useCallback(() => {
		setExplicit(prev => {
			const currentIsDark = prev ? prev === 'dark' : systemPrefersDark()
			const next: Theme = currentIsDark ? 'light' : 'dark'
			setStored(next)
			return next
		})
	}, [])

	return { isDark, toggle }
}
