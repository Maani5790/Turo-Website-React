import './todo.css'
function Todo(){
    const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [button, setButton] = useState(false)
  const [update, setUpdate] = useState()

  const addItem = () => {
    const tempList = [...list]
    tempList.push(text)
    setList(tempList)

    setText('')
  }
  const onInputChange = (e) => {
    setText(e.target.value)
  }

  const deleteItem = (index) => {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  const editButton = (index) => {
    //1) item value go to input field
    //2) change add button to update button
    //3) item index send in a state
    setText(list[index])
    setButton(true)
    setUpdate(index)
  }

  const updateButton = () => {
    //1) change update to add button
    //2) input field khali kerni hy
    //3) item has been updated
    setButton(false)
    setText('')
    const tempList = [...list]
    tempList[update] = text
    setList(tempList)
  }
    return(
        <div>
        <input value={text} placeholder='Enter list item' onChange={onInputChange} />
        {
          button ?
            <button onClick={updateButton}>Update</button>
            :
            <button onClick={addItem}>Add</button>
    
        }
    
        <ul>
          {
            list.map((item, index) => {
              return <li>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => editButton(index)}>Edit</button>
              </li>
            })
          }
        </ul>
      
        </div>
    )  
    
}

export default Todo;