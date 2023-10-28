import {
	About,
	Activity,
	Clients,
	Footer,
	Intro,
	Navbar,
	Process,
	Service,
	Together,
} from "@/container"

export default function Home() {
	return (
		<main>
			<Navbar />
			<Intro />
			<Activity />
			<About />
			<Process />
			<Service />
			<Clients />
			<Together />
			<Footer />
		</main>
	)
}
