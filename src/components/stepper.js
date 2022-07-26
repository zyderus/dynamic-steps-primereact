import { Steps } from "primereact/steps";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../app/steps/slice";

const Stepper = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector(state => state.steps.activeStep);
  const steps = useSelector(state => state.steps.items);

  const stepLabels = {
    personal: "Personal",
    seat: "Seat",
    payment: "Payment",
    confirmation: "Confirmation",
  };

  const items = steps
    .filter(step => step.active)
    .map(step => ({ ...step, label: stepLabels[step.key] }));

  return (
    <>
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={e => dispatch(actions.setActiveStep(e.index))}
        readOnly={false}
      />
    </>
  );
};

export default Stepper;
