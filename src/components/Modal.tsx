import useModal from "../hooks/useModal"

function Modal() {
	const { isOpen, modalContent } = useModal()

	if (!isOpen) return null

	return <div>{modalContent}</div>
}

export default Modal
