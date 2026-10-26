export const stats = [
	{ value: 3, suffix: '+', label: 'AÑOS LIDERANDO IT' },
	{ value: 6, suffix: '', label: 'PERSONAS EN EL EQUIPO HOY' },
	{ value: 9, suffix: '', label: 'SISTEMAS PRODUCTIVOS A LA VEZ' },
	{ value: 6, suffix: '+', label: 'AÑOS COMO COFUNDADOR' },
]

export const proofPoints = [
	{
		eyebrow: 'LIDERAZGO',
		title: 'Equipos de hasta 12 personas',
		body: 'Formación, coordinación y evaluación de desarrolladores que trabajan en paralelo sobre productos distintos.',
	},
	{
		eyebrow: 'PRODUCCIÓN',
		title: 'Hasta nueve sistemas a cargo',
		body: 'Productos web, identidad, backoffices, CRM y cloud — algunos con aplicaciones que se comunican con dispositivos físicos.',
	},
	{
		eyebrow: 'EJECUCIÓN',
		title: 'De 17 minutos a 5 segundos',
		body: 'Remediación de performance en un servicio productivo crítico de Tu Casa en Cuotas, medida en pruebas con datos reales.',
	},
]

export const pipelineSteps = [
	{
		num: '01',
		title: 'Next.js + TypeScript',
		detail: 'interfaz, dashboards y control de acceso',
	},
	{
		num: '02',
		title: 'FastAPI',
		detail: 'API y validación de datos de relevamiento',
	},
	{
		num: '03',
		title: 'Celery + Redis',
		detail: 'cola de tareas para la recolección continua',
	},
	{
		num: '04',
		title: 'PostgreSQL particionado',
		detail: 'histórico de precios que no se degrada',
	},
	{
		num: '05',
		title: 'Claude API',
		detail: 'clasificación y extracción sobre texto no estructurado',
	},
]

export const solveCards = [
	{
		eyebrow: 'IDENTIDAD',
		title: 'SSO sobre una plataforma que no era mía',
		body: 'Inicio de sesión único para un campus Moodle: Keycloak federado contra el backend de seguridad que ya existía y OIDC en Moodle, con un plugin propio que asigna los roles. Salió a producción en la fecha comprometida.',
		tags: 'Keycloak · OIDC · Moodle',
	},
	{
		eyebrow: 'PERFORMANCE',
		title: 'De 17 minutos a 5 segundos',
		body: 'Remediación de performance en Tu Casa en Cuotas, un servicio productivo que tardaba minutos u horas en responder: en pruebas con datos reales, el peor caso pasó de 17 minutos a 5 segundos, y en producción volvió a un uso normal.',
		tags: 'Diagnóstico · optimización · producción',
	},
	{
		eyebrow: 'CONECTIVIDAD',
		title: 'Hablarle a un dispositivo desde el código',
		body: 'Dos proyectos distintos, no uno: Velos, en solitario, controla un dron acuático por Bluetooth con un ESP32 como intermediario. Aparte, con el equipo de Incluit, ASP NFC lee tarjetas por puerto serie desde una app de escritorio. En los dos casos, del lado del software — no trabajo el hardware físico.',
		tags: 'Bluetooth · NFC · puerto serie',
	},
	{
		eyebrow: 'IA APLICADA',
		title: 'Un agente que propone, una persona aprueba',
		body: 'POC de automatización de compras y licitaciones: un motor de IA interpreta presupuestos de proveedores en PDF, Excel o Word y propone; la decisión final siempre es humana. Cada cambio se mide contra un set de 76 ofertas reales.',
		tags: 'Claude API · PDF/Excel · aprobación humana',
	},
]

export type TimelineItem = {
	date: string
	company: string
	role: string
	bullets: string[]
}

