import reactDom, { useEffect, useState} from 'react';
import Card from './Card';
import Header from './Header';
import nowApi from '../utils/now';

const App=(props)=>{

    const [data, setData]= useState([]);
    
    useEffect(()=>{
        nowApi.then(e=>{
            setData(e.data.result);
        });

    },[]);

    

    return (
        <div className="container">
            <Header/>
            <div className="row">
                <div>
                    {data.map(profile =>{
                        return <Card key={profile.hero} hero={profile.hero} title={profile.title} state={profile.state} motto={profile.motto} img={profile.img}/>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;