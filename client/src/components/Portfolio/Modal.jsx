import { RiCloseLine } from 'react-icons/ri'

function Modal({ setIsOpen }) {
	const handleClose = e => {
		if (e.target.id === 'container') {
			setIsOpen(false)
		}
	}

	return (
		<div
			id='container'
			onClick={e => handleClose(e)}
			className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center '
		>
			<div className='bg-white'>
				<div className=''>
					<div>
						<h5>Dialog</h5>
					</div>
					<button type='button' onClick={() => setIsOpen(false)}>
						<RiCloseLine style={{ marginBottom: '-3px' }} />
					</button>
					<div>Are you sure you want to delete the item?</div>

					<div>
						<div>
							<button type='button' onClick={() => setIsOpen(false)}>
								Delete
							</button>
							<button type='button' onClick={() => setIsOpen(false)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
