import { customRender } from '@/test/utils';
import { screen } from '@testing-library/react';
import { UserTable } from '../UsersTable';

const mockUsers = [
  { id: 2, name: 'John Doe', email: 'john.doe@example.com', phone: '987654321' },
  { id: 3, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555123456' },
];

describe('UserTable', () => {
  it('renders user information correctly', () => {
    customRender(<UserTable users={mockUsers} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();

    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();

    expect(screen.getByText('987654321')).toBeInTheDocument();
    expect(screen.getByText('555123456')).toBeInTheDocument();
  });
});
