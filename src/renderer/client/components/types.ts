import { FC, MouseEventHandler } from 'react';
import { AnySchema } from 'yup';

export interface IField {
  type?: string;
  name?: string;
  disabled?: boolean;
  error?: any;
  value?: string | number | readonly string[];
  required?: boolean;
  className?: string;
}

export interface FieldConfig extends Omit<IField, 'name' | 'value'> {
  FieldComponent?: FC<any>;
  label?: string;
  name: string;
  placeholder?: string;
  validate: AnySchema;
  onClick?: MouseEventHandler;
}
