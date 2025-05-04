import React from 'react';
import { ActionIcon, NumberInput,  } from '@mantine/core';

export default function BudgetForm() {
    return (
        <form>
        <NumberInput
            label="Budget Amount"
            placeholder="Enter your budget amount"
            required
            min={0}
            step={10}
        />
        <ActionIcon variant='filled' aria-label="Create Budget" type="submit"/>
        </form>
    );
}