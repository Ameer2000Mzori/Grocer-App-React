import uniqid from 'uniqid'
const addNewItem = (ourData, newData, setOurData, setNewData) => {
  if (newData === undefined || newData === null || newData === '') {
  } else {
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
}

export default addNewItem
