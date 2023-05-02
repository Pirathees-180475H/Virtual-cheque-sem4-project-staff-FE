import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './MainSection.css';
import { isNumeric, ValidateEmail } from '../components/Validation';
import { FormHelperText } from '@material-ui/core';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Divider,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Stack,
  Checkbox,
  ReactRouterLink,
} from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState({
    email: '',
  });

  const [validation, setValidation] = React.useState({
    validation: [false],
    errorMessage: [''],
  });

  const handleChange = event => {
    var value = event.target.value;
    var name = event.target.name;

    if (name === 'email') {
      ValidateEmail(value, validation, setValidation, 0);
    }
    setData({ ...data, [event.target.name]: value });
  };

  const validateBefore = () => {
    ValidateEmail(data.email, validation, setValidation, 0);
    if (!validation.validation[0]) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    var isValid = validateBefore();
    if (!isValid) {
      return false;
    }
  };

  return (
    <div className="forgotPass">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Send Confirmation Email
          </Typography>
          <form action="submit">
            <Stack spacing={3}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-user"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Email*"
                    aria-label="name"
                    errorBorderColor="crimson"
                    name="email"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[0]}
                  />
                </InputGroup>
                <FormHelperText color="crimson">
                  {validation.errorMessage[0]}
                </FormHelperText>
              </FormControl>

              <Link as={ReactRouterLink} to="/changePassword">
                <Button
                  mt="20px"
                  w="100%"
                  boxShadow="dark-lg"
                  colorScheme="blue"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </Link>
            </Stack>
          </form>
        </div>
      </Container>
    </div>
  );
}
