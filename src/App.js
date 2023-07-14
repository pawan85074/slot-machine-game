import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SlotM from './SlotM';

function App() {
  return (
    <>
      <h1 className="text-center bg-secondary p-2">🎰 Welcome to my first slot machine game 🎰</h1>
      <div className='d-flex justify-content-center mt-5'>
      <div className='card 'style={{width: '18rem'}}>
      <SlotM x='😄'y='😄'z='😄'/>
      <SlotM x='🚗'y='🚗'z='😄'/>
      <SlotM x='🍌'y='🍌'z='🍌'/>
      </div>
      </div>
    
    </>
  )
}

export default App