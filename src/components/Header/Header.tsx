import { FC, useContext } from "react";
import { ValuX } from "../../ValuXContext";
import './Header.css';

export const Header: FC = () => {
  const { header } = useContext(ValuX);

  return (
    <header className="header" style={{ backgroundImage: `url(${header})` }}>

    </header>
  )
}