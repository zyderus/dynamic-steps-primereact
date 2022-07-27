import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../app/steps/slice";
import { Steps } from "primereact/steps";

const Stepper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    navigate(items[activeIndex] ? items[activeIndex].path : "/");
  }, [steps, navigate, activeIndex]);

  return (
    <>
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={e => {
          console.log(e);

          dispatch(actions.setActiveStep(e.index));
          navigate(e.item.path);
        }}
        readOnly={false}
      />
    </>
  );
};

export default Stepper;
