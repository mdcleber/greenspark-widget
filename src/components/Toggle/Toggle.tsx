import { FC } from 'react';
import "./Toggle.css";

export interface ToggleProps {
  isActive: boolean,
  onChange: (isActive: boolean) => void
}
const Toggle: FC<ToggleProps> = ({ isActive, onChange }) => {

const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  onChange(event.target.checked);
};
 return (
  <label className="toggle-container">
    <input type="checkbox" className="toggle-input" onChange={handleOnChange} checked={isActive} data-testid={'active-badge-toggle'}/>
    <div className="toggle-slider" />
  </label>
 )

};

export default Toggle;
