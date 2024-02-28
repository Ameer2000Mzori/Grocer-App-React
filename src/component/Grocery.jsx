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

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
        <div className="h-[500px] w-[360px] bg-zinc-400">
          <div className=" h-[15%] w-[100%] flex flex-col text-center items-center justify-center gap-2">
            <h1>Grocery List</h1>
            <div className="flex flex-row text-center items-center justify-evenly w-[100%]">
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
          <div className=" h-[85%] overflow-auto">
            <ul>
              {ourData.map((data, index) => {
                return (
                  <li
                    key={data.id}
                    className="flex flex-row text-center items-center justify-between p-4 w-[100%] h-[50px]"
                  >
                    <div className="flex flex-row w-[50%] text-center items-center justify-start gap-4">
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
                      <p
                        className={
                          data.checked
                            ? ' text-white line-through'
                            : 'text-black'
                        }
                      >
                        {data.text}
                      </p>
                    </div>
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
