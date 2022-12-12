import logo from './logo.svg';
import './App.css';

function App() {
  let date = Date.now()
  return (
    <div className="App">
      <header className="App-header">
<h1 className='heading'>Facebook Post</h1>
        <div className='container'>
          <div className='profile-div'>
            <img className='profile-image' src='https://i.pinimg.com/736x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg' />
          </div>
          <div>
            <p className='image-title'>Image title: Flower Image</p>
          </div>
          <div className='date-upload'>
            <p className='image-upload-date image-title'>Image upload date:
              <a href=''>{date}</a>
            </p>
          </div>
          <div className='image-upload'>
            <img className='image' src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg'/>
          </div>
        </div>

      </header>
    </div>
  );

}
export default App;
