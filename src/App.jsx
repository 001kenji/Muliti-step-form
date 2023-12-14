import { createContext, useContext, useEffect, useState } from 'react'

import './App.css'
import { FaCircle } from "react-icons/fa";

import arcade from '../assets/images/icon-arcade.svg'
import advancedimg from '../assets/images/icon-advanced.svg'

import thankImg from '../assets/images/icon-thank-you.svg'
import proImg from '../assets/images/icon-pro.svg'
import { render } from 'react-dom';
function App() {




  const [current, setcurrent] = useState(0)

  const [count, setCount] = useState(0)
  const [form_choice, setFormChoice] = useState(0)

  const buttonStyler1 = {
    color : form_choice == 1 ? 'black' : 'white',
    backgroundColor : form_choice == 1 ? ' rgb(165 243 252)' : 'transparent'
  }
  const buttonStyler2 = {
    color : form_choice == 2 ? 'black' : 'white',
    backgroundColor : form_choice == 2 ? ' rgb(165 243 252)' : 'transparent'
  }
  const buttonStyler3 = {
    color : form_choice == 3 ? 'black' : 'white',
    backgroundColor : form_choice == 3 ? ' rgb(165 243 252)' : 'transparent'
  }
  const buttonStyler4 = {
    color : form_choice == 4 ? 'black' : 'white',
    backgroundColor : form_choice == 4 ? ' rgb(165 243 252)' : 'transparent'
  }

  const [generalData,setgeneralData] =  useState({
    name : '',
    emailAdddress : "",
    phoneNumber : "",
    planarcade : false,
    planadvanced : false,
    planPro : false,
    planperiod : 'Monthly',
    addOnonlineService : false,
    addOnlargeStorage : false,
    addOncustomizableProfile : false,
})

const generalDataManager = {
  plan : generalData.planarcade ?  'Arcade' : generalData.planadvanced ? 'Advanced' : generalData.planPro ? 'Pro' : 'N/A',
  planP : generalData.planperiod != '' ? generalData.planperiod : 'N/A',
  arcadeCost : generalData.planperiod == 'Monthly' ? 9 : 90,
    advanceCost : generalData.planperiod == 'Monthly' ? 12 : 120,
    proPrice : generalData.planperiod == 'Monthly' ? 15 : 150,
    onlineP : generalData.planperiod == 'Monthly' ? 1 : 10,
    storageP : generalData.planperiod == 'Monthly' ? 2 : 20,
    CustomizeP : generalData.planperiod == 'Monthly' ? 3 : 30,
    AddonTotal : 0,
    planTotal : 0,
    grandTotal : ''
}

const arcadeStyle = {
  backgroundColor : generalData.planarcade == true ? 'rgb(129 140 248)' : 'rgb(241 245 249)'
}
const advancedStyler = {
  backgroundColor : generalData.planadvanced == true ? 'rgb(129 140 248)' : 'rgb(241 245 249)'
}
const proStyler = {
  backgroundColor : generalData.planPro == true ? 'rgb(129 140 248)' : 'rgb(241 245 249)'
}


    if(generalData.addOnonlineService == true && generalData.addOnlargeStorage == true && generalData.addOncustomizableProfile == true){
       generalDataManager.AddonTotal = generalDataManager.onlineP + generalDataManager.storageP + generalDataManager.CustomizeP
       
    }else if(generalData.addOnonlineService && generalData.addOnlargeStorage){
       generalDataManager.AddonTotal = generalDataManager.onlineP + generalDataManager.storageP 
       
    }else if( generalData.addOnlargeStorage && generalData.addOncustomizableProfile){
    generalDataManager.AddonTotal   =  generalDataManager.storageP + generalDataManager.CustomizeP
    
    }else if(generalData.addOnonlineService && generalData.addOncustomizableProfile){
      generalDataManager.AddonTotal   =  generalDataManager.onlineP + generalDataManager.CustomizeP
    }else if(generalData.addOncustomizableProfile){
      generalDataManager.AddonTotal   =  generalDataManager.CustomizeP
    }else if(generalData.addOnlargeStorage) {
      generalDataManager.AddonTotal   =  generalDataManager.storageP 
    
    }else if(generalData.addOnonlineService) {
      generalDataManager.AddonTotal   =  generalDataManager.onlineP 
    
    }

   if(generalData.planPro == true){
    console.log('pro')
     generalDataManager.planTotal   =  generalDataManager.proPrice
   }else if(generalData.planadvanced  ==true) {
    console.log('advaced')
     generalDataManager.planTotal   =  generalDataManager.advanceCost 
   
   }else if(generalData.planarcade == true) {
    console.log('arcade')
     generalDataManager.planTotal   =  generalDataManager.arcadeCost 
   
   }



const PlanTFunc = () => {
  if(generalData.planarcade && generalData.planadvanced && generalData.planPro){
    var t = generalDataManager.arcadeCost + generalDataManager.advanceCost + generalDataManager.proPrice
    generalDataManager.planTotal = t 
  }else if(generalData.planarcade && generalData.planadvanced){
    var t = generalDataManager.arcadeCost + generalDataManager.advanceCost 
    generalDataManager.planTotal = t 
  }else if( generalData.planadvanced && generalData.planPro){
    var t =  generalDataManager.storageP + generalDataManager.proPrice
    generalDataManager.planTotal = t 
  }
}


  generalDataManager.grandTotal = generalDataManager.AddonTotal + generalDataManager.planTotal




  function Back () {
     if(form_choice == 1){
        setFormChoice(4)
      }else if(form_choice == 0) {
        setFormChoice(1)
      }else {
        setFormChoice((e) => e-1)
      }
  }

  const  PlanVal = createContext()

  function AddonVal (props) {
    

  }

  

  function NextStepFunc(props) {
      // if(form_choice == 4){
      //   setFormChoice(1)
      // }else if(form_choice == 0) {
      //   setFormChoice(1)
      // }else {
      //   setFormChoice((e) => e+1)
      // }
      if(props == 'personal') {
        event.preventDefault()
        
        if(form_choice == 5){
        setFormChoice(1)
      }else if(form_choice == 0) {
        setFormChoice(1)
      }else {
        setFormChoice((e) => e+1)
      }
        
      }
      if(props == 'plan' ){
           if(form_choice == 5){
              setFormChoice(1)
            }else if(form_choice == 0) {
              setFormChoice(1)
            }else {
              setFormChoice((e) => e+1)
            }
      }

  }
  function FormSubmit(event) {
    event.preventDefault()
  }
 
  function ChangesPersonal(event){
    const {name, value, type} = event.target
     
        setgeneralData((e) => {
          return {
            ...e,
            name : value
          }
        })
        console.log(name + ";" + value)
        console.log(type)
      }
  function PersonalInf () {
    const [generalData,setgeneralData] =  useState({
      name : '',
      emailAdddress : "",
      phoneNumber : ""
  })
  
  
  // function Changes(event){
  //   const {name, value, type} = event.target
     
  //       setgeneralData((e) => {
  //         return {
  //           ...e,
  //           name : value
  //         }
  //       })
  //       console.log(name + ";" + value)
  //       console.log(type)
  //     }
    

    // return (
    //   <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
    //     <div id='personal-heading-div'>{/* heading div */}
    //           <h1 className=' text-sky-900 text-3xl font-semibold'>Personal info</h1>
    //           <blockquote className=' font-semibold text-gray-400 text-opacity-80  text-lg'>Please provide your name, email address, and phone number.</blockquote>
    //     </div>
        
    //     <form   id='personalForm'  >
    //           <label htmlFor="name">Name</label>
    //               <input name='gname' className=' ' placeholder=' eg. Stephen King' onChange={Changes} id='name' type="text" />
    //           <label htmlFor="emailAddress">Email Address</label>
    //                 <input required placeholder='eg. stephenking@lorem.com' onChange={Changes} id='emailAddress' type="email" />
    //           {/* {errors.emailAdddress && <p id='error' >{errors.emailAdddress?.message}</p>} */}
    //           <label htmlFor="phone">Phone Number</label>
    //                 <input placeholder='eg. + 1 234567890' onChange={Changes} id='phone' type="number" />
        
    //       <div>
    //       <div id='right-wing-step-form-div'>{/* right wing next step form */}

    //       <button   onClick={() => NextStepFunc('personal') } type='submit'  className=' font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

    //       </div>
    //       </div>
    //     </form>

    //   </div>
      
    // )
  }

  

  function ChangesPlan(props){
        // setplandata((e) => {
        //   return {
        //     ...e,
        //     name : value
        //   }
        // })
        if(props == 'planarcade'){
          setgeneralData((e) => {
            return {
              ...e,
              planarcade : generalData.planarcade == false ? true : false,
              planadvanced : false,
              planPro : false
            }
          })
            
        }
        if(props == 'planadvanced'){
          setgeneralData((e) => {
            return {
              ...e,
              planarcade : false,
              planPro : false,
              planadvanced : generalData.planadvanced == false ? true : false
            }
          })
        }
        if(props == 'planPro'){
          setgeneralData((e) => {
            return {
              ...e,
              planadvanced : false,
              planarcade : false,
              planPro : generalData.planPro == false ? true : false
            }
          })
        }
       
        if(props == 'planperiod'){
          // setgeneralData((e) => {
          //   return {
          //     ...e,
          //     planperiod : generalData.planperiod == 'Monthly' ? 'Yearly' : 'Monthly'
          //   }
            
          // })

          if(current == 0) {
            setcurrent(1)
            setgeneralData((e) => {
              return {
                ...e,
                planperiod : 'Yearly'
              }
            })
           console.log(generalData.planperiod)
          }else {
            setcurrent(0)
            setgeneralData((e) => {
              return {
                ...e,
                planperiod : 'Monthly'
              }
            })
            console.log(generalData.planperiod)
          }
        }

       // console.log(type)
      }
  function Plan () {
    const [plandata,setplandata] =  useState({
      planarcade : false,
      planadvanced : false,
      planPro : false,
      planperiod : current == 0 ? 'Monthly' : 'Yearly',
  })
  
  
  // function ChangesPlan(props){
  //       // setplandata((e) => {
  //       //   return {
  //       //     ...e,
  //       //     name : value
  //       //   }
  //       // })
  //       if(props == 'planarcade'){
  //         setplandata((e) => {
  //           return {
  //             ...e,
  //             planarcade : plandata.planarcade == false ? true : false
  //           }
  //         })
  //       }
  //       if(props == 'planadvanced'){
  //         setplandata((e) => {
  //           return {
  //             ...e,
  //             planadvanced : plandata.planadvanced == false ? true : false
  //           }
  //         })
  //       }
  //       if(props == 'planPro'){
  //         setplandata((e) => {
  //           return {
  //             ...e,
  //             planPro : plandata.planPro == false ? true : false
  //           }
  //         })
  //       }
  //       if(props == 'planperiod'){
  //         // setgeneralData((e) => {
  //         //   return {
  //         //     ...e,
  //         //     planperiod : generalData.planperiod == 'Monthly' ? 'Yearly' : 'Monthly'
  //         //   }
            
  //         // })

  //         if(current == 0) {
  //           setcurrent(1)
           
  //         }else {
  //           setcurrent(0)
  //         }
  //       }

  //      // console.log(type)
  //     }
     
       //console.log(plandata)
    // return (
    //   <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
    //   <PlanVal.Provider value={plandata}>

    //   </PlanVal.Provider>
    //     <div id='personal-heading-div'>{/* heading div */}
    //           <h1 className=' text-sky-900 text-3xl font-semibold'>Select your plan</h1>
    //           <blockquote className=' font-semibold text-gray-400 text-opacity-80  text-lg'>You have the option of monthly or yearly billing.</blockquote>
    //     </div>
    //     <form onSubmit={FormSubmit} id='planInfo'  >
             
    //             <div name='planarcade' onClick={() => Changes('planarcade')} className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='arcade'>
    //               <img src={arcade} alt="" />
    //               <span className=' text-sky-950 font-semibold text-lg'>Arcade <p className=' text-sm font-semibold text-gray-400'>$9/mo</p></span>
    //             </div>
    //             <div onClick={() => Changes('planadvanced')} className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='advanced'>
    //               <img src={advancedimg} alt="" />
    //               <span className=' text-sky-950 font-semibold text-lg'>Advanced <p className=' text-sm font-semibold text-gray-400'>$12/mo</p></span>
    //             </div>
    //             <div onClick={() => Changes('planPro')} className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='pro'>
    //               <img src={proImg} alt="" />
    //               <span className=' text-sky-950 font-semibold text-lg'>Pro <p className=' text-sm font-semibold text-gray-400'>$15/mo</p></span>
    //             </div>
    //             <div className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='period'>
    //             <span className={` text-sky-950 font-semibold text-md`}>Monthly </span>
    //             <p className=' bg-sky-900 rounded-full text-sky-950 font-semibold text-lg'><FaCircle onClick={() => Changes('planperiod')} style={{transform: `translateX(${current * 300}%)`}} className={` transition ease-in-out duration-75   text-slate-100 h-3`} /></p>
    //               <span className={` text-sky-950 font-semibold text-md`}>Yearly</span>
    //             </div>
                
              
    //       <div>
    //       <div id='right-wing-step-form-div'>{/* right wing next step form */}
    //         <span onClick={Back} className='  text-base text-gray-400'>Go Back</span>
    //       <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className=' font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

    //       </div>
    //       </div>
    //     </form>

    //   </div>
      
    // )
  }

   function ChangesAddon(event){
    
    const {name,checked, value, type} = event.target
     
        setgeneralData((e) => {
          return {
            ...e,
            [name] : checked ? true : false
          }
          
        })
       
        console.log(checked)
      }

  function Addon () {
    const [generalData,setgeneralData] =  useState({
      addOnonlineService : false,
      addOnonlineServiceCost : 1,
      addOnlargeStorage : false,
      addOnlocalStorageCost : 2,
      addOncustomizableProfile : false,
      addOncustomizableProfileCost : 3
  })
  
  
  // function ChangesAddon(event){
    
  //   const {name,checked, value, type} = event.target
     
  //       setgeneralData((e) => {
  //         return {
  //           ...e,
  //           [name] : checked ? true : false
  //         }
          
  //       })
       
  //       console.log(checked)
  //     }
     console.log(generalData)

    // return (
    //   <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
    //     <div id='personal-heading-div'>{/* heading div */}
    //           <h1 className=' text-sky-900 text-3xl font-semibold'>Pick add-ons</h1>
    //           <blockquote className=' font-semibold text-gray-400 text-opacity-80  text-lg'>Add-ons help enhance your gamming experience.</blockquote>
    //     </div>
    //     <form onSubmit={FormSubmit} id='planInfo'  >
             
    //             <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='addon'>
    //               <input name='addOnonlineService' onChange={Changes}  className='  rounded-md ' type="checkbox" />
    //               <span className=' text-sky-950 font-bold text-md'>Online service <p className=' text-sm font-semibold text-gray-400'>Access to multiplayer games</p></span>
    //               <p className=' font-semibold text-indigo-600 text-base'>+$1/mo</p>
    //             </div>
    //             <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='addon'>
    //               <input name='addOnlargeStorage' onChange={Changes} className='  rounded-md '  type="checkbox" />
    //               <span className=' text-sky-950 font-bold text-md'>Larger storage <p className=' text-sm font-semibold text-gray-400'>Extra 1TB of cloud save</p></span>
    //               <p className=' font-semibold text-indigo-600 text-base'>+$2/mo</p>
    //             </div>
    //             <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='addon'>
    //               <input name='addOncustomizableProfile' onChange={Changes} className='  rounded-md '  type="checkbox" />
    //               <span className=' text-sky-950 font-bold text-md'>Customizable profile <p className=' text-sm font-semibold text-gray-400'>Custom theme on your profile</p></span>
    //               <p className=' font-semibold text-indigo-600 text-base'>+$3/mo</p>
    //             </div>

              
              
    //       <div>
    //       <div id='right-wing-step-form-div'>{/* right wing next step form */}
    //         <span onClick={Back} className='  text-base text-gray-400'>Go Back</span>
    //       <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className=' font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

    //       </div>
    //       </div>
    //     </form>

    //   </div>
      
    // )
  }
  

  function FinishUp () {
  

  const plan = useContext(PlanVal)
  console.log(plan)
  

  function Changes(event){
    const {name, value, type} = event.target
     
        setgeneralData((e) => {
          return {
            ...e,
            name : value
          }
        })
        console.log(name + ";" + value)
        console.log(type)
      }
    

    // return (
    //   <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
    //     <div id='personal-heading-div'>{/* heading div */}
    //           <h1 className=' text-sky-900 text-3xl font-semibold'>Fishishing up</h1>
    //           <blockquote className=' font-semibold text-gray-400 text-opacity-80  text-lg'>Double-check everything looks OK before confirming.</blockquote>
    //     </div>
    //     <form onSubmit={FormSubmit} id='planInfo'  >
             
    //             <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='finish'>
    //               <span className=' text-indigo-800  flex flex-row gap-5'><p className=' font-semibold text-base'>{}</p><p className=' font-semibold text-base'>{}</p></span>
    //               <div className=' flex flex-row justify-between pl-1 pr-1 w-[100%]'>
    //                   <p className=' underline underline-offset-1' onClick={() => setFormChoice(2)}>Change </p>
    //                   <span className="">${}/yr</span>

    //               </div>
    //             {/* {getValues('addOn.onlineService') == true ?   <div>
    //               <span>Online service  <p>+$1/mo</p></span>
    //               </div> : ''}
    //               {getValues('addOn.largeStorage') == true ? <div>
    //               <span>Large storage  <p>+$2/mo</p></span>
    //               </div> : ''}
    //               {getValues('addOn.customizableProfile') == true ? <div>
    //               <span>Customizable profile  <p>+$3/mo</p></span>
    //               </div> : ''} */}

    //             </div>
               
    //             <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='addon'>
    //               <span className=' text-sky-950 font-bold text-md'>Total</span>
    //               <p className=' font-semibold text-indigo-600 text-base'>+$</p>
    //             </div>

              
              
    //       <div>
    //       <div id='right-wing-step-form-div'>{/* right wing next step form */}
    //         <span onClick={Back} className='  text-base text-gray-400'>Go Back</span>
    //       <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className=' font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

    //       </div>
    //       </div>
    //     </form>

    //   </div>
      
    // )
  }


  return (
    
    <>

      <div className='  ' id='universal-form-div'>{/* universal form */}

          <div id='form-container-div'>
            <div id='left-wing-div'>{/* left wing form */}
              <blockquote><button  style={buttonStyler1} className={` ${form_choice == 1 ? 'text-black bg-cyan-200' : ' bg-transparent'} hover:bg-cyan-200 bg-transparent font-semibold text-lg hover:text-black hover:border-transparent text-slate-200 rounded-full p-2 lg:w-10 w-12`} onClick={() => setFormChoice(1)}>1</button> <span className=' text-sm text-slate-100 font-semibold'> <p className=' text-gray-300'>STEP 1</p>YOUR INFO  </span></blockquote>
              <blockquote><button style={buttonStyler2} className={` ${form_choice == 2 ? 'text-black bg-cyan-200' : ' bg-transparent'} hover:bg-cyan-200 bg-transparent font-semibold text-lg hover:text-black hover:border-transparent text-slate-200 rounded-full p-2  lg:w-10 w-12`} onClick={() => setFormChoice(2)}>2</button> <span className='text-sm text-slate-100 font-semibold'> <p className=' text-gray-300'>STEP 2</p>SELECT PLAN  </span></blockquote>
              <blockquote><button style={buttonStyler3} className={` ${form_choice == 3 ? 'text-black bg-cyan-200' : ' bg-transparent'} hover:bg-cyan-200 bg-transparent font-semibold text-lg hover:text-black hover:border-transparent text-slate-200 rounded-full p-2  lg:w-10 w-12`} onClick={() => setFormChoice(3)}>3</button> <span className='text-sm text-slate-100 font-semibold'> <p className=' text-gray-300'>STEP 3</p>ADD-ONS  </span></blockquote>
              <blockquote><button style={buttonStyler4} className={` ${form_choice == 4 ? 'text-black bg-cyan-200' : ' bg-transparent'} hover:bg-cyan-200 bg-transparent font-semibold text-lg hover:text-black hover:border-transparent text-slate-200 rounded-full p-2  lg:w-10 w-12`} onClick={() => setFormChoice(4)}>4</button> <span className='text-sm text-slate-100 font-semibold'> <p className=' text-gray-300'>STEP 4</p>SUMMARY  </span></blockquote>
            </div>
            <div id='right-wing-div'>{/* right wing form */}

                <div id='right-wing-disp-form-div'>{/* right wing displayer form */}
                      {form_choice == 1 ? <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
        <div id='personal-heading-div'>{/* heading div */}
              <h1 className=' text-sky-900 sm:text-5xl lg:text-3xl lg:font-bold sm:text-center lg:text-left text-3xl font-semibold'>Personal info</h1>
              <blockquote className=' font-semibold text-gray-400 text-opacity-80 sm:text-xl lg:text-base  text-lg'>Please provide your name, email address, and phone number.</blockquote>
        </div>
        
        <form   id='personalForm'  >
              <label htmlFor="name">Name</label>
                  <input name='gname' className=' ' placeholder=' eg. Stephen King' onChange={ChangesPersonal} id='name' type="text" />
              <label htmlFor="emailAddress">Email Address</label>
                    <input required placeholder='eg. stephenking@lorem.com' onChange={ChangesPersonal} id='emailAddress' type="email" />
              {/* {errors.emailAdddress && <p id='error' >{errors.emailAdddress?.message}</p>} */}
              <label htmlFor="phone">Phone Number</label>
                    <input placeholder='eg. + 1 234567890' onChange={ChangesPersonal} id='phone' type="number" />
        
          <div>
          <div className='' id='right-wing-step-form-div'>{/* right wing next step form */}

          <button   onClick={() => NextStepFunc('personal') } type='submit'  className=' ml-16 lg:rounded-md font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

          </div>
          </div>
        </form>

      </div> : form_choice == 2 ?   <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
  
        <div id='personal-heading-div'>{/* heading div */}
              <h1 className=' text-sky-900 sm:text-5xl lg:text-3xl lg:font-bold text-3xl font-semibold'>Select your plan</h1>
              <blockquote className=' font-semibold text-gray-400 text-opacity-80 lg:text-lg  text-lg'>You have the option of monthly or yearly billing.</blockquote>
        </div>
        <form onSubmit={FormSubmit} id='planInfo'  >
             <div className=' gap-2 flex flex-col w-full lg:flex-row'>
                <div style={arcadeStyle} name='planarcade' onClick={() => ChangesPlan('planarcade')} className={` ${generalData.planarcade == true ? ' border-2  bg-indigo-400' : ''}  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2`} id='arcade'>
                  <img src={arcade} alt="" />
                  <span className=' text-sky-950 sm:text-2xl font-semibold text-lg'>Arcade <p className=' text-sm sm:text-lg font-semibold text-gray-400'> {generalData.planperiod == 'Monthly' ?' $9/mo' : '$90/yr' }</p><p className=' text-base sm:text-lg font-semibold'>{generalData.planperiod == 'Monthly' ? '' : '2 months free' }</p></span>
                </div>
                <div style={advancedStyler} onClick={() => ChangesPlan('planadvanced')} className={` ${generalData.planadvanced == true ? ' border-2  bg-indigo-400' : ''} overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2`} id='advanced'>
                  <img src={advancedimg} alt="" />
                  <span className=' text-sky-950  sm:text-2xl font-semibold text-lg'>Advanced <p className=' text-sm sm:text-lg font-semibold text-gray-400'>{generalData.planperiod == 'Monthly' ?'$12/mo' : '$120/yr' }</p><p className=' text-base sm:text-lg font-semibold'>{generalData.planperiod == 'Monthly' ? '' : '2 months free' }</p></span>
                </div>
                <div style={proStyler} onClick={() => ChangesPlan('planPro')} className={` ${generalData.planPro == true ? ' border-2  bg-indigo-400' : ''}  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2`} id='pro'>
                  <img src={proImg} alt="" />
                  <span className=' text-sky-950 sm:text-2xl font-semibold text-lg'>Pro <p className=' text-sm sm:text-lg font-semibold text-gray-400'>{generalData.planperiod == 'Monthly' ?'$15/mo' : '$150/yr' }</p><p className=' text-base sm:text-lg font-semibold'>{generalData.planperiod == 'Monthly' ? '' : '2 months free' }</p></span>
                </div>
                </div>
                <div className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='period'>
                <span className={` text-sky-950 sm:text-xl font-semibold text-md`}>Monthly </span>
                <p className=' bg-sky-900 rounded-full text-sky-950 font-semibold text-lg'><FaCircle onClick={() => ChangesPlan('planperiod')} style={{transform: `translateX(${current * 300}%)`}} className={` transition ease-in-out duration-75 sm:h-5   text-slate-100 h-3`} /></p>
                  <span className={` text-sky-950 sm:text-xl font-semibold text-md`}>Yearly</span>
                </div>
                
              
          <div>
          <div id='right-wing-step-form-div'>{/* right wing next step form */}
            <span onClick={Back} className=' sm:text-lg  text-base text-gray-400'>Go Back</span>
          <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className=' sm:text-lg font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

          </div>
          </div>
        </form>

      </div> : form_choice == 3 ? <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
        <div id='personal-heading-div'>{/* heading div */}
              <h1 className=' text-sky-900 sm:text-5xl sm:text-center text-3xl font-semibold'>Pick add-ons</h1>
              <blockquote className=' font-semibold sm:text-xl text-gray-400 text-opacity-80  text-lg'>Add-ons help enhance your gamming experience.</blockquote>
        </div>
        <form onSubmit={FormSubmit} id='planInfo'  >
             
                <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md sm:p-4 p-2' id='addon'>
                  <input checked={generalData.addOnonlineService == true} name='addOnonlineService' onChange={ChangesAddon}  className='  rounded-md ' type="checkbox" />
                  <span className=' text-sky-950 font-bold sm:text-xl text-md'>Online service <p className=' text-sm font-semibold text-gray-400'>Access to multiplayer games</p></span>
                  <p className=' font-semibold text-indigo-600 text-base'>+${generalDataManager.onlineP}/mo</p>
                </div>
                <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md  sm:p-4 p-2' id='addon'>
                  <input checked={generalData.addOnlargeStorage == true} name='addOnlargeStorage' onChange={ChangesAddon} className='  rounded-md '  type="checkbox" />
                  <span className=' text-sky-950 font-bold sm:text-xl text-md'>Larger storage <p className=' text-sm font-semibold text-gray-400'>Extra 1TB of cloud save</p></span>
                  <p className=' font-semibold text-indigo-600 text-base'>+${generalDataManager.storageP}/mo</p>
                </div>
                <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md  sm:p-4 p-2' id='addon'>
                  <input checked={generalData.addOncustomizableProfile == true} name='addOncustomizableProfile' onChange={ChangesAddon} className='  rounded-md '  type="checkbox" />
                  <span className=' text-sky-950 font-bold sm:text-xl text-md'>Customizable profile <p className=' text-sm font-semibold text-gray-400'>Custom theme on your profile</p></span>
                  <p className=' font-semibold text-indigo-600 text-base'>+${generalDataManager.CustomizeP}/mo</p>
                </div>

              
              
          <div>
          <div className='addonBtn' id='right-wing-step-form-div'>{/* right wing next step form */}
            <span onClick={Back} className='  text-base text-gray-400'>Go Back</span>
          <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className=' font-semibold bg-indigo-950 text-slate-50 p-2 rounded-sm'>Next Step</button>

          </div>
          </div>
        </form>

      </div> : form_choice == 4 ? <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
        <div id='personal-heading-div'>{/* heading div */}
              <h1 className=' text-sky-900 sm:text-5xl sm:text-center text-3xl font-semibold'>Fishishing up</h1>
              <blockquote className=' font-semibold sm:text-xl text-gray-400 text-opacity-80  text-lg'>Double-check everything looks OK before confirming.</blockquote>
        </div>
        <form onSubmit={FormSubmit} id='planInfo'  >
             
                <div  className='   bg-slate-100 bg-opacity-60 rounded-md sm:p-4 p-2' id='finish'>

                  {generalData.planarcade == true ? <div>
                    <span className=' text-indigo-800  flex flex-row gap-5'><p className='sm:text-lg font-semibold text-base'>{generalDataManager.plan}</p><p className=' font-semibold sm:text-lg text-base'>&#40;{generalDataManager.planP}&#41;</p></span>
                  <div className=' flex flex-row justify-between pl-1 pr-1 w-[100%]'>
                      <p className=' underline underline-offset-1' onClick={() => setFormChoice(2)}>Change </p>
                      <span className="">${generalDataManager.arcadeCost}/yr</span>

                  </div>
                  </div> : generalData.planadvanced == true ? <div>
                    <span className=' text-indigo-800  flex flex-row gap-5'><p className='sm:text-lg font-semibold text-base'>Advanced</p><p className=' font-semibold sm:text-lg text-base'>&#40;{generalDataManager.planP}&#41;</p></span>
                  <div className=' flex flex-row justify-between pl-1 pr-1 w-[100%]'>
                      <p className=' text-gray-400 font-semibold underline underline-offset-1' onClick={() => setFormChoice(2)}>Change </p>
                      <span className="">${generalDataManager.advanceCost}/yr</span>

                  </div>
                  </div> : generalData.planPro == true ? <div>
                    <span className=' text-indigo-800  flex flex-row gap-5'><p className='sm:text-lg font-semibold text-base'>Pro</p><p className=' font-semibold sm:text-lg text-base'>&#40;{generalDataManager.planP}&#41;</p></span>
                  <div className=' flex flex-row justify-between pl-1 pr-1 w-[100%]'>
                      <p className=' underline underline-offset-1' onClick={() => setFormChoice(2)}>Change </p>
                      <span className="">${generalDataManager.proPrice}/yr</span>

                  </div>
                  </div> : ''}
                  
                  
                {generalData.addOnonlineService == true ?   <div className='  '>
                  <span className='sm:text-lg  pl-2 pr-2 pb-2 pt-2 lg:flex lg:flex-row flex flex-row justify-between text-gray-400'>Online service  <p className=' text-right sm:text-base text-sm font-semibold text-slate-800'>+$ {generalDataManager.onlineP}/mo</p></span>
                  </div> : ''}
                  {generalData.addOnlargeStorage == true ? <div>
                  <span className='sm:text-lg pl-2 pr-2 pb-2 pt-2  flex flex-row justify-between text-gray-400'>Large storage  <p className=' text-right sm:text-base  text-sm font-semibold text-slate-800'>+${generalDataManager.storageP}/mo</p></span>
                  </div> : ''}
                  {generalData.addOncustomizableProfile == true ? <div>
                  <span className='sm:text-lg pl-2 pr-2 pb-2 pt-2  flex flex-row justify-between text-gray-400'>Customizable profile  <p className=' text-right sm:text-base  text-sm font-semibold text-slate-800'>+${generalDataManager.CustomizeP}/mo</p></span>
                  </div> : ''}

                </div>
               
                <div  className='  overflow-hidden  bg-slate-100 bg-opacity-60 rounded-md p-2' id='addon'>
                  <span className=' flex flex-row  text-sky-950 sm:text-lg  text-md'><p className=' sm:font-bold font-bold'>Total</p> &#40; {generalData.planperiod == 'Monthly' ? <p className=' font-normal sm:text-lg text-base text-gray-400'>per month</p> : 'per year'}  &#41;</span>
                  <p className=' font-semibold text-indigo-600 sm:text-lg text-base'>+$ {generalDataManager.grandTotal}</p>
                </div>

              
              
          <div>
          <div id='right-wing-step-form-div'>{/* right wing next step form */}
            <span onClick={Back} className='sm:text-lg  text-base text-gray-400'>Go Back</span>
          <button disabled={false}  onClick={() => NextStepFunc('plan') } type='submit'  className='sm:text-lg  font-semibold bg-indigo-600 text-slate-50 p-2 rounded-md'>Confirm</button>

          </div>
          </div>
        </form>

      </div> : <div className=' pb-8  bg-white rounded-md ' id='personal-universal-div'>
         <div className=' text-center' id='thank-heading-div'>{/* heading div */}
                <img src={thankImg} alt="" />
               <h1 className='sm:text-5xl lg:text-3xl text-center text-sky-900 text-3xl font-bold'>Thank you</h1>
               <blockquote className=' sm:text-lg lg:text-base text-center font-semibold text-gray-400 text-opacity-80  text-lg'>Thanks for confirming your subscription! We hope you have fun using our platform. If you eceer need support, please feel free to email us at support@loremgamimg.com</blockquote>
         </div>
         

       </div> }
                </div>

                
            </div>

          </div>

      </div>


    </>
  )
}

export default App
