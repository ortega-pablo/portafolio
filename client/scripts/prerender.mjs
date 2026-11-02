// Writes the rendered page into dist/index.html so the content exists before any JavaScript runs.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const file = new URL('../dist/index.html', import.meta.url)
const template = readFileSync(file, 'utf8')
const slot = '<div id="root"></div>'

if (!template.includes(slot)) {
	throw new Error('dist/index.html has no empty #root to fill')
}

writeFileSync(file, template.replace(slot, `<div id="root">${render()}</div>`))
rmSync(new URL('../dist-ssr', import.meta.url), { recursive: true })
