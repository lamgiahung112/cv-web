import { NavBarItem } from "@/types"

interface NavBarProps {
	items: NavBarItem[]
}

function NavBar({ items }: NavBarProps) {
	return (
		<>
			<div className="fixed h-[80px] bg-neutral-800 w-full top-0">
				<div className="flex px-6 lg:px-[160px] items-center justify-between h-full">
					<a href="#top" className="text-3xl font-bold cursor-pointer">
						HOME
					</a>
					<div className="hidden md:flex gap-x-6">
						{items.map((item) => (
							<a
								className="text-lg cursor-pointer font-medium"
								href={item.scrollTo}
								key={item.scrollTo}
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="mt-[80px]" id="top" />
		</>
	)
}

export default NavBar
