import React from 'react'

const DeleteItem = (index, ourData, setOurData) => {
  const newList = ourData.filter((item) => {
    return item.id !== index
  })
  setOurData(newList)
  localStorage.setItem('data', JSON.stringify(newList))
}

export default DeleteItem
