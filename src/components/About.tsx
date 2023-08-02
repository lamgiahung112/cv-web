import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center gap-y-4 py-[80px] w-full"
		>
			<div className="flex flex-col gap-y-6 items-center">
				<h1 className="text-6xl font-semibold">ABOUT</h1>
				<div className="h-1 bg-white w-[240px]" />
			</div>
			<div className="flex gap-x-10 gap-y-5 flex-col lg:flex-row p-6 lg:w-[50vw]">
				<div className="flex-1 text-justify font-medium text-lg">
					My goal is to create values and products that make technology more
					accessible to everyone. I have experience in providing scalable
					solutions for international enterprises.
				</div>
				<div className="flex-1 flex flex-col">
					<div className="flex items-end">
						<h1 className="w-[320px] lg:w-[160px] font-semibold text-xl">
							Name:
						</h1>
						<h2>Gia-Hung Lam</h2>
					</div>
					<div className="flex items-end">
						<h1 className="w-[320px] lg:w-[160px] font-semibold text-xl">
							Date of Birth:
						</h1>
						<h2>11th Feb, 2003</h2>
					</div>
					<div className="flex items-end">
						<h1 className="w-[320px] lg:w-[160px] font-semibold text-xl">
							For friends I'm:
						</h1>
						<h2>triko</h2>
					</div>
					<div className="flex items-end">
						<h1 className="w-[320px] lg:w-[160px] font-semibold text-xl">
							Email:
						</h1>
						<h2>lamgiahung112@gmail.com</h2>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-x-10">
				<a
					href="https://facebook.com/lamezahunkne"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook size={35} className="cursor-pointer" />
				</a>
				<a
					href="https://www.linkedin.com/in/trikohung/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin size={35} className="cursor-pointer" />
				</a>
				<a
					href="https://github.com/lamgiahung112"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={35} className="cursor-pointer" />
				</a>
				<a
					href="mailto:lamgiahung112@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FiMail size={35} className="cursor-pointer" />
				</a>
			</div>
		</div>
	)
}

export default About
