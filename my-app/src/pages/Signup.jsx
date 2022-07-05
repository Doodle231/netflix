import React from 'react'

const Signup = () => {
  return (
    <>
   <div className="w-full h-screen">
   <img className = "hidden sm:block absolute w-full h-full object-cover"src ="https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/2793a38d-317d-4d46-a8ac-574f9511ff5d/KR-en-20220627-popsignuptwoweeks-perspective_alpha_website_medium.jpg "></img>
   <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50"> 
    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
      <div className="max-w-[320px] mx-auto py-16">
       <h1 className ="text-3xl font-bold">Sign Up</h1>
        <form className='w-full flex flex-col py-4'>
          <input className = "py-4 my-2  bg-gray-700 rounded " type = "email" placeholder='Email' autocomplete ="email"/>
          <input className = "py-4 my-2  bg-gray-700 rounded " type = "password" placeholder="Password" autocomplete ="password"></input>
          <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
       <div className ="flex justify-between items-center text-sm text-gray-600">
        <p><input className ="mr-2" type ="checkbox"/>  Remember Me </p>
        <p>Need Help?</p>
       </div>
       <p><span>Already subsribed to Netflix? </span></p>
        </form>


      </div>

    </div>


    </div>
   </div>

    </>
  )
}

export default Signup