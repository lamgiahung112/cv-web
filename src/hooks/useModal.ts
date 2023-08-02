import { ModalContent } from "@/types"
import { create } from "zustand"

interface ModalStore {
	isOpen: boolean
	modalContent: ModalContent
	onOpen: (modalContent: ModalContent) => void
	onClose: () => void
}

const useModal = create<ModalStore>((set) => ({
	isOpen: false,
	modalContent: undefined,
	onOpen: (modalContent) => set({ modalContent, isOpen: true }),
	onClose: () => set({ isOpen: true, modalContent: undefined }),
}))

export default useModal
