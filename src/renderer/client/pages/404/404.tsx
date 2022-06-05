import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../components/Button';
import './404.scss';

function NotFoundPage(): ReactElement {
  return (
    <div className="NotFound">
      <div className="NotFound-container">
        <h2 className="NotFound-title">404! NOT FOUND</h2>
        <div>
          <p>
            The page that you are trying to connect is either in development or
            cannot be found
          </p>
          <div className="NotFound-buttonContainer">
            <Link to="/">
              <StyledButton type="button">Go back to our homepage</StyledButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
