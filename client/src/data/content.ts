// The PDF in public/cv/ is the default; VITE_CV_URL can point to an external copy instead.
export const cvUrl = import.meta.env.VITE_CV_URL || '/cv/Pablo_Ortega_CV.pdf'

export const links = {
	email: 'p.ortegariera@gmail.com',
	linkedin: 'https://www.linkedin.com/in/ortega-pablo/',
	github: 'https://github.com/ortega-pablo',
}

export const stages = [
	{
		name: 'Descubrir',
		detail: 'relevamiento de requerimientos y plan de trabajo',
	},
	{ name: 'Diseñar', detail: 'arquitectura y decisiones técnicas' },
	{
		name: 'Construir',
		detail: 'interfaz, API y datos con TypeScript y Python',
	},
	{ name: 'Lanzar', detail: 'despliegue en AWS con Docker y GitHub Actions' },
	{
		name: 'Operar y mejorar',
		detail: 'soporte, mantenimiento y mejoras de rendimiento',
	},
]

export const mainCase = {
	title: 'De 17 minutos a 5 segundos',
	body: 'Un servicio de Tu Casa en Cuotas tardaba minutos u horas en responder. En pruebas con datos reales, el peor caso pasó de 17 minutos a 5 segundos, y en producción volvió a un uso normal.',
}

export const cases = [
	{
		title: 'SSO sobre una plataforma que no era mía',
		body: 'Inicio de sesión único para un campus Moodle: Keycloak federado contra el backend de seguridad existente, OIDC en Moodle y un plugin propio que asigna los roles.',
		tags: 'Keycloak, OIDC, Moodle',
	},
	{
		title: 'Un agente que propone, una persona aprueba',
		body: 'POC de automatización de compras: un motor con Claude API interpreta presupuestos en PDF, Excel o Word y propone, y la decisión final siempre es humana. Cada cambio se mide contra 76 ofertas reales.',
		tags: 'Claude API, evaluación, aprobación humana',
	},
	{
		title: 'Software que le habla a un dispositivo',
		body: 'Velos controla un dron acuático por Bluetooth con un ESP32 como intermediario. ASP NFC lee tarjetas por puerto serie desde una app de escritorio.',
		tags: 'Bluetooth, NFC, puerto serie',
	},
]

export type Shot = {
	src: string
	alt: string
}

export type Project = {
	name: string
	status: string
	body: string
	tech: string
	wide?: boolean
	shots: Shot[]
}

export const projects: Project[] = [
	{
		name: 'Price Lenz',
		status: 'Producto propio, en desarrollo',
		body: 'SaaS de price intelligence para consumo masivo en LATAM: captura diaria de precios de góndola digital y mayoristas B2B, con doble control de calidad y dashboards.',
		tech: 'Next.js, FastAPI, Celery, PostgreSQL, Claude API',
		wide: true,
		shots: [
			{
				src: '/img/price-lenz-01.webp',
				alt: 'Price Lenz: evolución de 90 días del precio de un producto en siete cadenas, con los nombres ocultos.',
			},
			{
				src: '/img/price-lenz-02.webp',
				alt: 'Price Lenz: heatmap de 20 productos por 15 cadenas contra el precio sugerido, con los nombres ocultos.',
			},
		],
	},
	{
		name: 'PromoTracking',
		status: 'Para un cliente, en producción',
		body: 'Microservicios sobre AWS que monitorean promociones en cientos de e-commerce y en redes sociales con IA.',
		tech: 'FastAPI, Playwright, Next.js, PostgreSQL',
		shots: [
			{
				src: '/img/promos-01.webp',
				alt: 'Tablero de participación en promociones con barras comparadas por grupo, con marcas y datos ocultos.',
			},
		],
	},
	{
		name: 'Plan Mi Casa',
		status: 'Entregado, en producción',
		body: 'Plataforma de ahorro e inversión inmobiliaria que lideré técnicamente. Gestiona suscriptores, cuentas y planes en dos partes: un panel de administración y un panel de clientes.',
		tech: 'FastAPI, SQLAlchemy, React, AWS',
		shots: [
			{
				src: '/img/ahorro-01.webp',
				alt: 'Tablero de una plataforma de ahorro con contadores de suscriptores y unidades, con los nombres y montos ocultos.',
			},
		],
	},
	{
		name: 'Durrieu',
		status: 'En producción y desarrollo',
		body: 'Plataforma de una casa de comisiones ganadera que lidero técnicamente y desarrollo: Faena e Invernada, comisiones y liquidaciones, con un bot de Telegram y WhatsApp. Sobre AWS.',
		tech: 'Next.js, FastAPI, AWS',
		wide: true,
		shots: [
			{
				src: '/img/ganaderia-01.webp',
				alt: 'Tabla operativa de negocios de faena con lotes, categorías, cabezas y estados, con los nombres ocultos.',
			},
			{
				src: '/img/ganaderia-02.webp',
				alt: 'Reportes con indicadores, filtros y listado de negocios, con los nombres ocultos.',
			},
		],
	},
]

