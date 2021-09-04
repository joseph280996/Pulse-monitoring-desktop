import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'
import StyledButton from '../../Button'
import ConfirmExportButton from '../../Button/ConfirmExportButton'
import Overlay from '../../Overlay'
import { ExportDataFormComponentPropsType } from './ExportDataComponentTypes'
import styles from './ExportDataForm.scss'

const ExportDataFormComponent = ({
  handleSubmit,
  startDate = new Date(),
  endDate = new Date(),
  onDateChange,
  status,
}: ExportDataFormComponentPropsType) => {
  return (
    <div className={styles['ExportDataForm-wrapper']}>
      <form onSubmit={handleSubmit} className={styles.ExportDataForm}>
        <h1 className={styles['ExportDataForm-label']}>
          Date Range For Export
        </h1>
        {status && (
          <Overlay>
            <div className={styles['ExportDataForm-exportSuccessMessage']}>
              <p>Successfully exported data!</p>
              <Link to="/export">
                <StyledButton
                  className={styles['ExportDataForm-closeIcon']}
                  icon={faWindowClose}
                />
              </Link>
            </div>
          </Overlay>
        )}
        <DatePicker
          weekDayClassName={() => styles['ExportDataForm-datePickerWeekday']}
          showPopperArrow={false}
          startDate={startDate}
          endDate={endDate}
          dayClassName={() => styles['ExportDataForm-datePickerDay']}
          calendarClassName={styles['ExportDataForm-datePickerCalendar']}
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
                      'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous',
                    )}
                  >
                    {'<'}
                  </span>
                </button>
                <span
                  className={classNames(
                    'react-datepicker__current-month',
                    styles['ExportDataForm-datePickerHeader'],
                  )}
                >
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
                      'react-datepicker__navigation-icon react-datepicker__navigation-icon--next',
                    )}
                  >
                    {'>'}
                  </span>
                </button>
              </div>
            )
          }}
          monthsShown={2}
          selectsRange
          selected={startDate}
          onChange={onDateChange}
        />
        <ConfirmExportButton type="submit" />
      </form>
    </div>
  )
}

ExportDataFormComponent.defaultProps = {}
export default ExportDataFormComponent
