import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from '@material-ui/core';

import { Container } from './styles';

import {
  DeleteOutlinedIcon,
  ArrowForwardOutlinedIcon,
} from '@material-ui/icons/DeleteOutlined';

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

const Task = ({ title, image }) => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Card style={{ marginBottom: 20 }}>
          <CardHeader
            action={
              <IconButton>
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
            <IconButton className={classes.expand}>
              <ArrowForwardOutlinedIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Task;
