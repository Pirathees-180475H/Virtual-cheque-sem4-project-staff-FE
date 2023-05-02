import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './MainSection.css';
import { isNumeric, isRequired, ValidateEmail } from '../components/Validation';
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

export default function NewPass() {
  const classes = useStyles();
  const [show, setShow] = React.useState({ button1: false, button2: false });
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState({
    newPass: '',
    newPassAgain: '',
  });

  const [validation, setValidation] = React.useState({
    validation: [false,false],
    errorMessage: ['', ''],
  });

  const handleChange = event => {
    var value = event.target.value;
    var name = event.target.name;

    if (name === 'newPass') {
      isRequired(value, validation, setValidation, 0, 'newPass');
    } else if (name === 'newPassAgain') {
      isRequired(value, validation, setValidation, 1, 'newPassAgain');
    }
    setData({ ...data, [event.target.name]: value });
  };

  const validateBefore = () => {
    isRequired(data.pin, validation, setValidation, 0, 'NewPassword');
    isRequired(data.pin, validation, setValidation, 1, 'NewPasswordAgain');
    if (!validation.validation[0] && !validation.validation[1]) {
      return true;
    }
    return false;
  };

  const handleSubmit = event => {
    event.preventDefault();
    var isValid = validateBefore();
    if (!isValid) {

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
            Enter New Password
          </Typography>
          <form action="submit">
            <Stack spacing={3}>
            <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show.button1 ? 'text' : 'password'}
                    placeholder="New Password"
                    aria-label="Password"
                    name="newPass"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[0]}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow({...show, button1: !show.button1 })}
                    >
                      {show.button1 ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color="crimson">
                  {validation.errorMessage[0]}
                </FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show.button2 ? 'text' : 'password'}
                    placeholder="Re-Enter New Password"
                    aria-label="Password"
                    w='400px'
                    name="newPassAgain"
                    value={data.name}
                    onChange={event => handleChange(event)}
                    isInvalid={validation.validation[1]}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow({...show, button2: !show.button2 })}
                    >
                      {show.button2 ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color="crimson">
                  {validation.errorMessage[1]}
                </FormHelperText>
              </FormControl>
              <FormHelperText>
                Must be 8-15 characters long
                </FormHelperText>

              <Link as={ReactRouterLink} to="/changePassword">
                <Button
                  mt="20px"
                  w="100%"
                  boxShadow="dark-lg"
                  colorScheme="blue"
                  type="submit"
                  onClick={event => handleSubmit(event)}
                >
                  Confirm
                </Button>
              </Link>
            </Stack>
          </form>
        </div>
      </Container>
    </div>
  );
}
