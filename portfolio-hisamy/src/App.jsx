import { AppHeader } from './AppHeader'
import { Home } from './Home.jsx'
import { AboutMe } from './AboutMe.jsx'

function App() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='p-4 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12'>
        <AppHeader></AppHeader>
        <Home></Home>
        <AboutMe></AboutMe>
      </div>
    </div>
  )
}

export default App
