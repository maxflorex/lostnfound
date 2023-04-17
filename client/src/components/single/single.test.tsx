import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Single from './single';
import { describe } from 'vitest';

const testData = [{
  _id: '',
  title: 'Test Item',
  picture: 'test-image.jpg',
  category: 'Test Category',
  status: 'Test Status',
  contact: 'test@example.com',
  where: {
    city: 'Test City',
    country: 'Test Country',
  },
  when: '2022-01-01T12:00:00.000Z',
}];

describe('Testing our React application', () => {
  it('Fetch posts', () => {
    render(<Single data={testData} />);

    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Is this item yours?')).toBeInTheDocument();
    expect(screen.getByText('Found / Lost at:')).toBeInTheDocument();
    expect(screen.getByText('Test City, Test Country')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('2022-01-01')).toBeInTheDocument();

  });
});
