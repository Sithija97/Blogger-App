import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { UserContextProvider } from "./context/user.provider";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
