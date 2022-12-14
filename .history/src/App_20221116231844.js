
import './App.css';
import { RouterProvider } from "react-router-dom"
import router from './Components/Route';
import 'react-photo-view/dist/react-photo-view.css';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
