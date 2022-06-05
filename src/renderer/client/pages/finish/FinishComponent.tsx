import { ReactElement, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../components/Button';
import './Finish.scss';

type FinishPropType = {
  onEndClick: MouseEventHandler;
};

const Finish = ({ onEndClick }: FinishPropType): ReactElement => {
  return (
    <div className="Finish-wrapper">
      <div className="Finish">
        <h1>Finish</h1>
        <div className="Finish-buttons">
          <StyledButton
            className="Finish-button"
            type="button"
            onClick={onEndClick}
          >
            End
          </StyledButton>
          <Link to="/">
            <StyledButton type="button" className="Finish-button">
              Start a new session
            </StyledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Finish;
