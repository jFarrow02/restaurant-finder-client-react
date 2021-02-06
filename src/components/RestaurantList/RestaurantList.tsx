import {useState} from 'react';

import './RestaurantList.sass';

export const RestaurantList = () => {
    const [pageTitle] = useState('Restaurants')
    return(
        <article className="restaurant-list">
            <h2>{pageTitle}</h2>
        </article>
    )
};