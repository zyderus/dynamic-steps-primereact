import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../app/steps/slice";

const Controls = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector(state => state.steps.activeStep);
  // const activeStepsLength = useSelector(state => state.steps.activeStepsLength);

  const back = () => {
    if (activeIndex < 1) return;
    dispatch(actions.setActiveStep(activeIndex - 1));
  };

  const forward = () => {
    // if (!activeStepsLength && activeIndex >= activeStepsLength - 1) return;
    dispatch(actions.setActiveStep(activeIndex + 1));
  };

  return (
    <div className='flex gap-4 align-self-center'>
      <Button label='<' onClick={back} />
      <Button label='>' onClick={forward} />
    </div>
  );
};

export default Controls;
