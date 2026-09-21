export const stats = [
	{ value: 3, suffix: '+', label: 'AÑOS LIDERANDO IT' },
	{ value: 6, suffix: '', label: 'PERSONAS EN EL EQUIPO HOY' },
	{ value: 9, suffix: '', label: 'SISTEMAS PRODUCTIVOS' },
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
		title: 'Nueve sistemas bajo responsabilidad',
		body: 'Productos web, identidad, backoffices, CRM y cloud — algunos con aplicaciones que se comunican con dispositivos físicos.',
	},
	{
		eyebrow: 'EJECUCIÓN',
		title: 'De horas de espera a un uso fluido',
		body: 'Remediación de performance en un servicio productivo crítico de Tu Casa en Cuotas.',
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
		title: 'Responsable único del proveedor de identidad del grupo',
		body: 'OAuth2/OIDC en .NET. Sobre este servicio inician sesión los demás sistemas, así que su disponibilidad es la de todos.',
		tags: '.NET · OAuth2/OIDC · JWT',
	},
	{
		eyebrow: 'PERFORMANCE',
		title: 'De horas de espera a un uso fluido',
		body: 'Remediación de performance en Tu Casa en Cuotas: un servicio productivo que tardaba horas en responder, hoy se usa con fluidez.',
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
		body: 'Extracción de datos de PDF y Excel para automatizar compras y licitaciones. El agente presenta el resultado; la decisión final siempre es humana.',
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
			'Responsable único del proveedor de identidad interno del grupo y del mantenimiento de sistemas críticos en producción, incluida una remediación de performance que llevó un servicio de horas de espera a un uso fluido.',
			'Desarrollé, junto al equipo formado por Incluit, aplicaciones que se comunican con dispositivos por Bluetooth, NFC y puerto serie (Veco, Vitaance, ASP NFC); y en solitario, Velos, control de un dron acuático por Bluetooth.',
			'Diseñé un challenge técnico propio para evaluar candidatos, y organizo instancias internas de capacitación para el equipo.',
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
			'Construyo Price Lenz, un SaaS de price intelligence para consumo masivo en LATAM.',
			'Construyo PromoTracking, un sistema de monitoreo de promociones con orquestación por IA, en producción.',
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
		body: 'Sistema de microservicios que automatiza el monitoreo y análisis de promociones en e-commerce y redes sociales, con orquestación por IA. Evolucionando hacia una plataforma unificada.',
		chips: ['FastAPI', 'Playwright', 'Next.js', 'PostgreSQL'],
	},
	{
		name: 'Plan Mi Casa',
		status: 'done',
		statusLabel: 'ENTREGADO',
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
		body: 'Integración de un campus sobre una plataforma SaaS educativa existente: backend, frontend, datos e infraestructura en Azure.',
	},
	{
		name: 'Plataforma agroganadera',
		body: 'Intermediación con bot conversacional, desplegada sobre AWS.',
	},
	{
		name: 'Grupo ZAG',
		body: 'Backoffices y CRM en PHP/Laravel y .NET — responsable único de su mantenimiento y soporte.',
	},
	{
		name: 'Tienda Plastik',
		tag: 'CÓDIGO PRIVADO',
		body: 'Sistema propio de cotización, costeo y stock que sostiene la operación de un taller de impresión 3D que cofundé.',
	},
	{
		name: 'Veco',
		tag: 'CON EQUIPO INCLUIT',
		body: 'App móvil para el control de un robot vía red local.',
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
		name: 'Diplomatura en Liderazgo',
		school: 'Universidad de Belgrano',
		status: 'Completa',
	},
	{
		name: 'Ingeniería en Mecatrónica',
		school: 'Universidad Nacional de Cuyo',
		status: 'Cursada parcial',
	},
]

export const links = {
	email: 'p.ortegariera@gmail.com',
	linkedin: 'https://www.linkedin.com/in/ortega-pablo/',
	github: 'https://github.com/ortega-pablo',
}
