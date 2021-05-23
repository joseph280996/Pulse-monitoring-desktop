import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import Keyboard from 'react-simple-keyboard'
import StyledButton from '../../Button'
import Overlay from '../../Overlay'
import VirtualKeyboard from '../../VirtualKeyboard'
import { VirtualKeyboardChangeEventHandlerType } from '../../VirtualKeyboard/VirtualKeyboard'
import TextField from '../TextField'
import { ITextFieldProps } from '../TextFieldTypes'
import styles from './TextFieldWithKeyboard.scss'

interface ITextFieldWithKeyboard extends Omit<ITextFieldProps, 'onChange'> {
  onChange: VirtualKeyboardChangeEventHandlerType
}

const TextFieldWithKeyboard = ({
  onChange,
  ...textFieldProps
}: ITextFieldWithKeyboard): React.ReactElement => {
  const [isOpenOverLay, setIsOpenOverlay] = React.useState<boolean>(false)
  const keyboardRef = React.useRef<typeof Keyboard>()
  return (
    <div>
      {isOpenOverLay && (
        <Overlay>
          <div className={styles['TextFieldWithKeyboard-overlayInner']}>
            <div
              className={styles['TextFieldWithKeyboard-fieldAndCloseButton']}
            >
              <TextField
                className={styles['TextFieldWithKeyboard-field']}
                onChange={(event) => {
                  event.stopPropagation()
                  onChange((event.target as HTMLInputElement).value)
                }}
                {...textFieldProps}
              />
              <StyledButton
                onClick={() => {
                  setIsOpenOverlay(false)
                }}
                className={styles['TextFieldWithKeyboard-closeIcon']}
                icon={faWindowClose}
              />
            </div>
            <VirtualKeyboard
              enterDisplayOverride="Close"
              onEnterOverride={() => {
                setIsOpenOverlay(false)
              }}
              onChange={onChange}
              keyboardRef={keyboardRef}
            />
          </div>
        </Overlay>
      )}
      <TextField
        onClick={() => {
          setIsOpenOverlay(true)
        }}
        onChange={(event) => {
          onChange((event.target as HTMLInputElement).value)
        }}
        {...textFieldProps}
      />
    </div>
  )
}

export default TextFieldWithKeyboard
