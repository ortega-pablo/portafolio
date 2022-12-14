import { ImGithub, ImLinkedin, ImProfile } from 'react-icons/im'
import { RiMailSendLine } from 'react-icons/ri'

function SocialNav() {
	const socialButtons = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <ImLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/ortega-pablo/',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					GitHub <ImGithub size={30} />
				</>
			),
			href: 'https://github.com/ortega-pablo',
		},
		{
			id: 3,
			child: (
				<>
					Mail <RiMailSendLine size={30} />
				</>
			),
			href: 'mailto:p.ortegariera@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					CV <ImProfile size={30} />
				</>
			),
			style: 'rounded-br-md',
			href: 'https://drive.google.com/u/0/uc?id=1i3LTzmuZ7PSBzN_7x3dbQKtYBr6j7TM3&export=download',
			download: true,
		},
	]

	return (
		<nav className='hidden flex-col top-[35%] left-0 fixed lg:flex'>
			<ul>
				{socialButtons.map(button => (
					<li
						key={button.id}
						className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-bgDark-2 ${button.style}`}
					>
						<a
							href={button.href ? button.href : '/'}
							className='flex justify-between items-center w-full text-primary-1'
							download={button.download}
							target='_blank'
							rel='noreferrer'
						>
							{button.child}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SocialNav
