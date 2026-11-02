import {
	AdditiveBlending,
	BufferAttribute,
	BufferGeometry,
	CanvasTexture,
	CatmullRomCurve3,
	Color,
	ColorManagement,
	ConeGeometry,
	DirectionalLight,
	EdgesGeometry,
	ExtrudeGeometry,
	Group,
	HemisphereLight,
	Line,
	LineBasicMaterial,
	LineSegments,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Path,
	PerspectiveCamera,
	PlaneGeometry,
	PointLight,
	Scene,
	Shape,
	SphereGeometry,
	Sprite,
	SpriteMaterial,
	SRGBColorSpace,
	TubeGeometry,
	Vector3,
	WebGLRenderer,
} from 'three'

// The palette values are used as they are, like in the approved design.
ColorManagement.enabled = false

export type StackOptions = {
	canvas: HTMLCanvasElement
	host: HTMLElement
	hero: HTMLElement
	rows: HTMLElement
	note: HTMLElement
	names: string[]
	compact: MediaQueryList
}

export type StackHandle = {
	setLayers: () => void
	focus: (stage: number | null) => void
	setPaused: (paused: boolean) => void
	dispose: () => void
}

type Art = (x: CanvasRenderingContext2D) => void

type Slab = {
	mesh: Mesh<ExtrudeGeometry, MeshStandardMaterial>
	line: LineSegments<EdgesGeometry, LineBasicMaterial>
	face: Mesh<PlaneGeometry, MeshBasicMaterial>
	color: Color
}

function box(
	x: CanvasRenderingContext2D,
	l: number,
	t: number,
	w: number,
	h: number,
	r: number
) {
	x.beginPath()
	x.moveTo(l + r, t)
	x.arcTo(l + w, t, l + w, t + h, r)
	x.arcTo(l + w, t + h, l, t + h, r)
	x.arcTo(l, t + h, l, t, r)
	x.arcTo(l, t, l + w, t, r)
	x.closePath()
	x.stroke()
}

function bars(x: CanvasRenderingContext2D, list: number[][]) {
	list.forEach(([from, y, to]) => {
		x.beginPath()
		x.moveTo(from, y)
		x.lineTo(to, y)
		x.stroke()
	})
}

// Miniature of each stage, in the part of the plate that stays visible.
const stageArt: Art[] = [
	// Descubrir: requirement cards
	x => {
		box(x, 0, 44, 140, 190, 16)
		bars(x, [
			[28, 96, 112],
			[28, 140, 112],
			[28, 184, 84],
		])
		box(x, 172, 0, 140, 190, 16)
		bars(x, [
			[200, 52, 284],
			[200, 96, 284],
		])
		x.beginPath()
		x.moveTo(204, 142)
		x.lineTo(232, 166)
		x.lineTo(280, 122)
		x.stroke()
	},
	// Diseñar: box diagram
	x => {
		box(x, 0, 90, 104, 74, 12)
		box(x, 216, 0, 104, 74, 12)
		box(x, 216, 180, 104, 74, 12)
		x.beginPath()
		x.moveTo(104, 127)
		x.lineTo(160, 127)
		x.moveTo(160, 37)
		x.lineTo(160, 217)
		x.moveTo(160, 37)
		x.lineTo(216, 37)
		x.moveTo(160, 217)
		x.lineTo(216, 217)
		x.stroke()
	},
	// Construir: lines of code
	x => {
		x.lineWidth = 15
		bars(x, [
			[0, 8, 130],
			[44, 58, 270],
			[44, 108, 196],
			[88, 158, 300],
			[44, 208, 150],
			[0, 258, 70],
		])
	},
	// Lanzar: containers going up
	x => {
		;[0, 116, 232].forEach(l => {
			box(x, l, 138, 92, 92, 10)
			bars(x, [[l + 24, 184, l + 68]])
		})
		x.beginPath()
		x.moveTo(162, 104)
		x.lineTo(162, 8)
		x.moveTo(126, 44)
		x.lineTo(162, 8)
		x.lineTo(198, 44)
		x.stroke()
	},
	// Operar y mejorar: a curve in production
	x => {
		x.beginPath()
		x.moveTo(0, 0)
		x.lineTo(0, 244)
		x.lineTo(324, 244)
		x.stroke()
		x.beginPath()
		x.moveTo(26, 196)
		x.lineTo(86, 150)
		x.lineTo(138, 174)
		x.lineTo(196, 92)
		x.lineTo(246, 116)
		x.lineTo(302, 34)
		x.stroke()
		x.beginPath()
		x.arc(302, 34, 15, 0, Math.PI * 2)
		x.fill()
	},
]

