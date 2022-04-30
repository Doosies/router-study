import { BrowserRouter, useRoutes } from 'react-router-dom';
import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/cnd', element: 
      <div>
          <Counter/>
          <TodoInsert/>
          <TodoList/>
      </div>},
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
