import { FC, useContext } from "react";
import { ValuX } from "../../ValuXContext";
import './Main.css';

export const Main: FC = () => {
  const { main } = useContext(ValuX);

  return (
    <main className="main" style={{ backgroundImage: `url(${main})` }}>
    </main>
  )
}