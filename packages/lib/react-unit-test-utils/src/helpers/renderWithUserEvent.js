import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderWithUserEvent = (...args) => ({
    user: userEvent.setup(),
    ...render(...args),
});

export default renderWithUserEvent;
