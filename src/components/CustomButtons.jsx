import './CustomButtons.css';
import { svgStore } from './helpers/svg';

const CustomButtons = ({ handleRefFocus }) => {
  return (
    <div className="custom-button-wrapper">
      <button className="custom-button" onClick={handleRefFocus}>
        {svgStore['earth']}
        <div className="custom-button-item-wrapper">
          <span className="font-weight-bold">Click to focus</span>
          <span className="grey-medium">Click to focus</span>
        </div>
      </button>
      <button className="custom-button">
        {svgStore['private']}
        <div className="custom-button-item-wrapper">
          <span className="font-weight-bold">Private</span>
          <span className="grey-medium">
            Invite only, best for yourself or teams
          </span>
        </div>
      </button>
    </div>
  );
};

export default CustomButtons;
