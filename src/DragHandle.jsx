import * as React from 'react';

import { SortableHandle } from 'react-sortable-hoc';

import IconButton from '@mui/material/IconButton';
import DragIcon from '@mui/icons-material/DragIndicator';

const DragHandle = SortableHandle(({ disabled }) => <IconButton disabled={disabled}><DragIcon aria-label='sort' /></IconButton>);

export default DragHandle;
