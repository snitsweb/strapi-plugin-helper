import type { IInputOnChangeParams } from './input-on-change-params.interface';


export interface IInputProps {
  value: string,
  onChange: (value: IInputOnChangeParams) => void,
  name: string,
  attribute: {
    type: string,
    options?: Record<string, unknown>,
  },
  disabled: boolean,
  required: boolean,
}
