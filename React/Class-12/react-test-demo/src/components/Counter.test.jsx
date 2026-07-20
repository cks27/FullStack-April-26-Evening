import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

describe('Counter Tests', () => {
    
    test('Test default count as 0', () => {
        render(<Counter />);
        expect(screen.getByTestId('counter-display')).toHaveTextContent('Count : 0');
    });

    test('Increment the count by 1', async () => {
        const user = userEvent.setup();

        render(<Counter />);

        await user.click(screen.getByText('Incr'));

        expect(screen.getByTestId('counter-display')).toHaveTextContent('Count : 1');
    });

    test('Decrement the count by -1', async () => {
        const user = userEvent.setup();

        render(<Counter />);

        await user.click(screen.getByText('Decr'));

        expect(screen.getByTestId('counter-display')).toHaveTextContent('Count : -1');
    });

     test('Decrement the count by -2', async () => {
        const user = userEvent.setup();

        render(<Counter />);

        await user.click(screen.getByText('Decr'));
        await user.click(screen.getByText('Decr'));

        expect(screen.getByTestId('counter-display')).toHaveTextContent('Count : -2');
    });
})