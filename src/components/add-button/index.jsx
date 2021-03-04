import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createTask } from '../../store/tasks/actions';

import AddIcon from '@material-ui/icons/Add';

import {
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { StyledButton } from './styles';

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task_data = {
      id: tasks.length + 1,
      title: name,
      column: 1,
      image: image,
    };

    dispatch(createTask(task_data));
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <StyledButton color="primary" onClick={() => setOpen(true)}>
          <AddIcon />
        </StyledButton>
      </Tooltip>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle style={{ textAlign: 'center' }}>
            Create new task
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField
                id="standard-basic"
                label="Name"
                name="task-name"
                fullWidth
                value={name}
                onInput={(e) => setName(e.target.value)}
              />
            </DialogContentText>
            <DialogContentText>
              <TextField
                id="standard-basic"
                label="Image"
                name="task-image"
                fullWidth
                value={image}
                onInput={(e) => setImage(e.target.value)}
              />
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button autoFocus onClick={() => setOpen(false)} color="secondary">
              Cancel
            </Button>

            <Button
              color="primary"
              onClick={() => setOpen(false)}
              autoFocus
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddButton;
