import React from "react";
import { createPortal } from "react-dom";
import '../modal/modal.css'

function Modal ({children}) {
    return createPortal (
        <div className="modal_container">
            <div className="modal_container_child">
            {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };