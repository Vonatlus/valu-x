import { FC, useContext } from "react";
import { ValuX } from "../../ValuXContext";
import './Footer.css';

export const Footer: FC = () => {
  const { footer } = useContext(ValuX);

  return (
    <footer className="footer" style={{ backgroundImage: `url(${footer})` }}>

    </footer>
  )
}