import React, { useState, useEffect } from 'react'
import DeleteItem from './hooks/DeleteItem.jsx'
import changeCheckBox from './hooks/changeCheckBox.jsx'
import addNewItem from './hooks/addNewItem.jsx'

export const Grocery = () => {
  const [ourData, setOurData] = useState([])
  const [newData, setNewData] = useState('')

  // getting our data
  useEffect(() => {
    const storedData = localStorage.getItem('data')
    const initialData = storedData ? JSON.parse(storedData) : []
    setOurData(initialData)
  }, [])

  // adding new item to the function
  // const addNewItem = () => {}

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
              <button
                onClick={() => {
                  addNewItem(ourData, newData, setOurData, setNewData)
                }}
              >
                submit
              </button>
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
                          e.currentTarget.getAttribute('data-index'),
                          ourData,
                          setOurData,
                          setNewData
                        )
                      }}
                    />

                    <p>{data.text}</p>
                    <button
                      onClick={() => {
                        DeleteItem(data.id, ourData, setOurData)
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
