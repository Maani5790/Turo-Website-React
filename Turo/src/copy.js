  /*
  const text = 'Hello World';

  const object = {
    name: 'Ghulam Mustafa'
  };
  const data = ['We', 'are', 'United'];

  const list = [{
    name: "Hello World 1"
  },
  {
    name: "Hello World 2"
  },
  {
    name: "Hello World 3"
  }]

  //Task 2: Use the below code and code it using .map in order to practice the dynamic approach.
  const acs = [{
    title: 'Dawlance ABC123',
    price: 52000,
    ton: 1.5,
    isUsed: true,
    warantee: '1 year'
  }, {
    title: 'Gree XTYZ23',
    price: 40000,
    ton: 1,
    isUsed: false,
    warantee: '2 year'
  }, {
    title: 'Orient XTYZ23',
    price: 45000,
    ton: 1.5,
    isUsed: false,
    warantee: 'No'
  }]

  // Task 1: Use the below code and code it using .map in order to practice the dynamic approach.

  const ad = {
    title: 'AC',
    price: 52000,
    ton: 1.5,
    isUsed: true,
    warantee: '1 year'
  }
  
  //State Name, State Update Method
  const [word, setWord] = useState('Ghulam')
  const [text, settext] = useState('Hello')
  const [bulb, setBulb] = useState(false)
  const [hide, setHide] = useState(false)

  const reverse = () => {
    const reverseTheText = text.split('').reverse().join('')
    const reverseTheWord = word.split('').reverse().join('')

    setWord(reverseTheWord)
    settext(reverseTheText)

    console.log(reverseTheText)
    console.log(reverseTheWord)
  }
  const bulbOf = 'https://www.collinsdictionary.com/images/full/lightbulb_111547856_1000.jpg'
  const bulbOn = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-1200-80.jpg'

  const toggleBulb = () => {
    setBulb(!bulb)
  }

  const toggleHide = () => {
    setHide(!hide)
  }
  */

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


/*
  return(

    <img src={logo} className="App-logo" alt="logo" />
  <p>
  Edit <code>src/App.js</code> and save to reload.
</p>

<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>

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
  )


  // component code

  import Dashboard from './screens/Dashboard';
import ContactUs from './screens/ContactUs';
import Profile from './screens/Profile';


   <button onClick={() => setScreen('dashboard')}>Dashboard</button>
        <button onClick={() => setScreen('contactus')}>ContactUs</button>
        <button onClick={() => setScreen('profile')}>Profile</button>
        
        {screen === 'dashboard' && <Dashboard />}
        {screen === 'contactus' && <ContactUs />}
        {screen === 'profile' && <Profile />}


  */
