import { useState } from 'react'

import AppHeader from './components/AppHeader'
import Movies from './pages/Movies.js'

function App() {

  const [example, setExample] = useState();

  return (
    <>
    <AppHeader />
    <Movies />
    </>
  );
}

export default App
