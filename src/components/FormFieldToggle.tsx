import React from 'react';
import styles from './FormFieldToggle.module.scss';

const FormFieldToggle = (props: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: [string, string];
}) => {
  const { checked, onChange, options } = props;
  return (
    <div className={styles.wrapper}>
      <div className="flex justify-center items-center">
        <span
          className={`mr-6 text-sm font-medium
          ${!checked ? 'selected' : ''}
        `}
        >
          {options[0]}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={checked}
            onChange={onChange}
          />
          {/* Toggle layout credits to https://flowbite.com/docs/forms/toggle/ */}
          <div className="w-11 h-6 bg-blue-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
        </label>
        <span
          className={`ml-6 text-sm font-medium
         ${checked ? 'selected' : ''}
        `}
        >
          {options[1]}
        </span>
      </div>
    </div>
  );
};

export default FormFieldToggle;
