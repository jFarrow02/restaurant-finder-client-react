import React from 'react';

import { RestaurantInterface } from '../../interfaces';

export const Restaurant: React.FC<{restaurant: RestaurantInterface}> = ({restaurant}) => {
    const { 
        address: { building, street, zipcode },
        borough,
        cuisine,
        grades,
        name,
     } = restaurant;
    return(
        <article className="restaurant-details">
            <h3>{name}</h3>
            <div className="restaurant-details-address">
                <p>{building} {street}, {zipcode}</p>
                <p>{borough}</p>
            </div>
            <div className="restaurant-details-cuisine">
                <h4>Cuisine Type: {cuisine}</h4>
            </div>
            <div className="restaurant-details-gradeslist">
                {grades.map((grade) => {
                    <div className="restaurant-details-grade">
                        Date: {grade.date.$date}
                        Grade: {grade.grade},
                        Score: {grade.score}
                    </div>
                })}
            </div>
        </article>
    )

};