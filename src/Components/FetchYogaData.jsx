import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
        <ul className='list_data_main'>
            <h1>Fetch Yoga Data Information</h1>
            {data && data.map((e)=>(
                <>
                    <li className='list_data'>
                        <h3>Name: {e.name}</h3>
                        <p>Benefits: {e.benefits}</p>
                        <p>Duration: {e.time_duration}</p>

                    </li>
                </>
            ))}

        </ul>
        </>
    )

}
export default FetchYogaData
