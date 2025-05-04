import React from 'react';
import { Flex, Button, Title, Text, Paper } from '@mantine/core';

export default function BudgetItem() {
    return (
        <Paper style={{ width: '100%', padding: '15px' } } shadow='md' radius='md' withBorder onClick={() => console.log('Budget Item Clicked')}>
            <Flex direction="row" gap="md" justify="space-between" align="center" style={{ height: '100%', width: '100%' }}>
                <Title order={4}>Budget Title</Title>
                <Text>Amount</Text>
                <Text>Date</Text>
            </Flex>
        </Paper>
    );
}