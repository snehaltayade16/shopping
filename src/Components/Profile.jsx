import ProfilePicture from '../assets/profile.png'
import Edit from '../assets/pencil.png'
import { ProfileDataContext } from '../context/ProfileContext';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Profile(){
    const {profileData, EditProfile} = useContext(ProfileDataContext)
    const [editName, setEditName] = useState(false)
    const editNameRef = useRef(null)
    const navigate = useNavigate()
    function saveEditProfile(){
        if(!editNameRef.current.value) return;
        EditProfile(editNameRef.current.value)
        setEditName(false)
    }
    return(
        <div className="h-full w-full p-2.5">
            <div className="flex flex-col w-full pb-2.5 border-b border-slate-400 border-dashed">
                <p className="text-4xl font-bold leading-snug">Profile</p>
                <p className="text-sm text-slate-300">View all your profile details</p>
            </div>
            <div className="flex gap-2.5 h-3/5 mt-5">
                <div className="aspect-square p-2.5 border border-slate-600 rounded-lg flex flex-col ">
                    <p className="text-center pb-2.5">Snehal</p>
                    <div className="flex-grow aspect-sqaure relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-full aspect-square border border-[#4f5054] border-[20px] border-slate-800 rounded-full flex items-center justify-center">
                                <img src={ProfilePicture} className='h-full w-full object-fit'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col flex-1 border border-slate-600 rounded-lg p-2.5">
                    <div className="flex items-center justify-between">
                        <p>Bio & other details</p>
                        <div className='flex items-center gap-1.5'>
                            <div className="h-3.5 border-[3px] aspect-square rounded-full bg-green-500 border-[#284b2a]"></div>
                            <div className='h-8 bg-sky-500 border-4 border border-sky-700 aspect-square rounded-full cursor-pointer flex items-center justify-center'>
                                <img src={Edit} className='h-3 w-3'/>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex-grow flex flex-col justify-between">
                        <div className="ht-100 flex flex-wrap border-slate-400 pb-2.5 mb-2.5">
                            <div className="ht-100 flex w-full flex flex-wrap">
                                {
                                    profileData.map((items) => 
                                        (
                                            <div className='w-full flex' key={items.id}>
                                                <div className=" w-1/2 ">
                                                    <p className="text-[#434549]">Username</p>
                                                    {
                                                        editName ? <input placeholder='enter Name' type="text" autoFocus ref={editNameRef}></input> : <p onClick={() => setEditName(true)}>{items.name}</p>

                                                    }
                                                </div>
                                                <div className=" w-1/2">
                                                    <p className="text-[#434549]">Email</p>
                                                    <p>{items.userName}</p>
                                                </div>
                                                <div className=" w-1/2 ">
                                                    <p className="text-[#434549]">Address</p>
                                                    <p>{items.address}</p>
                                                </div>
                                            </div>
                                        )
                                    )
                                    
                                    
                                }
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <button className='cursor-pointer mr-2.5' onClick={() => saveEditProfile()}>Save</button>
                            <button className='cursor-pointer' onClick={() => navigate('/login')}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;