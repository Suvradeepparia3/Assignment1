import React, { useState } from 'react';
import Popup from './Popup';

function Posts(props) {

    const [ selectedPost, setSelectedPost ] = useState([])
    const [ modal, setModal ] = useState(false)

    const callModal = (post) => {
        setModal(true)
        setSelectedPost(post)
    }
    const close = () => {
        setModal(false)
    }

    return (
        <div>
          
            <div className="card">
            <button className="content-header" onClick={() => callModal(props.post)}>
                
                User Id: <b><span>{props.post.id}</span></b>
                <p>User Email: <b><span>{props.post.email}</span></b></p>
                User Name: <b><span>{props.post.name}</span></b>
                
                </button>
            </div>
            <Popup post={selectedPost} call={modal} close={close}/>
        </div>
    );
}

export default Posts;