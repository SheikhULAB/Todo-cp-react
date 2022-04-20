import { Button, List, ListItem, ListItemText} from '@material-ui/core';
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from '../../firebase';
import './Todo.css';

const Todo = (props) => {

    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="dummy deadline" />
            </ListItem>
            <Button className='button__align' onClick={e => db.collection('todos').doc(props.todo.id).delete()}><DeleteForeverIcon>Delete Me</DeleteForeverIcon></Button>
        </List>
    
    );
};

export default Todo;