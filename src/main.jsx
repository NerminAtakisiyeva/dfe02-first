import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const rootElem = ReactDOM.createRoot(document.getElementById('root'))

rootElem.render(
  <App />
)





// const s = <div>
//   <h1> 2 + 2 = {2 + 2} {4>3 ? 'ali' : 'test'} salam xos gelmisiniz!</h1>
// </div>

// function SayHi({ ad, age, color }) {
//   return <h1 style={{color, fontStyle:"italic", margin:20 }}>salam {ad} senin {age} yasin var</h1>  
// }

// function Test() {
//   return (
//     <div>salam</div>
//   )
// }

// rootElem.render(
//   <div>
//     {/* {Test()} */}
//     <Test />
//     {/* {sayHi("ali", 3,"lime")}
//     {sayHi("lala", 99, "purple")} */}
//     <SayHi age={12} ad="ali" color="lime"/>
//     <SayHi age={99} ad="lala" color="purple"/>
//   </div>
// )