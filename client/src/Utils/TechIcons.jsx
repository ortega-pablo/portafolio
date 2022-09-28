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
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiHtml5 size={size} />
					{withText === 'true' && <p className='text-text-3'>HTML5</p>}
				</div>
			)}
			{technologies.includes('CSS3') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiCss3 size={size} />
					{withText === 'true' && <p className='text-text-3'>CSS3</p>}
				</div>
			)}
			{technologies.includes('React') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiReact size={size} />
					{withText === 'true' && <p className='text-text-3'>React</p>}
				</div>
			)}
			{technologies.includes('Redux') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiRedux size={size} />
					{withText === 'true' && <p className='text-text-3'>Redux</p>}
				</div>
			)}
			{technologies.includes('Node Js') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiNodedotjs size={size} />
					{withText === 'true' && <p className='text-text-3'>Node Js</p>}
				</div>
			)}
			{technologies.includes('Express') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiExpress size={size} />
					{withText === 'true' && <p className='text-text-3'>Express</p>}
				</div>
			)}
			{technologies.includes('PostgreSQL') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiPostgresql size={size} />
					{withText === 'true' && <p className='text-text-3'>PostgreSQL</p>}
				</div>
			)}
			{technologies.includes('Material UI') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiMaterialui size={size} />
					{withText === 'true' && <p className='text-text-3'>Material UI</p>}
				</div>
			)}
			{technologies.includes('Styled Components') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiStyledcomponents size={size} />
					{withText === 'true' && <p className='text-text-3'>Styled Components</p> }
				</div>
			)}
			{technologies.includes('Javascript') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiJavascript size={size} />
					{withText === 'true' && <p className='text-text-3'>Javascript</p>}
				</div>
			)}
			{technologies.includes('Sequelize') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiSequelize size={size} />
					{withText === 'true' && <p className='text-text-3'>Sequelize</p>}
				</div>
			)}
			{technologies.includes('Git') && (
				<div className='flex flex-col gap-2 w-min items-center'>
					<SiGit size={size} />
					{withText === 'true' && <p className='text-text-3'>Git</p>}
				</div>
			)}
		</>
	)
}
export default TechIcons
