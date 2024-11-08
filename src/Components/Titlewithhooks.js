import React, { useState } from 'react';
import title from './Title';

function Titlewithhooks() {
    const[titleindex,settitleindex]=useState(0)
    const[title_hide,settitlehide]=useState(false)

    const handleclick = ()=>{
        settitleindex(titleindex+1)
         
         
        
        
        
        
    }
    const decrement = ()=>{
        if (titleindex>0){

            settitleindex(titleindex-1)
        }
    }
    const hide=()=>{
        if (title_hide == false){
            settitlehide(true)
        }else{
            settitlehide(false)

        }

    }
    const zero=()=>{
        settitleindex(0)

    }
    return(
        <div>

        
            <p>you have clicked {titleindex}</p>
            <button onClick={handleclick} className='btn'>clickme</button>
            {titleindex > 0 && (
                

                
        <>
        {

        }
          <button onClick={decrement} className='btn'>Decrement</button>
          <p>This paragraph appears after the decrement button</p>
          <button onClick={zero} className='btn'>zero</button>
        </>
        
      )

      }{
        titleindex %10 == 0 && (
            <p>you are now in the {titleindex}'s </p>
        )
      }
        
        {title_hide==true? (
                        <button onClick={hide} className='btn'>clickme</button>
           
          ):(

            <>
            <p>heelo this is the testing button </p>
            <button onClick={hide} className='btn'>Hide</button>
            
            
            </>
          )
                      
           

          }
        </div>
                    

                    
                

            


    )


    







}

export default Titlewithhooks;
