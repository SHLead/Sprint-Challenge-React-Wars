// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Character() {
  const [char, setChar] = useState([])

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => setChar(res.data.results))
  }, [])

  return (
    <>
      <h1>Test</h1>
      <div className='chars'>
        {char.map((item, index) => {
          return (
            <div className='card' key={index}>
              <h2>{item.name}</h2>
              <p>
                <b>Gender:</b> {item.gender}
              </p>
              <p>
                <b>DOB:</b> {item.birth_year}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Character
