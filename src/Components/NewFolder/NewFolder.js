import React from 'react';

const NewFolder = (props) => {
    const {name} = props.data;

    const handleDelete = () =>{
        console.log('Clicked : Delete')
    }
    const handleCreate = () =>{
        console.log('Clicked : Create')
    }

    return (
        <>
        <div>
            <ul>
                <li>
                    {name} 
                    <button onClick={handleDelete}>X</button>
                    <button onClick={handleCreate}>+</button>
                </li>
            </ul>
        </div>

        <div>
            <form>
                <label for="name">Create Folder <br/></label>
                <input type="text" name='name' id='name' placeholder='Folder Name'/> <br />

                <button type="button">Cancel</button> 
                <button type="submit">Create</button>
                
            </form>
        </div>
        </>
    );
};

export default NewFolder;