import React from 'react';
import {Container,Title,List,Item,Picture,Name} from './styles/profiles';

const Profiles=({children,...restProps})=>{

    return <Container {...restProps}>{children}</Container> ;
}

Profiles.Title = function ProfilesTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>;
}
Profiles.List = function ProfilesList({children,...restProps}){
    return <List {...restProps}>{children}</List>;
}
Profiles.User = function ProfileUser({children,...restProps}){
    return <Item {...restProps}>{children}</Item>;
}
Profiles.Picture = function ProfilePicture({...restProps}){
    return <Picture {...restProps} src={'/images/users/2.png' }/> ; 
}
Profiles.Name = function ProfilesName({children,...restProps}){
return <Name {...restProps}>{children}</Name>;
}

export default Profiles;