import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Area from './Charts/Area';
import Line from './Charts/Line';
import Bar from './Charts/Bar';
import BarHorizontal from './Charts/BarHorizontal';
import BoxesNew from './BoxesNew';
import Barhorizontal from './Charts/BarHorizontal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Boxes() {
  return (
    <div>
      <br />
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        
        <Grid item xs={3}>
          <Item> <BoxesNew/> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Area /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Line /></Item>
        </Grid>
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={4}>
          <Item><Bar /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Barhorizontal /></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
