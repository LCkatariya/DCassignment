import { useEffect } from 'react';
import './App.css';
import MyTable from './component/MyTable';
import { getAllUsers } from './redux/operations';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const selector = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllUsers());
  },[dispatch])

  return (
    <div className="App">
       <MyTable users={selector?.users} />
    </div>
  );
}

export default App;
