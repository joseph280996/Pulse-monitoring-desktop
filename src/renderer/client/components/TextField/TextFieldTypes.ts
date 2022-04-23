import {
  MouseEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react';
import { IField } from '../types';

export interface ITextFieldProps extends IField {
  onClick?: MouseEventHandler;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  placeholder?: string;
  label?: string;
}
