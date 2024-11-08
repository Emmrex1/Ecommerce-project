import { MyContext } from '@/App';
import { DialogDemo } from '@/myComponents/DialogDemo';
import React, { useEffect, useState } from 'react';


const SignInPage = () => {
  const context = useContext(MyContext)  
  
  useEffect(() => {
    context.setIsHeaderShow(false);
  },[]);
    return (
           <section className='section'>
            <div className='container'>
                <div className='row'>

                </div>
   
            </div>
             
           </section>
  )
}

export default SignInPage;
