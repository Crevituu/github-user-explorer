import { Link } from 'react-router-dom';
import AppRouter from './router/AppRouter.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-page flex items-center justify-between py-4">
          <Link to="/" className="text-lg font-bold tracking-tight text-brand-600">
            GitHub User Explorer
          </Link>
        </div>
      </header>

      <main className="container-page flex-1 py-8">
        <AppRouter />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="container-page text-center text-sm text-slate-400">
          Feito com React, Vite e Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
