import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div> SHREYASH </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>   
    <App />
    <MyApp />
  </>
)  
