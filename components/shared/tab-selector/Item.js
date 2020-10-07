import React, { useRef, useEffect } from 'react';
import cn from 'classnames';

import { Tab } from 'react-aria-tabpanel';

import styles from './Item.module.css';

const Item = ({ id, children, isActive, label, onClick, handleUrlFilter, textColors, selectorStyle }) => {
  const ref = useRef({ offsetWidth: 0, offsetLeft: 0 });

  useEffect(() => {
    // because off css loading, will wait until it loads
    setTimeout(() => {
      if (isActive) {
        onClick(ref.current.offsetWidth, ref.current.offsetLeft);
      }
    }, 100);
  }, [isActive]);

  return (
    <li
      className={cn('inline-block mr-1 last:mr-0', selectorStyle === 'small' ? 'lg:mr-0' : '')}
      onClick={() => onClick(ref.current.offsetWidth, ref.current.offsetLeft)}
    >
      <Tab id={id} active={isActive} onClick={handleUrlFilter}>
        <div
          ref={ref}
          className={cn(
            'h-5 px-2 rounded-3 relative flex items-center cursor-pointer select-none transition-all duration-250',
            { 'cursor-initial': isActive }
          )}
        >
          {children}
          <p
            className={cn(
              'text-base whitespace-no-wrap',
              isActive ? textColors.active : textColors.inactive,
              selectorStyle === 'small' ? styles.smallText : ''
            )}
          >
            {label}
          </p>
        </div>
      </Tab>
    </li>
  );
};

Item.defaultProps = {
  textColors: {
    active: 'text-black',
    inactive: 'text-gray-700'
  },
  selectorStyle: 'normal' // to change styles for when you have multiple items
};

export default Item;
