import { FC, memo } from 'react';
import { ColorsCode, ColorsType, getColorNameFromCode } from '../../colorsHelper';
import ColorBox from './ColorBox';


export interface ColorBoxSelectProps {
  selectedColor: ColorsType,
  onColorSelected: (selectedColor: ColorsType) => void
}

const ColorBoxSelect: FC<ColorBoxSelectProps> = ({selectedColor, onColorSelected }) => {

  const handleColorSelection = (color: string): void => {
    const colorName = getColorNameFromCode(color);
    onColorSelected(colorName);
  }

  const getColorBox = (color: string) => {
    const isActive = selectedColor=== getColorNameFromCode(color);
    return (<ColorBox color={color}  key={color} isActive={isActive} onClick={handleColorSelection} />);
  }
  ;

  const colors = [
      (getColorBox(ColorsCode.blue)),
      (getColorBox(ColorsCode.green)),
      (getColorBox(ColorsCode.beige)),
      (getColorBox(ColorsCode.white)),
      (getColorBox(ColorsCode.black)),
    ];

  return <div className='color-box-select' data-testid='color-box-selector'>{colors}</div>

};

export default memo(ColorBoxSelect);
