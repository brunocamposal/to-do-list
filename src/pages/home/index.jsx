import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import { ColumnGrid } from './styles';
import { AddButton, Column, Task } from '../../components';

const Home = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <Grid container justify="center">
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> To Do </h1>
            {tasks !== undefined &&
              tasks
                .filter(({ column }) => column === 1)
                .map(({ id, title, image, column }, index) => (
                  <Task
                    key={index}
                    id={id}
                    column={column}
                    title={title}
                    image={image}
                  />
                ))}
          </Column>
        </ColumnGrid>
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> In progress </h1>
            {tasks !== undefined &&
              tasks
                .filter(({ column }) => column === 2)
                .map(({ id, title, image, column }, index) => (
                  <Task
                    key={index}
                    id={id}
                    column={column}
                    title={title}
                    image={image}
                  />
                ))}
          </Column>
        </ColumnGrid>
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> Finished </h1>
            {tasks !== undefined &&
              tasks
                .filter(({ column }) => column === 3)
                .map(({ id, title, image, column }, index) => (
                  <Task
                    key={index}
                    id={id}
                    column={column}
                    title={title}
                    image={image}
                  />
                ))}
          </Column>
        </ColumnGrid>
      </Grid>
      <AddButton />
    </>
  );
};

export default Home;