function plateShape(width: number, radius: number, hole: number) {
	const s = new Shape()
	const h = width / 2
	const r = radius
	s.moveTo(-h + r, -h)
	s.lineTo(h - r, -h)
	s.absarc(h - r, -h + r, r, -Math.PI / 2, 0, false)
	s.lineTo(h, h - r)
	s.absarc(h - r, h - r, r, 0, Math.PI / 2, false)
	s.lineTo(-h + r, h)
	s.absarc(-h + r, h - r, r, Math.PI / 2, Math.PI, false)
	s.lineTo(-h, -h + r)
	s.absarc(-h + r, -h + r, r, Math.PI, Math.PI * 1.5, false)
	const c = new Path()
	c.absarc(0, 0, hole, 0, Math.PI * 2, true)
	s.holes.push(c)
	return s
}

export function createStack(options: StackOptions): StackHandle | null {
	const { canvas, host, hero, rows, note, names, compact } = options
	const css = getComputedStyle(document.documentElement)
	const ramp = ['--l1', '--l2', '--l3', '--l4', '--l5'].map(k =>
		css.getPropertyValue(k).trim()
	)

	function stageFace(i: number) {
		const c = document.createElement('canvas')
		c.width = c.height = 1024
		const x = c.getContext('2d')!
		const color = new Color(ramp[i]).lerp(new Color('#ffffff'), 0.32).getStyle()
		x.save()
		x.translate(700, 660)
		x.scale(0.9, 0.9)
		x.strokeStyle = color
		x.fillStyle = color
		x.lineWidth = 9
		x.lineCap = 'round'
		x.lineJoin = 'round'
		stageArt[i](x)
		x.restore()
		const numbers = compact.matches
		const text = numbers ? String(i + 1) : names[i]
		let size = numbers ? 170 : 80
		x.font = `expanded 800 ${size}px Anybody, "Arial Black", sans-serif`
		const width = x.measureText(text).width
		if (width > 860) {
			size = Math.floor((size * 860) / width)
			x.font = `expanded 800 ${size}px Anybody, "Arial Black", sans-serif`
		}
		x.lineJoin = 'round'
		x.lineWidth = 12
		x.strokeStyle = 'rgba(8,38,31,.72)'
		const labelX = numbers ? 330 : 78
		const labelY = numbers ? 985 : 950
		x.strokeText(text, labelX, labelY)
		x.fillStyle = '#f2f8f4'
		x.fillText(text, labelX, labelY)
		const t = new CanvasTexture(c)
		t.colorSpace = SRGBColorSpace
		t.anisotropy = 8
		return t
	}

	let renderer: WebGLRenderer
	try {
		renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true })
	} catch {
		return null
	}
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

	const scene = new Scene()
	const camera = new PerspectiveCamera(30, 1, 0.1, 100)
	const root = new Group()
	root.rotation.y = -Math.PI / 4
	root.position.x = 0.27
	scene.add(root)
	scene.add(new HemisphereLight(0xa8e8d0, 0x06120e, 0.3 * Math.PI))
	const key = new DirectionalLight(0xffffff, 0.34 * Math.PI)
	key.position.set(-6, 10, 6)
	scene.add(key)
	const pulseLight = new PointLight(0xffa24d, 1.6, 9, 1.8)
	root.add(pulseLight)

	const W = 5.4
	const T = 0.36
	const geo = new ExtrudeGeometry(plateShape(W, 0.32, 0.34), {
		depth: T,
		bevelEnabled: true,
		bevelThickness: 0.04,
		bevelSize: 0.04,
		bevelSegments: 2,
		curveSegments: 24,
	})
	geo.rotateX(Math.PI / 2)
	geo.center()
	const edges = new EdgesGeometry(geo, 28)

	let slabs: Slab[] = []
	let gap = 3.2
	let gapTarget = 1.42

	function clearSlabs() {
		slabs.forEach(s => {
			root.remove(s.mesh)
			s.mesh.material.dispose()
			s.line.material.dispose()
			s.face.material.map?.dispose()
			s.face.material.dispose()
			s.face.geometry.dispose()
		})
		slabs = []
	}

	function setLayers() {
		clearSlabs()
		names.forEach((_, i) => {
			const c = new Color(ramp[i])
			const body = c.clone().lerp(new Color('#0a1c18'), 0.9)
			const mesh = new Mesh(
				geo,
				new MeshStandardMaterial({
					color: body,
					roughness: 0.5,
					metalness: 0.35,
					emissive: c,
					emissiveIntensity: 0.03,
				})
			)
			const line = new LineSegments(
				edges,
				new LineBasicMaterial({ color: c, transparent: true, opacity: 0.42 })
			)
			mesh.add(line)
			const face = new Mesh(
				new PlaneGeometry(W, W),
				new MeshBasicMaterial({
					map: stageFace(i),
					transparent: true,
					opacity: 0.88,
					depthWrite: false,
					toneMapped: false,
				})
			)
			face.rotation.x = -Math.PI / 2
			face.position.y = T / 2 + 0.05
			mesh.add(face)
			root.add(mesh)
			slabs.push({ mesh, line, face, color: c })
		})
		touch()
	}

	const dot = new Mesh(
		new SphereGeometry(0.13, 24, 16),
		new MeshBasicMaterial({ color: 0xffffff, toneMapped: false })
	)
	root.add(dot)
	const haloC = document.createElement('canvas')
	haloC.width = haloC.height = 128
	const hc = haloC.getContext('2d')!
	const grd = hc.createRadialGradient(64, 64, 2, 64, 64, 64)
	grd.addColorStop(0, 'rgba(255,255,255,1)')
	grd.addColorStop(0.25, 'rgba(255,255,255,.35)')
	grd.addColorStop(1, 'rgba(255,255,255,0)')
	hc.fillStyle = grd
	hc.fillRect(0, 0, 128, 128)
	const haloTexture = new CanvasTexture(haloC)
	const halo = new Sprite(
		new SpriteMaterial({
			map: haloTexture,
			blending: AdditiveBlending,
			depthWrite: false,
			depthTest: false,
			transparent: true,
			opacity: 0.7,
		})
	)
	halo.scale.set(1.1, 1.1, 1)
	root.add(halo)

	// The way back: leaves the last stage, goes around and returns to the first.
	// It is rebuilt when the spacing changes so the tube does not deform.
	const side = new Vector3(-0.7071, 0, 0.7071)
	const RETURN_R = 4.25
	const sidePoint = (r: number, y: number) =>
		side.clone().multiplyScalar(r).setY(y)
	let returnCurve: CatmullRomCurve3 | null = null
	let builtH = 0
	const cold = new Color(ramp[4])
	const warm = new Color(ramp[0])
	const mixed = new Color()
	const tubeMesh = new Mesh<BufferGeometry, MeshBasicMaterial>(
		new BufferGeometry(),
		new MeshBasicMaterial({
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			toneMapped: false,
		})
	)
	const axisLine = new Line<BufferGeometry, LineBasicMaterial>(
		new BufferGeometry(),
		new LineBasicMaterial({ color: ramp[3], transparent: true, opacity: 0.35 })
	)
	root.add(tubeMesh)
	root.add(axisLine)

	function buildCycle(H: number) {
		if (Math.abs(H - builtH) < 0.03) return
		builtH = H
		returnCurve = new CatmullRomCurve3([
			new Vector3(0, -H, 0),
			sidePoint(2.5, -H - 0.2),
			sidePoint(RETURN_R, 0),
			sidePoint(2.5, H + 0.2),
			new Vector3(0, H, 0),
		])
		const tube = new TubeGeometry(returnCurve, 96, 0.04, 8, false)
		const pos = tube.attributes.position
		const colors = new Float32Array(pos.count * 3)
		for (let v = 0; v < pos.count; v++) {
			mixed
				.copy(cold)
				.lerp(warm, Math.min(1, Math.max(0, (pos.getY(v) + H) / (2 * H))))
			colors[v * 3] = mixed.r
			colors[v * 3 + 1] = mixed.g
			colors[v * 3 + 2] = mixed.b
		}
		tube.setAttribute('color', new BufferAttribute(colors, 3))
		tubeMesh.geometry.dispose()
		tubeMesh.geometry = tube
		axisLine.geometry.dispose()
		axisLine.geometry = new BufferGeometry().setFromPoints([
			new Vector3(0, H, 0),
			new Vector3(0, -H, 0),
		])
	}

	const arrow = new Mesh(
		new ConeGeometry(0.17, 0.42, 20),
		new MeshBasicMaterial({ color: ramp[2], toneMapped: false })
	)
	arrow.position.copy(sidePoint(RETURN_R, 0))
	root.add(arrow)
	const white = new Color('#ffffff')
	const glow = new Color()

	// The camera frames the stack by width and height, so it never covers the text.
	const FIT_W = 8.9
	const FIT_H = 9.7
	const SPAN = 2 * Math.tan((15 * Math.PI) / 180)
	const EL = (24 * Math.PI) / 180

	function resize() {
		const w = host.clientWidth
		const h = host.clientHeight
		if (!w || !h) return
		gapTarget = compact.matches ? 1.3 : 1.42
		renderer.setSize(w, h, false)
		camera.aspect = w / h
		const dist = Math.max(FIT_H / SPAN, FIT_W / (SPAN * camera.aspect))
		camera.position.set(0, Math.sin(EL) * dist, Math.cos(EL) * dist)
		camera.lookAt(0, -0.25, 0)
		camera.updateProjectionMatrix()
		touch()
	}

	let mx = 0
	let my = 0
	let running = false
	let visible = true
	let paused = false
	let raf = 0
	let lastT = 0
	let clock = 0
	let focused: number | null = null

	function touch() {
		if (!running) draw(performance.now())
	}

	function draw(now: number) {
		const t = now / 1000
		if (!slabs.length) return
		const dt = paused ? 0 : Math.min(0.1, Math.max(0, t - lastT))
		lastT = t
		clock += dt
		gap += (gapTarget - gap) * (1 - Math.exp(-dt * 3.4))
		const scroll = hero.getBoundingClientRect()
		const progress = Math.max(
			0,
			Math.min(1, -scroll.top / Math.max(1, scroll.height))
		)
		const g = gap * (1 - 0.72 * progress)
		const top = ((slabs.length - 1) * g) / 2
		const H = top + 0.85
		buildCycle(H)
		// It goes down stage by stage, pausing on each plate, and returns around the outside.
		const period = 10
		const down = 0.66
		const ph = (clock % period) / period
		const returning = ph >= down
		let px = 0
		let py = 0
		let pz = 0
		if (returning && returnCurve) {
			const back = returnCurve.getPoint((ph - down) / (1 - down))
			px = back.x
			py = back.y
			pz = back.z
			glow.copy(cold).lerp(warm, Math.min(1, Math.max(0, (py + H) / (2 * H))))
		} else {
			const stops = [H, ...slabs.map((_, i) => top - i * g), -H]
			const s = (ph / down) * (stops.length - 1)
			const k = Math.floor(s)
			let f = s - k
			f = f * f * (3 - 2 * f)
			py = stops[k] + (stops[k + 1] - stops[k]) * f
			const nearest = Math.round((top - py) / Math.max(g, 0.01))
			glow.copy(slabs[Math.max(0, Math.min(slabs.length - 1, nearest))].color)
		}
		dot.position.set(px, py, pz)
		halo.position.set(px, py, pz)
		pulseLight.position.set(px, py, pz)
		dot.material.color.copy(glow).lerp(white, 0.45)
		halo.material.color.copy(glow)
		pulseLight.color.copy(glow)
		slabs.forEach((s, i) => {
			const sy = top - i * g
			s.mesh.position.y = sy
			const near = returning ? 0 : Math.exp(-Math.pow((py - sy) * 1.7, 2))
			const lit = focused === null ? near : focused === i ? 1 : 0
			// The active stage lights up through its edge, label and miniature: the body stays dark so they read.
			s.mesh.material.emissiveIntensity = 0.03 + lit * 0.12
			s.line.material.opacity = 0.42 + lit * 0.58
			s.face.material.opacity = 0.88 + lit * 0.12
			rows.children[i]?.classList.toggle('hit', lit > 0.45)
		})
		note.classList.toggle('on', returning && focused === null)
		root.rotation.y =
			-Math.PI / 4 + Math.sin(clock * 0.22) * 0.1 + mx * 0.1 + progress * 0.5
		root.rotation.x = my * 0.04
		renderer.render(scene, camera)
	}

	function loop(now: number) {
		raf = 0
		if (!visible || document.hidden || paused) {
			running = false
			return
		}
		draw(now)
		raf = requestAnimationFrame(loop)
	}

	function start() {
		if (!running && !paused) {
			running = true
			raf = requestAnimationFrame(loop)
		}
	}

	const onVisibility = () => {
		if (!document.hidden) start()
	}
	const onMouse = (e: MouseEvent) => {
		const r = hero.getBoundingClientRect()
		mx = (e.clientX - r.left) / r.width - 0.5
		my = (e.clientY - r.top) / r.height - 0.5
	}
	const onCompact = () => {
		setLayers()
		resize()
	}
	const heroObserver = new IntersectionObserver(entries => {
		visible = entries[0].isIntersecting
		if (visible) start()
	})
	const sizeObserver = new ResizeObserver(resize)

	heroObserver.observe(hero)
	sizeObserver.observe(host)
	document.addEventListener('visibilitychange', onVisibility)
	hero.addEventListener('mousemove', onMouse)
	compact.addEventListener('change', onCompact)
	resize()
	start()

	return {
		setLayers,
		focus(stage) {
			focused = stage
			touch()
		},
		setPaused(value) {
			paused = value
			note.classList.remove('on')
			start()
		},
		dispose() {
			if (raf) cancelAnimationFrame(raf)
			running = false
			heroObserver.disconnect()
			sizeObserver.disconnect()
			document.removeEventListener('visibilitychange', onVisibility)
			hero.removeEventListener('mousemove', onMouse)
			compact.removeEventListener('change', onCompact)
			clearSlabs()
			geo.dispose()
			edges.dispose()
			haloTexture.dispose()
			tubeMesh.geometry.dispose()
			axisLine.geometry.dispose()
			renderer.dispose()
		},
	}
}
