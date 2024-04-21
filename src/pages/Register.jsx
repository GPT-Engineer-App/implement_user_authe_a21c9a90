import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

function Register() {
  return (
    <Box>
      <h1>Registration Page</h1>
      <Input placeholder='Username' />
      <Input placeholder='Email' type='email' />
      <Input placeholder='Password' type='password' />
      <Button>Register</Button>
    </Box>
  );
}

export default Register;
