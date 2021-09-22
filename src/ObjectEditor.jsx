import * as React from 'react';

import arrayMove from 'array-move';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/AddCircle';

import SortableObject from './SortableObject';

const ObjectEditor = ({ source = {}, onChange, PropertyEditor }) =>
{
	const [ obj, updateObj ] = React.useState(source);

	React.useEffect(() =>
	{
		if (source !== obj)
		{
			onChange(obj);
		}
	});

	const updateProperty = (key, update) =>
	{
		const updated = { ...source };

		updated[key] = update;

		updateObj(updated);
	};

	const addProperty = () =>
	{
		const newKey = prompt('Property:');

		if (newKey != null)
		{
			if (!Object.keys(obj).includes(newKey))
			{
				const updated = { ...source };

				updated[newKey] = {};

				updateObj(updated);
			}
			else
			{
				alert('Properties must be unique');
			}
		}
	};

	const renameProperty = (oldKey) =>
	{
		const newKey = prompt('Property:', oldKey);

		if (newKey !== oldKey && newKey !== null)
		{
			if (!Object.keys(obj).includes(newKey))
			{
				const updated = {};

				Object.keys(obj).forEach((key) =>
				{
					updated[key === oldKey ? newKey : key] = obj[key];
				});

				updateObj({ ...updated });
			}
			else
			{
				alert('Properties must be unique.');
			}
		}
	};

	const deleteProperty = (key) =>
	{
		const updated = { ...source };

		delete updated[key];

		updateObj(updated);
	};

	const handleSort = ({ oldIndex, newIndex }) =>
	{
		const updated = {};

		const keys = arrayMove(Object.keys(obj), oldIndex, newIndex);

		keys.forEach((key) =>
		{
			updated[key] = obj[key];
		});

		updateObj({ ...updated });
	};

	return (
		<>

			<SortableObject lockAxis='y' useDragHandle obj={obj} PropertyEditor={PropertyEditor} onUpdate={updateProperty} onRename={renameProperty} onDelete={deleteProperty} onSortEnd={handleSort} />

			<IconButton onClick={() => addProperty()} aria-label='add'>
				<AddIcon />
			</IconButton>

		</>
	);
};

export default ObjectEditor;
