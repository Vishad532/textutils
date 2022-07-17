import React from "react"

export default function Alert({ info }) {
	const { msg, title } = info
	return (
		<div
			className={`alert alert-${title} position-absolute w-100`}
			role="alert">
			<span>
				<strong>{title}</strong> : {msg}
			</span>
		</div>
	)
}
