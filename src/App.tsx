import { useEffect, useState } from "react";
import { Router } from "./config/router";
import { ToastProvider } from "./core/components/Toast";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Función para manejar cambios en el tamaño de la pantalla
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Suscribe el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isLargeScreen ? 
    <ToastProvider>
      <Router />
    </ToastProvider>
    :
    <div style={{ color: 'red', fontSize: '18px' }}>
      Accede desde un dispositivo con una pantalla grande, como una tablet o una PC.
    </div>
  )
}

export default App
