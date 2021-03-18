import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { signUp as signUpAction } from '../../actions/userActions';
import '../generalStyles.css';
import './signUp.css';

const NO_VALID_EMAIL_ERROR = 'invalid email';
const NOT_SAME_PASSWORD_ERROR = 'passwords do not match';
const MUST_CONTAIN_MESSAGE = 'password must contain minimum eight characters, at least one letter and one number';

const SignUp = ({ signUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && email && password && repeatPassword) {
      signUp(username, email, password, repeatPassword);
    } else {
      // handle errors
    }
  };

  // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  const validatePassword = (passwordToValidate) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return !regex.test(passwordToValidate);
  };

  const validateEmail = (emailToValidate) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(emailToValidate);
  };

  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(validatePassword(e.target.value));
  };

  const handleOnChangeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    setIsSamePassword(password !== e.target.value);
  };

  return (
    <div className="bigBox">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper1">
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="form1" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  variant="outlined"
                  required
                  fullWidth
                  label="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnchangeEmail}
                  variant="outlined"
                  required
                  fullWidth
                  error={isValidEmail}
                  helperText={isValidEmail ? NO_VALID_EMAIL_ERROR : ''}
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChangePassword}
                  variant="outlined"
                  required
                  fullWidth
                  error={isValidPassword}
                  helperText={isValidPassword ? MUST_CONTAIN_MESSAGE : ''}
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChangeRepeatPassword}
                  variant="outlined"
                  required
                  fullWidth
                  error={isSamePassword}
                  helperText={isSamePassword ? NOT_SAME_PASSWORD_ERROR : ''}
                  name="repeatPassword"
                  label="Repeat password"
                  type="password"
                  id="repeatPassword"
                  autoComplete="current-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit1"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (username, email, password, repeatPassword) => (
    dispatch(signUpAction(username, email, password, repeatPassword))
  ),
});

export default connect(null, mapDispatchToProps)(SignUp);
