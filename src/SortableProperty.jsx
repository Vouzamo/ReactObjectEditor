import * as React from 'react';

import { SortableElement } from 'react-sortable-hoc';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RenameIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DragHandle from './DragHandle';

const SortableProperty = SortableElement(({ propertyKey, property, PropertyEditor, onUpdate, onRename, onDelete }) => (
	<Accordion key={propertyKey}>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}>
			<DragHandle />
			<Typography>{propertyKey}</Typography>
			<IconButton onClick={() => onRename(propertyKey)} aria-label='rename'>
				<RenameIcon />
			</IconButton>
			<IconButton onClick={() => onDelete(propertyKey)} aria-label='delete'>
				<DeleteIcon />
			</IconButton>
		</AccordionSummary>
		<AccordionDetails>
			<PropertyEditor propertyKey={propertyKey} property={property} onUpdate={onUpdate} />
		</AccordionDetails>
	</Accordion>
));

export default SortableProperty;
