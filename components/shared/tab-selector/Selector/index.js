import React from 'react';
import cn from 'classnames';

import { TabList } from 'react-aria-tabpanel';

import styles from './Selector.module.css';

const Selector = ({
  children,
  selectorWidth,
  selectorLeft,
  opacity,
  centered,
  delayOnLoad,
  allowDarkMode
}) => (
  <TabList>
    <div
      className={cn(
        'flex relative transition-opacity duration-1000',
        selectorWidth === 0 && selectorLeft === 0 ? 'opacity-0' : 'opacity-100',
        { 'delay-500': delayOnLoad }
      )}
    >
      <div
        className={cn(
          {
            'bg-opacity-40': opacity,
            [`${styles.withFilter}`]: opacity,
            'mx-auto': centered
          },
          'bg-gray-200 mb-2 lg:mb-0 p-1/2 rounded-3 relative whitespace-no-wrap overflow-y-hidden overflow-x-auto',
          { 'dark:bg-gray-800 dark:border dark:border-gray-600': allowDarkMode }
        )}
      >
        <div
          className={cn(
            { 'dark:bg-gray-700': allowDarkMode },
            'h-5 rounded-3 px-2 bg-white shadow-base absolute left-0 transition-all duration-250'
          )}
          style={{
            width: `${selectorWidth}px`,
            transform: `translate3d(${selectorLeft}px, 0, 0)`
          }}
        />
        <ul>{children}</ul>
      </div>
    </div>
  </TabList>
);

Selector.defaultProps = {
  centered: true, // to center align the selector
  delayOnLoad: true, // to add delay to load animation
  allowDarkMode: false // to allow component to work with dark mode media queries
};

export default Selector;
