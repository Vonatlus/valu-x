import { createContext, useState } from 'react';
import PICTURES from './images';

interface contextValue {
  header: string,
  setHeader: React.Dispatch<React.SetStateAction<string>>,
  footer: string,
  setFooter: React.Dispatch<React.SetStateAction<string>>,
  main: string,
  setMain: React.Dispatch<React.SetStateAction<string>>,
  leftPanel: string,
  setLeftPanel: React.Dispatch<React.SetStateAction<string>>,
  rightPanel: string,
  setRightPanel: React.Dispatch<React.SetStateAction<string>>,
}

type ValuXProviderProps = {
  children: React.ReactNode
}

export const ValuX = createContext({} as contextValue);

export const ValuXProvider = ({ children }: ValuXProviderProps) => {
  const [header, setHeader] = useState(PICTURES.dogs);
  const [footer, setFooter] = useState(PICTURES.cats);
  const [main, setMain] = useState(PICTURES.dyno);
  const [leftPanel, setLeftPanel] = useState(PICTURES.planets);
  const [rightPanel, setRightPanel] = useState(PICTURES.chubaka);

  const contextValue: contextValue = {
    header,
    setHeader,
    footer,
    setFooter,
    main,
    setMain,
    leftPanel,
    setLeftPanel,
    rightPanel,
    setRightPanel,
  }

  return (
    < ValuX.Provider value={contextValue}>
      {children}
    </ValuX.Provider>
  )
}