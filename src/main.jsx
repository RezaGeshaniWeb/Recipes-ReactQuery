import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./styles/index.css"
import QueryProvider from "./context/QueryProvider.jsx"

createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <App />
  </QueryProvider>
)
