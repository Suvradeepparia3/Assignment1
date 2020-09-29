import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Axios from 'axios';

function FetchingData(props) {

    const [ data, setData ] = useState([])
    // const [ newData, setNewData ] = useState([])
    const [ filter, setFilter ] = useState([])
    const [ limit, setLimit ] = useState(1)
    const [ filteredOrNot, setFilteredOrNot ] = useState(false)
    const [ scrollBar, setScrollBar ] = useState(0)
    const [ loading, setLoading ] = useState(false)
    const [ searchLoading, setSearchLoading ] = useState(false)
    const [ noData, setNoData ] = useState(false)
    const [ error, setError ] = useState(false)

   
    const dataFetching = () => {
        setLoading(true)
        if(noData === false){
            Axios.get(`https://jsonplaceholder.typicode.com/posts/${limit}/comments/`)
            .then((response) => {
                setLoading(false)
                if(response.data.length === 0){
                    setNoData(true)
                }
                let recentData = response.data
                let totalData = data.concat(recentData)
                setData(totalData)
                setLimit(limit + 1)
            })            
            .catch((error) => {
                setLoading(false)
                setError(true)
                console.log(error)
            })
        } else {
            setLoading(false)
        }
       
    }

    const scroll = (e) => {
        setFilteredOrNot(false)
        if ((e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight) {  
            setScrollBar(scrollBar + 1)
        }
      }


    useEffect(() => {
        setSearchLoading(true)
        setFilteredOrNot(true)
        const timer = setTimeout(() => {
            setFilter(data.filter(
                (post) => {
                    setSearchLoading(false)
                    return post.name.indexOf((props.searchData)) !== -1;
                    //  one thing i want to do to highlight word. but not done
                }
            ))
          }, 2000);

          return () => clearTimeout(timer);

        // eslint-disable-next-line
    },[props.searchData])
    

    
  useEffect(() => {
    dataFetching()
    setFilteredOrNot(false)
    // eslint-disable-next-line
},[scrollBar])

    return (
           filteredOrNot ? 
           <div className="contentDiv" onScroll={scroll}>
           {searchLoading ? <h1>Loading</h1> : 
           filter.length ?  
           filter.map((post,index) => (
                   <Posts key={index} post={post} />
                   )) : 
                   <h1>Nothing is matched</h1> }
               
               
           </div> :
           <div className="contentDiv" onScroll={scroll}>
               {
                   data.length ?
                   data.map((post,index) => (
                   <Posts key={index} post={post} />
                   ))
                   : null
                }
                {loading ? <h1>Loading</h1> : null}
                {noData ? <h1>No Data</h1> : null}
                {error ? <h1>Check Your Internet connection.</h1> : null}
           </div>
    );
}


export default FetchingData;

