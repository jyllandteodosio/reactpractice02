import UseCallback from './UseCallback'
import UseMemo from './UseMemo'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import './App.css'
import MiniShop from './MiniShop'

function App() {

  return (
    <>
      {/* <div id="navigation">
        <ul id="navigation-list">
          <li>Navigation:</li>
          <li><a href="#use-callback">UseCallback</a></li>
          <li><a href="#use-memo">UseMemo</a></li>
          <li><a href="#use-context">UseContext</a></li>
          <li><a href="#use-reducer">UseReducer</a></li>
        </ul>
      </div>
      <div id="use-callback">
        <UseCallback />
      </div>
      <div id="use-memo">
        <UseMemo />
      </div>
      <div id="use-context">
        <UseContext />
      </div>
      <div id="use-reducer">
        <UseReducer />
      </div> */}
      <div>
        <h2>Exercise 4: Global State Management</h2>
        <MiniShop />
        <br />
        <hr />
      </div>
    </>
  )
}

export default App
