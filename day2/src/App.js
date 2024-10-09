
import React from 'react'
import { Greeting } from './Greeting/Greeting'
// import { Button } from './button/button'


// export const App = () => {

//   const yellowButton =()=>{
//     alert("yellow clicked")
//   }

//   const redButton = ()=>{
//     alert("red clicked")
//   }

//   const orangeButton = ()=>
//   {
//     alert("yellow clicked")
//   }

//   const blueButton = ()=>
//   {
//     alert("blue clicked")
//   }

//   return (

//     <>
//      <Button buttonText="Try this one"
//      backgroundColor="yellow"
//      click = {yellowButton}/>

//      <Button buttonText="very easy"
//      backgroundColor="red"
//      click = {redButton}/>

//      <Button buttonText="difficult to bihard"
//      backgroundColor="orange"
//      click = {orangeButton}/>

//      <Button buttonText="Try this one"
//      backgroundColor="blue"
//      click = {blueButton}/>
//      </>
//   )
// }



// export const App = () => {

//   let userAuthenticated = false;
//   return (
//     <div>
//       {userAuthenticated ? <h1>user allowed</h1> : <h1>user not allowed</h1>}
//     </div>
//   )
// }



import "./App.css"

export const App = () => {
  return (
    <div className='App'>
      <Greeting/>
    </div>
  )
}

