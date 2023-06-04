import classNames from 'classnames';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export interface IPhoneNumberInputParams {
  name: string;
  value: string;
  onChange: any;
  isInvalid: boolean;
}

export default function PhoneNumberInput({ name, value, onChange, isInvalid }: Partial<IPhoneNumberInputParams>) {
  return (
    <PhoneInput
      name={name}
      className={classNames({
        'border border-gray-200 px-4 py-2 rounded-xl w-full': true,
        '!border-error': isInvalid,
      })}
      value={value}
      onChange={(val) => onChange(val)}
    />
  );
}
