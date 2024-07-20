import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/footer';
import Filters from './components/filters';
import RepositoryCard from './components/RepositoryCard'; // Ensure this import is correct

function App() {
  const [repositories, setRepositories] = useState([]); // Define repositories here

  // Fetch repositories data from an API or your source
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://api.github.com/repositories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepositories(data.slice(0, 5)); // For demonstration, showing only first 5
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchRepositories();
  }, []);


  

  return (
    <div className="App bg-primary">
      <Navbar />
      <header className="App-header flex items-center justify-center bg-primary">
        <h1 className="text-9xl font-bold text-primary-content mt-10 mb-10" style={{ fontFamily: 'Lilita One, sans-serif' }}>
          GIT-GOBLIN
        </h1>
      </header>
      <div className="flex justify-center p-4">
        <Search />
      </div>
      <Filters />
      <div className="p-6">
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))
        ) : (
          <p className="text-center text-white">No repositories found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
