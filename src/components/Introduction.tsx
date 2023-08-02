function Introduction() {
	return (
		<div className="flex flex-col items-center justify-center gap-y-4 py-[80px] w-full">
			<div className="h-[280px] w-[280px]">
				<img src="/ava.jpg" className="rounded-full object-cover h-full w-full" />
			</div>
			<div className="flex flex-col gap-y-6 items-center">
				<h1 className="text-6xl font-semibold">GIA-HUNG LAM</h1>
				<div className="h-1 bg-white w-[240px]" />
				<h2 className="text-2xl font-medium">Web Developer</h2>
			</div>
		</div>
	)
}

export default Introduction
