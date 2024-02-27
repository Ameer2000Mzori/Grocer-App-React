import React, { useState, useEffect } from 'react'
import { Data } from './hooks/Data.jsx'
import uniqid from 'uniqid'

export const Grocery = () => {
  const [ourData, setOurData] = useState([])
  const [newData, setNewData] = useState('')

  // getting our data
  useEffect(() => {
    const newData = Data()
    console.log(newData)
    setOurData(newData)
  }, [])

  // change checked and unchecked
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

  // delete function
  const deleteItem = (index) => {
    const newList = ourData.filter((item) => {
      return item.id !== index
    })
    setOurData(newList)
  }

  // adding new item to the function
  const addNewItem = () => {
    const newItem = {
      id: uniqid(),
      text: newData,
      checked: false,
    }
    setOurData([...ourData, newItem])
    console.log(ourData)
  }

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Grocery List</h1>
            <div>
              <input
                type="text"
                placeholder="add somet..."
                value={newData}
                onChange={(e) => {
                  setNewData(e.target.value)
                }}
              />
              <button onClick={addNewItem}>submit</button>
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
                    <button
                      onClick={() => {
                        deleteItem(data.id)
                      }}
                    >
                      Delete
                    </button>
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
