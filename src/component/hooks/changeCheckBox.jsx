const changeCheckBox = (index, ourData, setOurData, setNewData) => {
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

export default changeCheckBox
