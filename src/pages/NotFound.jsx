import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-slate-800">404</h1>
      <p className="text-slate-500">A página que você está procurando não existe.</p>
      <Link to="/" className="btn-primary">
        Voltar para a busca
      </Link>
    </div>
  );
}

export default NotFound;
