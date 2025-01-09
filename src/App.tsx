import React from 'react';
import Header from './layout-components/Header';
import AppRouter from './layout-components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostProvider } from './context/PostContext';

const App: React.FC = () => {
  return (
    <Router>
      <PostProvider>
        <div className="App">
          <Header />
          <main>
            <AppRouter />
          </main>
        </div>
      </PostProvider>
    </Router>
  );
};

export default App;
