import "../style.css";
import Avatar from 'react-avatar';

const AvatarBlock=(props)=>{
    const {data}= props;
    return (
        <div>
            {data.map(profile =>{
                return <Avatar name={profile.hero} />;
            })}
        </div>
    );
}

export default AvatarBlock;