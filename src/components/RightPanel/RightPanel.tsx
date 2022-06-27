import { FC, useContext } from "react";
import { ValuX } from "../../ValuXContext";
import './RightPanel.css';

export const RightPanel: FC = () => {
  const { rightPanel } = useContext(ValuX);

  return (
    <aside className="rightPanel" style={{ backgroundImage: `url(${rightPanel})` }}>

    </aside>
  )
}