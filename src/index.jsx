import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@mui/material/CssBaseline';

import JsonPropertyEditor from './JsonPropertyEditor';
import ObjectEditor from "./ObjectEditor";

const source = {
	property1 : "stringValue",
	property2 : {
		foo : "bar",
	},
	property3 : true,
	property4 : [
		"foo",
		"bar",
	],
	property5 : 3.14159,
};

const MyEditor = () =>
{
	const [ state, setState ] = React.useState(source);

	return (
		<>
			<ObjectEditor source={state} onChange={setState} PropertyEditor={JsonPropertyEditor} />
			<button type='button' onClick={() => console.log(state)}>Log State</button>
		</>
	);
};

ReactDOM.render(
	<>
		<CssBaseline />
		<MyEditor />
	</>,
	document.getElementById('root'),
);
