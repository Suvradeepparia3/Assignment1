import React from 'react';
import Modal from './Modal';

function Posts(props) {
    return (
        <div>
          
            <div className="card">
               
                <div className="content-header">
                User Id: <b><span>{props.post.id}</span></b>
                <p>User Email: <b><span>{props.post.email}</span></b></p>
                User Name: <b><span>{props.post.name}</span></b>
                </div>
    
            </div>
        </div>
    );
}

export default Posts;