import React from 'react'
import MovieSearch from './components/MovieSearch';

const App = () => {
  return (
    <div className="w-[100%] h-screen bg-gray-100 min-h-screen">
    <header className="w-[100%] bg-blue-500 text-white p-4">
      <h1 className="text-4xl font-semibold text-center">Movie App</h1>
    </header>
    <main>
      <MovieSearch />
    </main>
  </div>
  )
}

export default App