export const otherSystems = [
	{
		name: 'Velos',
		tag: 'Dron acuático por Bluetooth',
		body: 'Control de un dron acuático por Bluetooth, con un ESP32 como intermediario.',
	},
	{
		name: 'Veco',
		tag: 'Dron terrestre',
		body: 'App para tablet que controla un dron terrestre de entrenamiento, con modo sin conexión. Con mi equipo.',
	},
	{
		name: 'Tienda Plastik',
		tag: 'Impresión 3D',
		body: 'Cotización, costeo y stock de un taller de impresión 3D que cofundé, con Next.js, NestJS, Prisma y PostgreSQL.',
	},
	{
		name: 'Vitaance',
		tag: 'Visión por computadora',
		body: 'Monitoreo ergonómico en tiempo real. Con mi equipo.',
	},
	{
		name: 'Campus Moodle',
		tag: 'Identidad',
		body: 'SSO con Keycloak y OIDC sobre una plataforma SaaS educativa de terceros, en Azure. Salió a producción en la fecha comprometida.',
	},
	{
		name: 'Sistemas legacy',
		tag: 'Mantenimiento',
		body: 'Backoffices y CRM en PHP/Laravel y .NET, y un proveedor de identidad. Fui responsable de su mantenimiento entre 2024 y 2026.',
	},
]

export const jobs = [
	{
		date: 'jun. 2023 a hoy',
		company: 'Mecantronic',
		role: 'Full-stack developer y technical leader',
		bullets: [
			'Formé y lideré un equipo de hasta 12 desarrolladores, y hoy coordino uno estable de 6.',
			'Llegué a tener 9 sistemas productivos a cargo al mismo tiempo.',
			'Lideré Plan Mi Casa, entregada y en producción sobre AWS (EC2, RDS, ALB).',
			'Lidero y desarrollo Durrieu, en producción sobre AWS desde mayo de 2026.',
			'Lideré la integración de un campus Moodle con SSO, con un servicio en NestJS.',
		],
	},
	{
		date: '2022 a hoy',
		company: 'Freelance',
		role: 'Full-stack developer',
		bullets: [
			'Desarrollo Price Lenz, mi SaaS de price intelligence, con arquitectura de punta a punta.',
			'Desarrollo PromoTracking para un cliente, en producción sobre AWS.',
			'Hago sistemas de gestión a medida para pequeños negocios.',
		],
	},
	{
		date: 'feb. 2020 a hoy',
		company: 'Tienda Plastik',
		role: 'Cofundador',
		bullets: [
			'Cofundé un emprendimiento de modelado e impresión 3D.',
			'Desarrollé y mantengo su sistema de cotización, costeo y stock.',
		],
	},
]

export const stackNote =
	'JavaScript y TypeScript son mi lenguaje principal, y Python el segundo.'

export const strata = [
	{ title: 'Lenguajes', items: 'TypeScript, JavaScript, Python, SQL' },
	{
		title: 'Interfaz',
		items:
			'React, Next.js, Tailwind CSS, TanStack Query/Table, shadcn/ui, Electron',
	},
	{
		title: 'Backend',
		items: 'Node.js, NestJS, Express, FastAPI, Celery, OAuth2/OIDC, JWT',
	},
	{
		title: 'IA y dispositivos',
		items:
			'Claude API en producción, visión por computadora, NFC, serie, Bluetooth, ESP32',
	},
	{
		title: 'Datos e infra',
		items:
			'PostgreSQL, Redis, SQLAlchemy, AWS (EC2, S3, RDS, ECR, IAM), Docker, GitHub Actions',
	},
]

export const alsoWorked =
	'También trabajé con C#/.NET, PHP/Laravel, Vue, Redux, Material UI, React Native, MySQL, SQL Server, MongoDB, Prisma, TypeORM, Azure, Cloudflare, Keycloak, Firebase, Playwright, Vitest, Jest y pytest.'

export const education = [
	{
		name: 'Administración de Empresas',
		school: 'Coderhouse, curso de 4 semanas',
		date: '2026',
	},
	{
		name: 'Diplomatura en Competencias Gerenciales, Inteligencia Emocional y Liderazgo Ágil',
		school: 'Universidad de Belgrano',
		date: '2025',
	},
	{
		name: 'Desarrollo Full Stack',
		school: 'Bootcamp Soy Henry',
		date: '2022',
	},
	{
		name: 'Ingeniería en Mecatrónica',
		school: 'Universidad Nacional de Cuyo, cursada parcial',
		date: '2015 a 2021',
	},
]

export const languages =
	'Español nativo. Inglés intermedio (B1), con lectura técnica fluida.'
