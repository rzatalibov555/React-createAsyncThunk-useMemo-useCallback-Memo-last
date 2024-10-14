import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from './redux/todo_slice';
// import NonMemoize from './components/NonMemoize.jsx'
// import Memoize from './components/Memoize.jsx'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react'


function App() {

  // ======================== MEMOIZED start ========================================
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Hello")

  const handdleCouter = () => {
    setCount((prev) => prev + 1)
  }

  const handdleText = () => {
    setText("Hi!")
  }


  return (
    <div>

      <Header text={text} />
      <Footer  count={count} />

      <p>{count}</p>
      <p>{text}</p>
      <button onClick={handdleCouter}>Counter++</button>
      <button onClick={handdleText}>ChangeText</button>

      {/* <NonMemoize />
        <hr />
        <Memoize /> */}
    </div>
  )



  // ================================================================



  // ======================== CreateAsyncThunk Start ========================================

  // const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos)


  // return (
  //   <>
  //     <button onClick={() => {dispatch(fetchTodos())}}>Get All Todolist</button>

  //     {todos.preloader && 
  //       <div className='loadingDiv'>
  //         <img src="https://cdn.dribbble.com/users/79460/screenshots/1910233/media/afa61cac32af37f0adfbc5bef2b4babe.gif" alt="" />
  //       </div>
  //     }

  //     {todos.error && 

  //       <div>
  //         <h1>{todos.error}</h1>
  //         <div className='ErrorDiv'>

  //           <img src="https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif" alt="" />
  //         </div>
  //       </div>

  //     }

  //   <hr />

  //     {
  //       todos.data.length > 0 &&

  //         todos.data.map((todo) => (
  //           <div key={todo.id} className='cardStyle'>
  //             <h3>{todo.title}</h3>
  //             <input type='checkbox' checked={todo.completed} className='checkStyle' />
  //           </div>
  //         ))

  //     }


  //   </>
  // );
}

export default App;
