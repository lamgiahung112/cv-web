import { IconType } from "react-icons"

declare interface NavBarItem {
	label: string
	scrollTo: string
}

declare type ModalContent = undefined | "spotify" | "becoder"

declare interface StoryData {
	label: string
	image: string
	modal: ModalContent
}
