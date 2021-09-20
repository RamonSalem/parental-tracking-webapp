import React from "react";
import './style.css';


interface Props {
 title: string;
}

const Example: React.FC<Props> = ({ title }) => {
    return (
        <div className="example">
            {title}
        </div>
    );
}

export default Example;