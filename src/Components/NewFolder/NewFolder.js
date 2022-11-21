import React from 'react';

const NewFolder = (props) => {
    const {name} = props.data;

    const handleDelete = () =>{
        console.log('Clicked : Delete')
    }
    const handleCreate = () =>{
        document.getElementById("inputForm").style.display = 'block';
    }
    const handleCancel = () => {
        document.getElementById("inputForm").style.display = 'none';
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

        {/* <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup> */}

        <div>
            <form id='inputForm' style={{display: 'none'}}>
                <label for="name">Create Folder <br/></label>
                <input type="text" name='name' id='name' placeholder='Folder Name'/> <br />

                <button onClick={handleCancel} type="button">Cancel</button> 
                <button type="submit">Create</button>
                
            </form>
        </div>
        </>
    );
};

export default NewFolder;