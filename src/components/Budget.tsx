import { Flex, Text, Button, ActionIcon } from '@mantine/core';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import BudgetItem from './BudgetItem';

export default function Budget() {
    
    return (
        <Flex direction="column" gap="md" justify="space-between" align="center" style={{ height: '100%', width: '100%' }}>
            <Flex direction="row" gap="md" justify="space-between" align="center" style={{ height: '100%', width: '100%' }}>
            <Text>Your Budgets</Text>
            <ActionIcon variant='default' aria-label='plus'></ActionIcon>
            </Flex>
            <Flex direction="column" gap="md" style={{ width: '100%', marginTop : '10px', marginBottom: '5px', marginLeft: '5px', marginRight: '5px' }}>
                    <BudgetItem/>
                    <BudgetItem/>
                    <BudgetItem/>
                    <BudgetItem/>
            </Flex>
        </Flex>
    )
}