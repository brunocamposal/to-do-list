import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import { ColumnGrid } from './styles';
import { AddButton, Column, Task } from '../../components';

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <>
      <Grid container justify="center">
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> To Do </h1>
            {tasks &&
              tasks
                .filter(({ column }) => column === 'TODO')
                .map(({ title, image }, index) => (
                  <Task key={index} title={title} image={image} />
                ))}
          </Column>
        </ColumnGrid>
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> In progress </h1>
          </Column>
        </ColumnGrid>
        <ColumnGrid item xs={12} sm={4}>
          <Column>
            <h1> Finished </h1>
          </Column>
        </ColumnGrid>
      </Grid>
      <AddButton />
    </>
  );
};

export default Home;
