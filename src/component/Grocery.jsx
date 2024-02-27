import React, { useState, useEffect } from 'react'
import { Data } from './hooks/Data.jsx'

export const Grocery = () => {
  const [ourData, setOurData] = useState([])

  useEffect(() => {
    const newData = Data()
    console.log(newData)
    setOurData(newData)
  }, [])

  const changeCheckBox = (index) => {
    const numericIndex = Number(index)

    const updatedData = ourData.map((item, idx) => {
      if (idx === numericIndex) {
        return { ...item, checked: !item.checked }
      }
      return item
    })

    setOurData(updatedData)
  }

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
              {ourData.map((data, index) => {
                return (
                  <li key={data.id}>
                    <input
                      data-index={index}
                      type="checkbox"
                      checked={data.checked ? true : false}
                      onChange={(e) => {
                        changeCheckBox(
                          e.currentTarget.getAttribute('data-index')
                        )
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
