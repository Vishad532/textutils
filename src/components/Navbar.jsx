import React from "react"
import PropTypes from "prop-types"

export default function Navbar({ title, aboutText, mode, toggleMode }) {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${
				mode === "dark" ? mode : "light"
			} bg-${mode === "dark" ? mode : "light"}`}>
			<div className="container-fluid">
				<div className="navbar-brand">{title}</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex flex-wrap justify-content-between"
					id="navbarSupportedContent">
					<div className="navbar-nav"></div>
					<div className="form-check form-switch ms-3">
						<input
							className="form-check-input"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
							onClick={toggleMode}
						/>
						<label
							className={`form-check-label text-${
								mode === "dark" ? "light" : "black"
							}`}
							htmlFor="flexSwitchCheckDefault">
							{mode === "dark" ? "Dark mode" : "Light Mode"}
						</label>
					</div>
				</div>
			</div>
		</nav>
	)
}
Navbar.propTypes = {
	title: PropTypes.string,
	aboutText: PropTypes.string,
}
Navbar.defaultProps = {
	title: "TextUtils",
	aboutText: "About",
}
