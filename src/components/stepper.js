import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../app/steps/slice";
import { Steps } from "primereact/steps";

const Stepper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeIndex = useSelector(state => state.steps.activeStep);
  const steps = useSelector(state => state.steps.items);
  const items = useRef(null);

  const stepLabels = {
    personal: "Personal",
    seat: "Seat",
    payment: "Payment",
    confirmation: "Confirmation",
  };

  items.current = steps
    .filter(step => step.active)
    .map(step => ({
      ...step,
      label: stepLabels[step.key],
    }));

  useEffect(() => {
    if (activeIndex + 1 > items.current.length && activeIndex !== 0) {
      dispatch(actions.setActiveStep(items.current.length - 1));
    }
  }, [dispatch, activeIndex, items.current.length]);

  useEffect(() => {
    items.current[activeIndex] && navigate(items.current[activeIndex].path);
  }, [navigate, activeIndex, items.current.length]);

  return (
    <>
      <Steps
        model={items.current}
        activeIndex={activeIndex}
        onSelect={e => {
          dispatch(actions.setActiveStep(e.index));
        }}
        readOnly={false}
      />
    </>
  );
};

export default Stepper;