export const timeline: TimelineItem[] = [
	{
		date: 'JUN. 2023 — PRESENTE',
		company: 'Mecantronic',
		role: 'Full-stack Developer & Technical Leader',
		bullets: [
			'Formé y lideré un equipo de hasta 12 desarrolladores (staffing con Incluit); hoy coordino un equipo estable de 6.',
			'Lideré el desarrollo de Plan Mi Casa, una plataforma de ahorro e inversión inmobiliaria, entregada y en producción sobre AWS.',
			'Lideré técnicamente, junto a Consensus, la integración de un campus Moodle con SSO (Keycloak, OIDC) sobre una plataforma SaaS educativa de terceros; salió a producción en la fecha comprometida.',
			'Lidero técnicamente y desarrollo Durrieu, la plataforma de una casa de comisiones ganadera: en producción sobre AWS y en desarrollo continuo, con un bot de Telegram y WhatsApp que da de alta pedidos conversando.',
			'Entre 2024 y 2026 fui responsable único del mantenimiento de los sistemas legacy de Grupo ZAG, incluido su proveedor de identidad, y resolví una lentitud severa en Tu Casa en Cuotas: el peor caso pasó de 17 minutos a 5 segundos en pruebas con datos reales.',
			'Co-lidero técnicamente un POC de automatización de compras con IA (Claude API), con aprobación humana obligatoria.',
			'Desarrollé, junto al equipo formado por Incluit, aplicaciones que se comunican con dispositivos por Bluetooth, NFC y puerto serie (Veco, Vitaance, ASP NFC); y en solitario, Velos, control de un dron acuático por Bluetooth.',
			'Diseñé el challenge técnico y el protocolo de evaluación con el que incorporamos a un desarrollador, y construí el marketplace interno de Claude Code del equipo.',
		],
	},
	{
		date: 'FEB. 2020 — PRESENTE',
		company: 'Tienda Plastik',
		role: 'Cofundador',
		bullets: [
			'Cofundé, junto a mi socia, un emprendimiento de modelado e impresión 3D.',
			'Desarrollé y mantengo en solitario su sistema de cotización, costeo y control de stock.',
		],
	},
	{
		date: '2022 — PRESENTE',
		company: 'Freelance independiente',
		role: 'Full Stack Developer',
		bullets: [
			'Construyo Price Lenz, mi propio SaaS de price intelligence para consumo masivo en LATAM, todavía en desarrollo.',
			'Desarrollo para un cliente PromoTracking, que monitorea promociones en e-commerce y redes sociales con IA, en producción sobre AWS.',
		],
	},
]

export type Project = {
	name: string
	status: 'dev' | 'live' | 'done'
	statusLabel: string
	body: string
	chips: string[]
}

export const projects: Project[] = [
	{
		name: 'Price Lenz',
		status: 'dev',
		statusLabel: 'EN DESARROLLO',
		body: 'SaaS de price intelligence: captura diaria de precios de góndola digital y mayoristas B2B para la industria de consumo masivo en LATAM, con doble control de calidad y dashboards.',
		chips: ['Next.js', 'FastAPI', 'Celery', 'PostgreSQL', 'Claude API'],
	},
	{
		name: 'PromoTracking',
		status: 'live',
		statusLabel: 'EN PRODUCCIÓN',
		body: 'Desarrollado para un cliente: microservicios en producción sobre AWS que monitorean y analizan promociones en cientos de e-commerce y en redes sociales con IA, más el dashboard para el cliente final.',
		chips: ['FastAPI', 'Playwright', 'Next.js', 'PostgreSQL'],
	},
	{
		name: 'Plan Mi Casa',
		status: 'live',
		statusLabel: 'ENTREGADO · EN PRODUCCIÓN',
		body: 'Plataforma de ahorro e inversión inmobiliaria que lideré técnicamente: gestión de suscriptores, cuentas y planes, entregada y en producción.',
		chips: ['FastAPI', 'SQLAlchemy', 'React', 'AWS'],
	},
]

export type SystemCard = {
	name: string
	tag?: string
	body: string
}

