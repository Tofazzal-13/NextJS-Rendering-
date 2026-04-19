import Image from 'next/image';
import React from 'react';

const FoodDetailpage = async ({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json();
    const food = data.data;
    const {id, dish_name, image_link} = food

    return (
        <div>
            <h2>Show details of {foodId}</h2>
            <h3 className='text-3xll'>{dish_name}</h3>
            <Image 
            src={image_link}
            alt={dish_name}
            width={300}
            height={300}

            >

            </Image>
            
        </div>
    );
};

export default FoodDetailpage;