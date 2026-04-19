import React from 'react';

const FoodDetailpage = async ({params}) => {
    const {foodId} = await params;
     

    return (
        <div>
            <h2>Show details of {foodId}</h2>
        </div>
    );
};

export default FoodDetailpage;