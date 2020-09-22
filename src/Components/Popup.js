import React from 'react';
import Modal from 'react-modal'

function Popup(props) {
    return (
        <div>
            <Modal isOpen={props.call} 
                       ariaHideApp={false}
                       className="pop-content">
                           <p><b>{props.post.id}</b></p>
                           <p><b>{props.post.name}</b></p>
                           <p><b>{props.post.email}</b></p>
                           <p><b>{props.post.body}</b></p>
                <button onClick={props.close}>close</button>
            </Modal>
        </div>
    );
}

export default Popup;