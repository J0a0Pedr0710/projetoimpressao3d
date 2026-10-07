import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Página Inicial 🏠</h1>
      <Link to="/sobre">Ir para Sobre</Link>
    </div>
  );
}
