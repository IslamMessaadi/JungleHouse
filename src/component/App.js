import { useEffect, useState} from 'react';
import MediaCard from './MediaCard';
import Header from './Header';
import nowApi from '../utils/now';
import AvatarBlock from './AvatarBlock';

const App=(props)=>{

    const [data, setData]= useState([]);
    
    useEffect(()=>{
        nowApi.then(e=>{
            setData(e.data.result);
        });

    },[]);

    

    return (
        <div className="bg-cover">
            <Header/>
            <br/>
            <div className="container">
                <div className="row">
                    
                    <div className="col-4">
                        <h3 className="text-white">Jungle league</h3>
                       <AvatarBlock data={data}/>
                    </div>

                    <div className="col-8 d-flex flex-row bd-highlight mb-3 flex-wrap">
                        {data.map(profile =>{
                                return <MediaCard key={profile.hero} hero={profile.hero} title={profile.title} state={profile.state} motto={profile.motto} img={profile.img}/>;
                        })}
                    </div>

                </div>

                <div className="row">
                </div>
                
            </div>
        </div>
    );
}

export default App;