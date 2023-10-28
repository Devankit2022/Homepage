import type { Metadata } from "next"

import "./globals.scss"

export const metadata: Metadata = {
	title: "HomePage",
	description: "Homepage of 404 Consultants",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
