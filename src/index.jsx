import React from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@mui/material/CssBaseline';

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

const JsonPropertyEditor = ({ propertyKey, property, onUpdate }) =>
{
	const [ state, setState ] = React.useState(JSON.stringify(property));

	const onSave = () =>
	{
		const value = JSON.parse(state);

		onUpdate(propertyKey, value);
	};

	return (
		<>
			<input type='textarea' name='json' value={state} onChange={(e) => setState(e.target.value)} />
			<button type='button' onClick={onSave}>Save</button>
		</>
	);
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
