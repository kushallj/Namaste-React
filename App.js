const hr=React
.createElement("div",
{id:"parent"},[React.createElement("div",
{id:"child"},[React.createElement("h1",
{},"h1 is coming"),React.createElement("h2",
{},"hello brother")]),
React.createElement("div",
{id:"child"},[React.createElement("h1",
{},"h1 is coming"),React.createElement("h2",
{},"hello brother")])]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(hr)