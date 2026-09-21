// js DOM code

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello text from Javascript DOM";

// const root = document.getElementById("root");

// root.appendChild(heading);


// react code - create element

// const text = React.createElement("h1", {}, "Hello text from React js");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(text);


// react code - nested element

const parent = React.createElement("div", {id: "parent"}, [
	React.createElement("div", {id: "child1"}, [
		React.createElement("h1", {}, "Heading 1"),
		React.createElement("h2", {}, "Heading 2"),
	]),

	React.createElement("div", {id: "child2"}, [
		React.createElement("h1", {}, "Heading 1"),
		React.createElement("h2", {}, "Heading 2"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);