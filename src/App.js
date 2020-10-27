import React from "react";
import { Grid, Box, Container, Paper, TextField } from "@material-ui/core";

function App() {
  return (
    <Grid container spacing={3}>
      <Container maxWidth="md">
        <Paper>
          <form action="submit">
            <Box m={5} p={2}>
              <h2>Add Venue Form</h2>
            </Box>
            <Box m={5}>
              <Grid item xs={12}>
                <TextField label="Name" variant="outlined" fullWidth />
              </Grid>
            </Box>

            <Box m={5}>
              <Grid container xs={12} spacing={3}>
                <Grid item xs={4} spacing={3}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Box>

            <Box m={5}>
              <Grid container xs={12} spacing={3}>
                <Grid item xs={6} spacing={3}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Box>

            <Box m={5}>
              <Grid container xs={12} spacing={3}>
                <Grid item xs={3} spacing={3}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Name" variant="outlined" fullWidth />
                </Grid>
              </Grid>
            </Box>
          </form>
        </Paper>
      </Container>
    </Grid>
  );
}

export default App;
