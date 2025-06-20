import AddTask from "./components/AddTask";
import ToDOScreen from "./screens/ToDoScreen"; 
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
const router = createBrowserRouter(
  [{
    path: "/",
    element: <ToDOScreen />,
  },
{
  path:"/add-task",
  element: <AddTask  />,
},]
);
const App=()=>{
  return <RouterProvider router={router} />;
};
export default App;