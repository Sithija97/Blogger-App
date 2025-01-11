import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";

function App() {
  return (
    <section
      className={`${
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      }`}
    >
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
