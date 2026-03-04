import { useState } from 'react'
import { ProfileDataContext } from './ProfileContext'
export function ProfileProvider({children}){
    const [profileData, setProfileData] = useState([{id:1, name:"Snehal Tayade", userName:'SnehalTayade', address:'Leela Recidency'}])
    function EditProfile(name){
        console.log('edit profile', name)
        setProfileData(profileData.map((item) => ({...item,name:name})))
    }
    return(
        <ProfileDataContext.Provider value={{profileData, EditProfile}}>
            {children}
        </ProfileDataContext.Provider>
    )
}
