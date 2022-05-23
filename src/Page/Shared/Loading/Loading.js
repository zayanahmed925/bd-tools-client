import React from 'react';
import { Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return (
        <div>
            <Oval color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Loading;