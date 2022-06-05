import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import StyledButton from '../../components/Button';
import ConfirmExportButton from '../../components/Button/ConfirmExportButton';
import Overlay from '../../components/Overlay';
import './ExportDataForm.scss';
import { ExportDataFormComponentPropsType } from './ExportDataFormTypes';

const ExportDataFormComponent = ({
  handleSubmit,
  startDate = new Date(),
  endDate = new Date(),
  onDateChange,
  status,
}: ExportDataFormComponentPropsType) => {
  return (
    <div className="ExportDataForm-wrapper">
      <form onSubmit={handleSubmit} className="ExportDataForm">
        <h1 className="ExportDataForm-label">Date Range For Export</h1>
        {status && (
          <Overlay>
            <div className="ExportDataForm-exportSuccessMessage">
              <p>Successfully exported data!</p>
              <Link to="/export">
                <StyledButton
                  className="ExportDataForm-closeIcon"
                  icon={faWindowClose}
                />
              </Link>
            </div>
          </Overlay>
        )}
        <DatePicker
          weekDayClassName={() => 'ExportDataForm-datePickerWeekday'}
          showPopperArrow={false}
          startDate={startDate}
          endDate={endDate}
          dayClassName={() => 'ExportDataForm-datePickerDay'}
          calendarClassName="ExportDataForm-datePickerCalendar"
          renderCustomHeader={({
            monthDate,
            customHeaderCount,
            decreaseMonth,
            increaseMonth,
          }) => {
            return (
              <div>
                <button
                  type="button"
                  aria-label="Previous Month"
                  className="react-datepicker__navigation react-datepicker__navigation--previous"
                  style={{
                    ...(customHeaderCount === 1
                      ? { visibility: 'hidden' }
                      : {}),
                  }}
                  onClick={decreaseMonth}
                >
                  <span
                    className={classNames(
                      'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                    )}
                  >
                    {'<'}
                  </span>
                </button>
                <span className="ExportDataForm-datePickerHeader">
                  {monthDate.toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <button
                  type="button"
                  aria-label="Next Month"
                  className="react-datepicker__navigation react-datepicker__navigation--next"
                  style={
                    customHeaderCount === 0 ? { visibility: 'hidden' } : {}
                  }
                  onClick={increaseMonth}
                >
                  <span
                    className={classNames(
                      'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                    )}
                  >
                    {'>'}
                  </span>
                </button>
              </div>
            );
          }}
          selectsRange
          selected={startDate}
          onChange={onDateChange}
        />
        <ConfirmExportButton type="submit" />
      </form>
    </div>
  );
};

ExportDataFormComponent.defaultProps = {};
export default ExportDataFormComponent;
