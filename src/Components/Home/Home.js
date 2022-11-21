import React from 'react';
import NewFolder from '../NewFolder/NewFolder';

const folderInfo = [
    {
        name: 'Folder 1',
        id: 110   
    },
    {
        name: 'Folder 2',
        id: 122   
    },
    {
        name: 'Folder 3',
        id: 113   
    },
    {
        name: 'Folder 4',
        id: 114   
    },
    
]

const Home = () => {
    return (
        <div>
            <h1>Home Area</h1>
            <h3>Folder createRoot</h3>

            
                {
                    folderInfo.map(info => <NewFolder data={info} key={info.id}></NewFolder>)
                }
          
        </div>
    );
};

export default Home;