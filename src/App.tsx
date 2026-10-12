import { MockupExactPage } from './components/MockupExactPage'
import { EnquireProvider } from './context/EnquireContext'

function App() {
  return (
    <EnquireProvider>
      <MockupExactPage />
    </EnquireProvider>
  )
}

export default App
