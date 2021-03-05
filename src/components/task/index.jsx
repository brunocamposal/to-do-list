import React from 'react';

import { useDispatch } from 'react-redux';

import {
  changeTaskColumn,
  deleteTask,
  changeTaskColumnBack,
} from '../../store/tasks/actions';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Swal from 'sweetalert2';

import { Container, Description } from './styles';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '45%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
}));

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.substr(1);
};

const Task = ({ id, title, image, column, description }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChangeColumAdvance = () => {
    dispatch(changeTaskColumn(id, column));
  };

  const handleChangeColumBack = () => {
    dispatch(changeTaskColumnBack(id, column));
  };

  const handleDeleteTask = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#31429F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your task has been deleted.',
          icon: 'success',
          confirmButtonColor: '#31429F',
        });
        dispatch(deleteTask(id));
      }
    });
  };

  const finishedTask = () => {
    Swal.fire({
      title: 'Do you want to finished task?',
      showCancelButton: true,
      confirmButtonText: `Finished`,
      denyButtonText: `Cancel`,
      confirmButtonColor: '#31429F',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Sucess!', '', 'success');
        dispatch(changeTaskColumn(id, column));
      } else if (result.isDenied) {
        Swal.fire('Task is not finished', '', 'info');
      }
    });
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
            subheader="March 05, 2021"
            style={{ textAlign: 'left' }}
          />
          {image && (
            <CardMedia className={classes.media} image={image} title={title} />
          )}
          
          <Typography style={{ padding: 15 }}>
            <Description> {description} </Description>
          </Typography>

          <CardActions disableSpacing>
            {column === 1 && (
              <IconButton
                className={classes.expand}
                onClick={handleChangeColumAdvance}
              >
                <ArrowForwardOutlinedIcon />
              </IconButton>
            )}
            {column === 2 && (
              <>
                <IconButton onClick={handleChangeColumBack}>
                  <ArrowBackOutlinedIcon />
                </IconButton>
                <IconButton className={classes.expand} onClick={finishedTask}>
                  <CheckCircleOutlineIcon />
                </IconButton>
              </>
            )}

            {column === 3 && (
              <>
                <IconButton onClick={handleChangeColumBack}>
                  <ArrowBackOutlinedIcon />
                </IconButton>
                <IconButton className={classes.expand}>
                  <CheckCircleIcon />
                </IconButton>
              </>
            )}
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Task;
