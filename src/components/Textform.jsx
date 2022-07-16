import React, { useState } from "react"

export default function Textform({ title, mode, alert }) {
	const [text, setText] = useState("")
	const [origionalText, setOrigionalText] = useState("")
	const convertToUpperCase = () => {
		setText(text.toUpperCase())
		alert("Text converted into upper case.", "success")
	}
	const convertToLowerCase = () => {
		setText(text.toLowerCase())
		alert("Text converted into lower case.", "success")
	}
	const onChangeTextArea = (e) => {
		let enteredText = e.target.value
		setText(enteredText)
		setOrigionalText(enteredText)
	}
	const clearText = () => {
		setOrigionalText("")
		setText("")
		alert("Text cleared.", "success")
	}
	const showOrigionalText = () => {
		setText(origionalText)
		alert("Original text set.", "success")
	}
	const downloadText = (filename, text) => {
		if (text != "") {
			var element = document.createElement("a")
			element.setAttribute(
				"href",
				"data:text/plain;charset=utf-8," + encodeURIComponent(text)
			)
			element.setAttribute("download", filename)

			element.style.display = "none"
			document.body.appendChild(element)

			element.click()

			document.body.removeChild(element)
			alert("Your File was Downloaded.", "success")
		} else {
			alert("Please! Write some text in text area.", "danger")
		}
	}
	const copyText = () => {
		var copyText = document.getElementById("myInput")
		copyText.select()
		navigator.clipboard.writeText(copyText.value)
		alert("Copy to Clipboard.", "success")
	}
	return (
		<div>
			<div className="container">
				<h2 className="mt-3 mb-3">{title}</h2>
				<div className="mb-3">
					<textarea
						className="form-control"
						rows="10"
						value={text}
						id="myInput"
						style={
							mode === "dark"
								? { color: "white", backgroundColor: "rgba(33, 37, 41, 1)" }
								: { color: "black", backgroundColor: "white" }
						}
						onChange={onChangeTextArea}></textarea>
				</div>
				<div className="mb-3 d-flex flex-wrap justify-content-between row ">
					<button
						className="btn btn-primary  col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={convertToUpperCase}>
						Convert To Uppercase
					</button>
					<button
						className="btn btn-primary  col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={convertToLowerCase}>
						Convert To LowerCase
					</button>
					<button
						className="btn btn-primary  col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={showOrigionalText}>
						Origional Text
					</button>
					<button
						className="btn btn-primary  col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={clearText}>
						Clear Text
					</button>
					<button
						className="btn btn-primary  col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={() => downloadText("Myfile.txt", text)}>
						Download Text
					</button>
					<button
						className="btn btn-primary col-11 col-sm-11 col-md-4 col-lg-3 col-xl-2 m-2"
						onClick={copyText}>
						Copy
					</button>
				</div>
			</div>
			<div className="container">
				<h2 className="mb-2">Your text summary</h2>
				<div className="mb-3">
					<span>
						Total words in text :{" "}
						{
							text.split(" ").filter((word) => {
								return word != ""
							}).length
						}{" "}
					</span>
					<br />
					<span>Total characters in text : {text.length}</span>
					<br />
					<span>
						Time to read :{" "}
						{0.008 *
							text.split(" ").filter((word) => {
								return word != ""
							}).length}{" "}
						Minutes
					</span>
				</div>
				<h3>Preview : </h3>
				<p>{text == "" ? "Enter text in textarea to see the preview" : text}</p>
			</div>
		</div>
	)
}
