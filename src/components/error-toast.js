import React from 'react';
import { toast } from 'react-toastify';

const ErrorToast = (props) => {
    const errorItems = props.errors.filter((error) => {
        return <li className="toast__error">{error}</li>;
    });

    return (
        <div className="toast__container">
            <span className="toast__title">Error</span>
            <ul className="toast__list">
                {errorItems}
            </ul>
        </div>
    );
};

export default ErrorToast;