import { LandingPage } from './components/LandingPage'
import { EnquireProvider } from './context/EnquireContext'

function App() {
  return (
    <EnquireProvider>
      <LandingPage />
    </EnquireProvider>
  )
}

export default App
