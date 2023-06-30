import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';
import StepFour from '../../components/StepFour';
import StepFive from '../../components/StepFive';

const Steps = () => {
  const { step } = useContext(AppContext);
  if (step === 1) return <StepOne />;
  if (step === 2) return <StepTwo />;
  if (step === 3) return <StepThree />;
  if (step === 4) return <StepFour />;
  if (step === 5) return <StepFive />;
  return <></>;
};

export default Steps;
