import { dropRight } from 'lodash';
import { ReactElement, useState, MutableRefObject, useMemo } from 'react';
import Keyboard from 'react-simple-keyboard';
import KeyboardInternational from 'simple-keyboard-layouts';
import './VirtualKeyboard.scss';

export type VirtualKeyboardChangeEventHandlerType = (input: string) => void;

interface IVirtualKeyboardProps {
  onChange: VirtualKeyboardChangeEventHandlerType;
  keyboardRef: MutableRefObject<typeof Keyboard | undefined>;
  onEnterOverride?: () => void;
  enterDisplayOverride?: string;
}

const VirtualKeyboard = ({
  onChange,
  keyboardRef,
  onEnterOverride,
  enterDisplayOverride,
}: IVirtualKeyboardProps): ReactElement => {
  const [layoutName, setLayoutName] = useState<string>('default');
  const [keyboardLanguage, setKeyboardLanguage] = useState<string>('english');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }
    if (button === '{international}') {
      setKeyboardLanguage((prevLanguage) =>
        prevLanguage === 'chinese' ? 'english' : 'chinese'
      );
    }
    if (button === '{enter}' && onEnterOverride) {
      onEnterOverride();
    }
  };

  const defaultKeyboardLayout = new KeyboardInternational().get(
    keyboardLanguage
  );

  const customKeyboardLayout = useMemo(
    () =>
      Object.entries(defaultKeyboardLayout.layout).reduce(
        (finalizedLayout, [layout, keymap]) => {
          const modifiedLastRow =
            keymap[keymap.length - 1].concat(' {international}');
          return {
            ...finalizedLayout,
            [layout]: [...dropRight(keymap), modifiedLastRow],
          };
        },
        {}
      ),
    [defaultKeyboardLayout]
  );

  return (
    <div className="VirtualKeyboard">
      <Keyboard
        keyboardRef={(r: any) => {
          // eslint-disable-next-line no-param-reassign
          keyboardRef.current = r;
        }}
        {...defaultKeyboardLayout}
        layout={customKeyboardLayout}
        display={{
          '{international}': '🌐',
          '{space}': 'Space',
          '{tab}': 'Tab',
          '{lock}': 'CapsLock',
          '{shift}': 'Shift',
          '{bksp}': 'Backspace',
          '{enter}': enterDisplayOverride || 'Enter',
        }}
        theme="hg-theme-default hg-layout-default VirtualKeyboard"
        onChange={onChange}
        onKeyPress={onKeyPress}
        buttonTheme={[{ class: 'hg-internationalize', buttons: '🌐' }]}
      />
    </div>
  );
};
VirtualKeyboard.defaultProps = {
  onEnterOverride: null,
  enterDisplayOverride: null,
};

export default VirtualKeyboard;
