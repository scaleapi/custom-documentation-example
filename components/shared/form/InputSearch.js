import React from 'react';
import cn from 'classnames';

const InputSearch = ({
  className,
  bg,
  icon,
  value,
  color,
  placeholder,
  border,
  onSearch,
  onFocus,
  onBlur,
  allowDarkMode,
  ...props
}) => (
  <div
    className={cn(`${bg} flex items-center py-1 px-2 ${color}`, className, {
      'border border-gray-300 rounded-1': border,
      'dark:border-gray-600': allowDarkMode
    })}
    {...props}
  >
    {icon ? <span className="mr-1">{icon}</span> : null}
    <input
      tabIndex="-1"
      className={`bg-transparent w-full text-sm ${color} placeholder-current p-0 m-0`}
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={onSearch}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

InputSearch.defaultProps = {
  bg: 'bg-white',
  placeholder: 'Search',
  onSearch: null,
  onFocus: null,
  onBlur: null,
  border: true,
  allowDarkMode: false
};

export default InputSearch;
