import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Sidebar from 'docs/components/docs/Sidebar';
import BodyContent from 'docs/components/docs/BodyContent';
import IndexPage from 'docs/components/docs/IndexPage';

import styles from './Main.module.css';

const Main = ({ topLevelNavigation, subLevelNavigation, title, content, slug, updated }) => {
  dayjs.extend(relativeTime);
  return (
    <div className={styles.mainContent}>
      <div className={`${styles.mainGrid} container min-h-screen`}>
        <Sidebar
          topLevelNavigation={topLevelNavigation}
          subLevelNavigation={subLevelNavigation}
          slug={slug}
        />
        <BodyContent>
          {content ? (
            <div className={`${styles.content} pt-4`}>
              <div className="font-maax text-4xl text-black dark:text-white pb-4 mb-4 border-b border-gray-300 dark:border-gray-800">
                {title}
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="text-sm text-gray-700 dark:text-gray-300 pt-2 mt-6 flex items-center border-t border-gray-300 dark:border-gray-800">
                <span className="mr-1">{calendarIcon}</span>
                Updated {dayjs(updated).fromNow()}
              </div>
            </div>
          ) : (
            <IndexPage />
          )}
        </BodyContent>
    </div>
  </div>
  )
}

export const calendarIcon = (
  <svg
    className="fill-current text-gray-700 dark:text-gray-300"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3.75V5.25C9 5.66421 8.66421 6 8.25 6C7.83579 6 7.5 5.66421 7.5 5.25V3.75C7.5 3.33579 7.83579 3 8.25 3C8.66421 3 9 3.33579 9 3.75ZM20.25 6V18.75C20.25 19.5784 19.5784 20.25 18.75 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V6C3.75 5.17157 4.42157 4.5 5.25 4.5H6.375C6.58211 4.5 6.75 4.66789 6.75 4.875V5.18558V5.18558C6.73686 5.97403 7.32017 6.6456 8.1027 6.74295C8.92727 6.82418 9.66155 6.22158 9.74277 5.39702C9.74759 5.34816 9.75 5.29909 9.75 5.25V4.875C9.75 4.66789 9.91789 4.5 10.125 4.5H13.875C14.0821 4.5 14.25 4.66789 14.25 4.875V5.18557V5.18557C14.2369 5.974 14.8201 6.64555 15.6026 6.74295C16.4272 6.8242 17.1615 6.22161 17.2428 5.39703C17.2476 5.34817 17.25 5.2991 17.25 5.25V4.875C17.25 4.66789 17.4179 4.5 17.625 4.5H18.75C19.5784 4.5 20.25 5.17157 20.25 6C20.25 6 20.25 6 20.25 6V6ZM18.375 10.5H5.625C5.41789 10.5 5.25 10.6679 5.25 10.875V18.375C5.25 18.5821 5.41789 18.75 5.625 18.75H18.375C18.5821 18.75 18.75 18.5821 18.75 18.375V10.875C18.75 10.6679 18.5821 10.5 18.375 10.5ZM15.75 3C16.1642 3 16.5 3.33579 16.5 3.75V5.25C16.5 5.66421 16.1642 6 15.75 6C15.3358 6 15 5.66421 15 5.25V3.75C15 3.33579 15.3358 3 15.75 3Z"
    />
  </svg>
);

export default Main;
