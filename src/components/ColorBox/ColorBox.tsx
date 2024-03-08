import classNames from 'classnames';
import { FC, memo } from 'react';
import "./ColorBox.css";

export interface ColorBoxPros {
  color: string,
  isActive: boolean,
  onClick: (color: string) => void
}

const ColorBox: FC<ColorBoxPros> = ({ color, isActive, onClick}) => {
  const style = { backgroundColor: color};
  const classes = classNames('color-box', { 'color-box-active': isActive });

  return <button style={style} className={classes} onClick={() => onClick(color)} data-testid={`color-box-${color}`}></button>

};

export default memo(ColorBox);
