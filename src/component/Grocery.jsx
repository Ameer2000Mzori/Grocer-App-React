import React, { useState, useEffect } from 'react'
import { Data } from './hooks/Data.jsx'

export const Grocery = () => {
  const [ourData, setOurData] = useState([])
  const [checkBox, setCheckBox] = useState(false)

  useEffect(() => {
    const newData = Data()
    console.log(newData)
    setOurData(newData)
  }, [])
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Grocery List</h1>
            <div>
              <input type="text" placeholder="add somet..." />
              <button>submit</button>
            </div>
          </div>
          <div>
            <ul>
              {ourData.map((data) => {
                return (
                  <li key={data.id}>
                    <input
                      type="checkbox"
                      checked={data.checked ? true : false}
                      value={checkBox}
                      onChange={(e) => {
                        setCheckBox(e.target.value)
                      }}
                    />

                    <p>{data.text}</p>
                    <button>Delete</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
