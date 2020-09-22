import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Axios from 'axios';

function FetchingData(props) {

    const [ data, setData ] = useState([])
    const [ limit, setLimit ] = useState(20)

    const dataFetching = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/comments/?_limit=${limit}`)
        .then((response) => {
            setData(response.data)
            setLimit(limit + 10)
            // i am calling first 20 then 30 then 40 so on, every time i call total value from start.
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        dataFetching()
        // eslint-disable-next-line
    },[props.bar])

    return (
        <div>
            {
                data.length ?
                data.map((post,index) => (
                    <Posts key={index} post={post} />
                ))
                : null
            }
        </div>
    );
}

export default FetchingData;

