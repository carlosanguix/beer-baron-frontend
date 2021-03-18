import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { signIn as signInAction } from '../../actions/userActions';
import './signin.css';

const SignIn = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      signIn(email, password);
    } else {
      // handle errors
    }
  };

  return (
    <div className="bigBox">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper1">
          <div className="logoSI" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="form1" onSubmit={handleSubmit} noValidate>
            <TextField
              onChange={({ target }) => setEmail(target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username or Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={({ target }) => setPassword(target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit1"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#random" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8} />
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (name, password) => dispatch(signInAction(name, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
