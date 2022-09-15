import { useState } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const useModal = (initialValue = false) => {
	const [isOpen, setIsOpen] = useState(initialValue)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	return [isOpen, openModal, closeModal]
}
