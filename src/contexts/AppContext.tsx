import { createContext, useState } from 'react';

const AppContext = createContext({} as ReturnType<typeof useStates>);

type AddOn = {
  id: string;
  title: string;
  description: string;
  price: number;
};
export type Data = {
  name: string;
  email: string;
  phone: string;
  plan:
    | Record<string, never>
    | {
        id: string;
        type: string;
        price: number;
      };
  payment: string;
  'add-ons': AddOn[];
};

const useStates = () => {
  const defaultData = {
    name: '',
    email: '',
    phone: '',
    plan: {},
    payment: '',
    'add-ons': [],
  };
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(defaultData);
  return { step, setStep, data, setData, defaultData };
};

const AppContextProvider = ({ children }: { children: React.JSX.Element }) => {
  return (
    <AppContext.Provider value={useStates()}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
