import { Router } from "./config/router";
import { ToastProvider } from "./core/components/Toast";

function App() {

  return (
    <ToastProvider>
      <Router />
    </ToastProvider>
  )
}

export default App
