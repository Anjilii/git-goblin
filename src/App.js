import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';
import Filters from './components/Filters';
import RepositoryCard from './components/RepositoryCard';

function App() {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch repositories data from an API or your source
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/repositories?per_page=5'); // Adjust per_page for pagination
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepositories(data);
        setError(null); // Clear previous errors
      } catch (error) {
        setError('There has been a problem with your fetch operation: ' + error.message);
      } finally {
        setLoading(false);
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
        {loading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))
        ) : (
          !loading && <p className="text-center text-white">No repositories found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
