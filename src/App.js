import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import { useState } from "react"
import Alert from "./components/Alert"

function App() {
	const [mode, setMode] = useState("light")
	const [alert, setAlert] = useState(null)
	const [style, setStyle] = useState({
		color: "black",
		backgroundColor: "white",
	})
	const toggleMode = () => {
		if (mode == "light") {
			setMode("dark")
			setStyle({ color: "white", backgroundColor: "black" })
			setTheAlert("The dark mode on.", "success")
		} else {
			setMode("light")
			setStyle({ color: "black", backgroundColor: "white" })
			setTheAlert("The light mode on.", "success")
		}
	}
	const setTheAlert = (msg, title) => {
		setAlert({
			msg: msg,
			title: title,
		})
		setTimeout(() => {
			setAlert(null)
		}, 1500)
	}

	return (
		<div style={style} className="App">
			<Navbar mode={mode} toggleMode={toggleMode} />
			{alert && <Alert info={alert} />}
			<Textform
				title="Enter the text below to analyze : "
				mode={mode}
				alert={setTheAlert}
			/>
		</div>
	)
}

export default App
