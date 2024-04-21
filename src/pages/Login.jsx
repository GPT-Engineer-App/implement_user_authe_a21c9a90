import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

function Login() {
  return (
    <Box>
      <h1>Login</h1>
      <Input placeholder='Username' />
      <Input placeholder='Password' type='password' />
      <Button>Login</Button>
    </Box>
  );
}

export default Login;
