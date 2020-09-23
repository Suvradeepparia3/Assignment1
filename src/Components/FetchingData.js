import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Axios from 'axios';

function FetchingData(props) {

    const [ data, setData ] = useState([])
    const [ filter, setFilter ] = useState([])
    const [ limit, setLimit ] = useState(20)
    const [ filteredOrNot, setFilteredOrNot ] = useState(false)

    
    const dataFetching = () => {
        
        Axios.get(`https://jsonplaceholder.typicode.com/comments/?_limit=${limit}`)
        .then((response) => {
            setData(response.data)
            setLimit(limit + 10)
            // console.log(typeof(setData))
            // i am calling first 20 then 30 then 40 so on, every time i call total value from start.
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        setFilter(data.filter(
            (post) => {
                return post.name.indexOf((props.searchData)) !== -1;
                //  one thing i want to do to highlight word. but not done
            }
        ))
        setFilteredOrNot(true)
    },[props.searchData])
    

    useEffect(() => {
        dataFetching()
        setFilteredOrNot(false)
        // eslint-disable-next-line
    },[props.bar])

    

    return (
        filteredOrNot ? 
        <div>
            {
                filter.length ?
                filter.map((post,index) => (
                    <Posts key={index} post={post} />
                ))
                : null
            }
        </div> :
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

