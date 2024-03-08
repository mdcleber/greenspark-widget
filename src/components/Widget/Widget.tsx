import { FC } from 'react';
import { ColorsCode, ColorsType, getColorCodeFromName } from '../../colorsHelper';
import { ActionType, WidgetModel } from '../../dataType';
import CheckBox from '../CheckBox/CheckBox';
import ColorBoxSelect from '../ColorBox/ColorBoxSelect';
import Toggle from '../Toggle/Toggle';
import Tooltip from '../Tooltip/Tooltip';
import logo from '../assets/logo.svg';
import './Widget.css';

export interface WidgetProps  {
  widget: WidgetModel;
  onWidgetChanged: (widget: WidgetModel) => void;
}

export const Widget: FC<WidgetProps> = ({ widget, onWidgetChanged}) => {

  if (widget === undefined) return null;

  const title = `This product ${widget.action}`;
  const offsetsText = widget.action === ActionType.Offsets ? 'kgs of' : '';
  const subTitle = `${widget.amount}${offsetsText} ${widget.type}`;

  const headerStyle = {
    backgroundColor: getColorCodeFromName(widget.selectedColor),
    color: ColorsCode.lightGray,
  };

  let logoStyle = {};

  if (widget.selectedColor === ColorsType.Beige || widget.selectedColor === ColorsType.White ) {
    logoStyle = {
      filter:
        'brightness(0) saturate(100%) invert(43%) sepia(5%) saturate(2643%) hue-rotate(106deg) brightness(92%) contrast(98%)',
    };
    headerStyle.color = ColorsCode.green;
  }
  const handleLinkToProfileChange = (linked: boolean) => {
    onWidgetChanged({
      ...widget,
      linked: linked
    })
  }

  const handleColorChange = (color: ColorsType) => {
    onWidgetChanged({
      ...widget,
      selectedColor: color
    })
  }

  const handleActiveChange = (isActive: boolean) => {
    onWidgetChanged({
      ...widget,
      active: isActive
    })
  }

  return (
    <div className='card'>
      <div className='card-header' style={headerStyle}>
        <img
          src={logo}
          alt='Greenspark Logo'
          className='card-img'
          style={logoStyle}
        />
        <div className='card-header-title'>
          <div className='card-title'>{title}</div>
          <div className='card-text'>{subTitle}</div>
        </div>
      </div>
      <div className="card-body">
        <div className='card-item'>
            <div>
              Link to Public Profile
              <Tooltip />
            </div>
            <CheckBox onChange={handleLinkToProfileChange} isActive={widget.linked}/>
        </div>
        <div className='card-item'>
          <div>Badge colour</div>
          <ColorBoxSelect onColorSelected={handleColorChange} selectedColor={widget.selectedColor} />
        </div>
        <div className='card-item'>
          <div>
            Activate badge
          </div>
          <Toggle onChange={handleActiveChange} isActive={widget.active} />
        </div>
      </div>
    </div>
  );
};

export default Widget;


