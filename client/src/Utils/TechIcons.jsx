import {
	SiCss3,
	SiExpress,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMaterialui,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiSequelize,
	SiStyledcomponents,
} from 'react-icons/si'

function TechIcons({ technologies, size, withText = 'false' }) {
	return (
		<>
			{technologies.includes('HTML5') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiHtml5 size={size} />
					{withText === 'true' && <p>HTML5</p>}
				</div>
			)}
			{technologies.includes('CSS3') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiCss3 size={size} />
					{withText === 'true' && <p>CSS3</p>}
				</div>
			)}
			{technologies.includes('React') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiReact size={size} />
					{withText === 'true' && <p>React</p>}
				</div>
			)}
			{technologies.includes('Redux') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiRedux size={size} />
					{withText === 'true' && <p>Redux</p>}
				</div>
			)}
			{technologies.includes('Node Js') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiNodedotjs size={size} />
					{withText === 'true' && <p>Node Js</p>}
				</div>
			)}
			{technologies.includes('Express') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiExpress size={size} />
					{withText === 'true' && <p>Express</p>}
				</div>
			)}
			{technologies.includes('PostgreSQL') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiPostgresql size={size} />
					{withText === 'true' && <p>PostgreSQL</p>}
				</div>
			)}
			{technologies.includes('Material UI') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiMaterialui size={size} />
					{withText === 'true' && <p>Material UI</p>}
				</div>
			)}
			{technologies.includes('Styled Components') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiStyledcomponents size={size} />
					{withText === 'true' && <p className=''>Styled Components</p> }
				</div>
			)}
			{technologies.includes('Javascript') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiJavascript size={size} />
					{withText === 'true' && <p>Javascript</p>}
				</div>
			)}
			{technologies.includes('Sequelize') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiSequelize size={size} />
					{withText === 'true' && <p>Sequelize</p>}
				</div>
			)}
			{technologies.includes('Git') && (
				<div className='flex flex-col gap-2 w-min items-center text-white'>
					<SiGit size={size} />
					{withText === 'true' && <p>Git</p>}
				</div>
			)}
		</>
	)
}
export default TechIcons
