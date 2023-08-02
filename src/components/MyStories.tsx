import { StoryData } from "@/types"
import useModal from "../hooks/useModal"

const stories = [
	{
		image: "/becoder.jpg",
		label: "Becoder Contest",
		modal: "becoder",
	},
	{
		image: "/spotify.png",
		label: "Spotify Clone",
		modal: "spotify",
	},
] as StoryData[]

function MyStories() {
	const { onOpen } = useModal()

	return (
		<div
			id="stories"
			className="flex flex-col items-center justify-center gap-y-6 py-[80px] bg-white"
		>
			<div className="flex flex-col gap-y-6 items-center">
				<h1 className="text-6xl font-semibold text-black">MY STORIES</h1>
				<div className="h-1 bg-black w-[240px]" />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
				{stories.map((story) => (
					<div
						onClick={() => onOpen(story.modal)}
						className="flex flex-col items-center gap-y-5 px-10 py-5 hover:bg-neutral-200 transition cursor-pointer"
					>
						<div className="w-[240px] h-[240px]">
							<img
								src={story.image}
								className="object-contain h-full w-full"
							/>
						</div>
						<h1 className="text-black text-xl font-semibold">
							{story.label}
						</h1>
					</div>
				))}
			</div>
		</div>
	)
}

export default MyStories
