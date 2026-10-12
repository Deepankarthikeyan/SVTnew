import { MockupExactPage } from './components/MockupExactPage'
import { EnquireProvider } from './context/EnquireContext'

/**
 * Renders the supplied reference artwork (reference-full.jpg) pixel-for-pixel in React,
 * with invisible hotspots for Enquire and section scroll targets.
 */
function App() {
  return (
    <EnquireProvider>
      <MockupExactPage />
    </EnquireProvider>
  )
}

export default App
