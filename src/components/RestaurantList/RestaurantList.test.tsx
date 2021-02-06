import React from 'react';
import { render, screen } from '@testing-library/react';
import { RestaurantList } from './RestaurantList';

test('RestaurantList renders', () => {
    render(<RestaurantList/>);
    const title = screen.getByText(/Restaurants/i);
    expect(title).toBeInTheDocument();
})

