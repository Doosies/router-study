import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/counterNtodolist', element: 
      <div className='main'>
          <Counter/>
          <TodoInsert/>
          <TodoList/>
      </div>},
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
