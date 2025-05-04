import React from 'react';
import './App.css';

import { useDisclosure } from '@mantine/hooks';
import { Button, Flex, AppShell, Burger, Paper, ActionIcon, Text } from '@mantine/core';
import Budget from './components/Budget';



function App() {
 const [opened, { toggle }] = useDisclosure();
 
  return (
    <AppShell
      header = {{height: 60}}
      navbar = {{width: 300, breakpoint: 'sm', collapsed: {desktop: !opened, mobile: !opened}}}
      padding = "md">
      <AppShell.Header>
        <Flex justify="space-between" align="center" style={{padding: '10px 20px'}}>
          <Burger opened={opened} onClick={toggle} />
          <Text>Budgeting Tool</Text>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
      </AppShell.Navbar>
      <AppShell.Main><Budget/></AppShell.Main>
    </AppShell>
    
  );
}

export default App;
