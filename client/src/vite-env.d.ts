/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CV_URL?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
