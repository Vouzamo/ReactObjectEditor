import * as React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import Grid from '@mui/material/Grid';

import SortableProperty from './SortableProperty';

const SortableObject = SortableContainer(({ obj, PropertyEditor, onUpdate, onRename, onDelete }) => (
	<Grid>
		{Object.entries(obj).map(([ key, value ], i) => <SortableProperty key={key} index={i} propertyKey={key} property={value} PropertyEditor={PropertyEditor} onUpdate={onUpdate} onRename={onRename} onDelete={onDelete} />)}
	</Grid>
));

export default SortableObject;
