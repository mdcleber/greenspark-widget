import { FC } from 'react';
import './CheckBox.css';

export interface CheckBoxProps {
  isActive: boolean,
  onChange: (linkToProfile: boolean) => void
}
const CheckBox: FC<CheckBoxProps> = ({isActive, onChange}) => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={isActive} onChange={handleOnChange} data-testid="link-to-profile-checkbox" />
      <span className="checkmark"></span>
    </label>
  );
}

export default CheckBox;
