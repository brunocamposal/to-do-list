import React from 'react';

import { useDispatch } from 'react-redux';

import { changeTaskColumn, deleteTask } from '../../store/tasks/actions';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from '@material-ui/core';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '45%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.substr(1);
};

const Task = ({ id, title, image, column }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeColum = () => {
    dispatch(changeTaskColumn(id, column));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <Container>
        <Card style={{ marginBottom: 20 }}>
          <CardHeader
            action={
              <IconButton onClick={handleDeleteTask}>
                <DeleteOutlinedIcon />
              </IconButton>
            }
            title={capitalize(title)}
            subheader="September 14, 2016"
            style={{ textAlign: 'left' }}
          />
          {image && (
            <CardMedia className={classes.media} image={image} title={title} />
          )}

          <CardActions disableSpacing>
            <IconButton className={classes.expand} onClick={handleChangeColum}>
              <ArrowForwardOutlinedIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Task;
