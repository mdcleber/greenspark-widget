import { FC, memo } from 'react';
import tooltip from "../assets/tooltip.svg";
import "./Tooltip.css";


export interface ColorBoxPros {
  color: string,
  isActive: boolean,
  onClick: (color: string) => void
}

const Tooltip: FC = () => {
 return (
  <div className="tooltip" data-testid='tooltip'>
    <img src={tooltip}  alt='Tooltip' className='img-tooltip'  />
    <div className="tooltiptext" data-testid='tooltip-info'>
      This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
      <a href='https://public.getgreenspark.com/1636367293043/donat-peter' target='_blank' rel="noreferrer" >
        View Public Profile
      </a>
    </div>
  </div>
 )

};

export default memo(Tooltip);
