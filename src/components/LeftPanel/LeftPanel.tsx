import { FC, useContext } from "react";
import { ValuX } from "../../ValuXContext";
import './LeftPanel.css';

export const LeftPanel: FC = () => {
  const { leftPanel } = useContext(ValuX);

  return (
    <aside className="leftPanel" style={{ backgroundImage: `url(${leftPanel})` }}>

    </aside>
  )
}