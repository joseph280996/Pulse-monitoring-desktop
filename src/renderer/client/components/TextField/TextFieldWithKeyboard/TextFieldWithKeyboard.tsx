import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ReactElement, useState, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import StyledButton from '../../Button';
import Overlay from '../../Overlay';
import VirtualKeyboard from '../../VirtualKeyboard';
import { VirtualKeyboardChangeEventHandlerType } from '../../VirtualKeyboard/VirtualKeyboard';
import TextField from '../TextField';
import { ITextFieldProps } from '../TextFieldTypes';
import './TextFieldWithKeyboard.scss';

interface ITextFieldWithKeyboard extends Omit<ITextFieldProps, 'onChange'> {
  onChange: VirtualKeyboardChangeEventHandlerType;
}

const TextFieldWithKeyboard = ({
  onChange,
  className,
  ...textFieldProps
}: ITextFieldWithKeyboard): ReactElement => {
  const [isOpenOverLay, setIsOpenOverlay] = useState<boolean>(false);
  const keyboardRef = useRef<typeof Keyboard>();
  return (
    <div>
      {isOpenOverLay && (
        <Overlay>
          <div className="TextFieldWithKeyboard-overlayInner">
            <div className="TextFieldWithKeyboard-fieldAndCloseButton">
              <TextField
                className={classNames('TextFieldWithKeyboard-field', className)}
                onChange={(event) => {
                  event.stopPropagation();
                  onChange((event.target as HTMLInputElement).value);
                }}
                {...textFieldProps}
              />
              <StyledButton
                onClick={() => {
                  setIsOpenOverlay(false);
                }}
                className="TextFieldWithKeyboard-closeIcon"
                icon={faWindowClose}
              />
            </div>
            <VirtualKeyboard
              enterDisplayOverride="Close"
              onEnterOverride={() => {
                setIsOpenOverlay(false);
              }}
              onChange={onChange}
              keyboardRef={keyboardRef}
            />
          </div>
        </Overlay>
      )}
      <TextField
        className={className}
        onClick={() => {
          setIsOpenOverlay(true);
        }}
        onChange={(event) => {
          onChange((event.target as HTMLInputElement).value);
        }}
        {...textFieldProps}
      />
    </div>
  );
};

export default TextFieldWithKeyboard;
