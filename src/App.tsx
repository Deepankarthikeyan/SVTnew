import { FiveSectionPage } from './components/FiveSectionPage'
import { EnquireProvider } from './context/EnquireContext'

function App() {
  return (
    <EnquireProvider>
      <FiveSectionPage />
    </EnquireProvider>
  )
}

export default App
