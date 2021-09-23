# ReactObjectEditor

Higher order component(s) to facilitate editing an objects properties, implemented in React using Material UI.

## Example Usage

Import components and use as shown below:

    import * as React from 'react';
    import { JsonPropertyEditor, ObjectEditor } from 'react-object-editor-mui';
    
    const MyEditor = (props) => {
        const [state, setState] = React.useState({});
        
        return (
            <ObjectEditor source={state} onChange={setState} PropertyEditor={JsonPropertyEditor} />
        );
    }

You'll want to provide your own PropertyEditor which can be implemented as below:

    import * as React from 'react';
    
    const MyPropertyEditor = (props) => {
        const { propertyKey, property, onUpdate } = props;
        
        const [state, setState] = React.useState(JSON.stringify(property));
        
        const onSave = () => {
            const value = JSON.parse(state);
            onUpdate(propertyKey, value);
        }
        
        return (
            <>
              <input type='textarea' name='json' value={state} onChange={(e) => setState(e.target.value)} />
              <button type='button' onClick={onSave}>Save</button>
            </>
        );
    }

## Features

OOTB capabilities include:
- Add
- Delete
- Rename
- Drag & Drop Sorting
