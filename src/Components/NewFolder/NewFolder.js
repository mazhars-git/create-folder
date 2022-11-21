import React from 'react';

const NewFolder = (props) => {
    const {name} = props.data;
    return (
        <div>
            <ul>
                <li>
                    {name}
                </li>
            </ul>
        </div>
    );
};

export default NewFolder;