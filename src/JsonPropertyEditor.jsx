import React from "react";

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

export default JsonPropertyEditor;
