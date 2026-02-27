import ProfilePicture from '../assets/profile.png'
import Edit from '../assets/pencil.png'
function Profile(){
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
                    <div className="p-5 flex-grow flex flex-col justify-between">
                        <div className="flex flex-wrap border-slate-400 pb-2.5 mb-2.5">
                            <div class="border-b flex w-full flex flex-wrap">
                                <div className=" w-1/2 ">
                                    <p className="text-[#434549]">Username</p>
                                    <p>Snehal Tayade</p>
                                </div>
                                <div className=" w-1/2">
                                    <p className="text-[#434549]">Email</p>
                                    <p>Snehal@gmail.com</p>
                                </div>
                                <div className=" w-1/2 ">
                                    <p className="text-[#434549]">Address</p>
                                    <p>Leela recidency</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <button className='cursor-pointer'>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;