import {
	SiCss3,
	SiExpress,
	SiGithub,
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

function TechIcons({ technologies, size }) {
	return (
		<>
			{technologies.includes('Html5') && (
				<div className='text-white '>
					<SiHtml5 size={size} />
				</div>
			)}
			{technologies.includes('CssThree') && (
				<div className='text-white '>
					<SiCss3 size={size} />
				</div>
			)}
			{technologies.includes('ReactJs') && (
				<div className='text-white '>
					<SiReact size={size} />
				</div>
			)}
			{technologies.includes('Redux') && (
				<div className='text-white '>
					<SiRedux size={size} />
				</div>
			)}
			{technologies.includes('Nodedotjs') && (
				<div className='text-white '>
					<SiNodedotjs size={size} />
				</div>
			)}
			{technologies.includes('Express') && (
				<div className='text-white '>
					<SiExpress size={size} />
				</div>
			)}
			{technologies.includes('Postgresql') && (
				<div className='text-white '>
					<SiPostgresql size={size} />
				</div>
			)}
			{technologies.includes('Mui') && (
				<div className='text-white '>
					<SiMaterialui size={size} />
				</div>
			)}
			{technologies.includes('StyledComponents') && (
				<div className='text-white '>
					<SiStyledcomponents size={size} />
				</div>
			)}
			{technologies.includes('Javascript') && (
				<div className='text-white '>
					<SiJavascript size={size} />
				</div>
			)}
			{technologies.includes('Sequelize') && (
				<div className='text-white '>
					<SiSequelize size={size} />
				</div>
			)}
			{technologies.includes('Github') && (
				<div className='text-white '>
					<SiGithub size={size} />
				</div>
			)}
		</>
	)
}
export default TechIcons
