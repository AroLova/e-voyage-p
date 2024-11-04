import Link from "next/link";
import React from "react";

export default function RootHead() {
	return <>
			<Link rel="apple-touch-icon" href="/logo192.png" />
			<Link rel="manifest" href="/manifest.json" />
			<Link
				rel="shortcut icon"
				type="image/x-icon"
				href={process.env.NEXT_PUBLIC_BASE_PATH || '' + '/favicon.ico'}
			/>

		  <title>Horizon UI PRO NextJS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
	</>
}