export const systems: SystemCard[] = [
	{
		name: 'Campus Moodle',
		tag: 'ENTREGADO · EN PRODUCCIÓN',
		body: 'Integración con SSO (Keycloak, OIDC) sobre una plataforma SaaS educativa de terceros, en Azure. Salió a producción en la fecha comprometida.',
	},
	{
		name: 'Durrieu',
		tag: 'EN PRODUCCIÓN Y DESARROLLO',
		body: 'Plataforma de una casa de comisiones ganadera que lidero técnicamente y desarrollo: Faena e Invernada, comisiones y liquidaciones, con un bot de Telegram y WhatsApp. Sobre AWS.',
	},
	{
		name: 'Grupo ZAG',
		body: 'Backoffices y CRM en PHP/Laravel y .NET — fui responsable único de su mantenimiento y soporte entre 2024 y 2026.',
	},
	{
		name: 'Tienda Plastik',
		tag: 'CÓDIGO PRIVADO',
		body: 'Sistema propio de cotización, costeo y stock que sostiene la operación de un taller de impresión 3D que cofundé.',
	},
	{
		name: 'Veco',
		tag: 'CON EQUIPO INCLUIT',
		body: 'App para tablet que controla un dron terrestre de entrenamiento, con modo sin conexión.',
	},
	{
		name: 'Vitaance',
		tag: 'CON EQUIPO INCLUIT',
		body: 'Visión por computadora para monitoreo ergonómico en tiempo real.',
	},
]

export type StackGroup = {
	title: string
	chips: { label: string; core?: boolean }[]
}

export const stackGroups: StackGroup[] = [
	{
		title: 'Lenguajes',
		chips: [
			{ label: 'TypeScript', core: true },
			{ label: 'Python', core: true },
			{ label: 'SQL', core: true },
			{ label: 'C#' },
			{ label: 'PHP' },
		],
	},
	{
		title: 'Frontend',
		chips: [
			{ label: 'React', core: true },
			{ label: 'Next.js', core: true },
			{ label: 'Tailwind CSS', core: true },
			{ label: 'TanStack Query/Table', core: true },
			{ label: 'shadcn/ui', core: true },
			{ label: 'Vue' },
			{ label: 'Redux' },
			{ label: 'React Native' },
		],
	},
	{
		title: 'Backend & datos',
		chips: [
			{ label: 'FastAPI', core: true },
			{ label: 'Celery + Redis', core: true },
			{ label: 'PostgreSQL', core: true },
			{ label: 'SQLAlchemy', core: true },
			{ label: 'NestJS' },
			{ label: '.NET' },
			{ label: 'Laravel' },
			{ label: 'MySQL' },
		],
	},
	{
		title: 'Cloud & IA',
		chips: [
			{ label: 'AWS', core: true },
			{ label: 'Docker', core: true },
			{ label: 'GitHub Actions', core: true },
			{ label: 'OAuth2/OIDC', core: true },
			{ label: 'LLMs en producción', core: true },
			{ label: 'Azure' },
			{ label: 'Keycloak' },
		],
	},
	{
		title: 'Conectividad con dispositivos',
		chips: [
			{ label: 'Bluetooth' },
			{ label: 'NFC' },
			{ label: 'Puerto serie' },
			{ label: 'Visión por computadora' },
		],
	},
]

export const education = [
	{
		name: 'Desarrollo Full Stack',
		school: 'Bootcamp Soy Henry',
		status: '2022',
	},
	{
		name: 'Diplomatura en Competencias Gerenciales, Inteligencia Emocional y Liderazgo Ágil',
		school: 'Universidad de Belgrano',
		status: '2025',
	},
	{
		name: 'Administración de empresas',
		school: 'Coderhouse',
		status: '2026',
	},
	{
		name: 'Ingeniería en Mecatrónica',
		school: 'Universidad Nacional de Cuyo',
		status: '2015 — 2023 · Cursada parcial',
	},
]

export const links = {
	email: 'p.ortegariera@gmail.com',
	linkedin: 'https://www.linkedin.com/in/ortega-pablo/',
	github: 'https://github.com/ortega-pablo',
}
