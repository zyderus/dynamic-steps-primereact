import { useSelector, useDispatch } from "react-redux";
import { actions } from "../app/steps/slice";
import { InputSwitch } from "primereact/inputswitch";

const Toggles = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.steps.items);

  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={item.key + idx}
          className='flex align-items-center gap-3 mb-2'
        >
          <InputSwitch
            checked={item.active}
            name={item.key}
            onChange={e => dispatch(actions.toggleStepActiveStatus(e.target))}
          />
          <span>{item.key}</span>
        </div>
      ))}
    </div>
  );
};

export default Toggles;
