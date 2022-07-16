import React from "react"

export default function Alert({ info }) {
	const { msg, title } = info
	return (
		<div className={`alert alert-${title}`} role="alert">
			<span>
				<strong>{title}</strong> : {msg}
			</span>
		</div>
	)
}
