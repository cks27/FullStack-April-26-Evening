import React from 'react'
import { useState } from 'react'
import About from './pages/About';
import Products from './pages/Products';
import SignIn from './pages/SignIn';

const App = () => {

  const [page, setPage] = useState('products');

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={()=> setPage('about')}>About</button></li>
          <li><button onClick={()=> setPage('signin')}>SignIn</button></li>
          <li><button onClick={()=> setPage('products')}>Products</button></li>
        </ul>
      </nav>

      <main>
        {page === 'about' && <About/>}
        {page === 'products' && <Products/>}
        {page === 'signin' && <SignIn/>}
      </main>
    </div>
  )
}

export default App