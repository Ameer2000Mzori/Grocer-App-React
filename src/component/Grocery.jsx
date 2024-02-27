import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'

export const Grocery = () => {
  const [ourData, setOurData] = useState([])
  const [newData, setNewData] = useState('')

  // getting our data
  useEffect(() => {
    const storedData = localStorage.getItem('data')
    const initialData = storedData ? JSON.parse(storedData) : []
    setOurData(initialData)
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
    localStorage.setItem('data', JSON.stringify(updatedData))
    setNewData('')
  }

  // delete function
  const deleteItem = (index) => {
    const newList = ourData.filter((item) => {
      return item.id !== index
    })
    setOurData(newList)
    localStorage.setItem('data', JSON.stringify(newList))
  }

  // adding new item to the function
  const addNewItem = () => {
    const newItem = {
      id: uniqid(),
      text: newData,
      checked: false,
    }
    const updatedData = [...ourData, newItem]
    setOurData(updatedData)
    localStorage.setItem('data', JSON.stringify(updatedData))
    setNewData('')
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
