import React from 'react';
import Link from 'next/link';

import styles from './SearchItem.module.css';

const Searchitem = ({ item }) => (
  <li className={`${styles.wrapper} mb-1 last:mb-0 cursor-pointer`}>
    {item.isReference ? (
      <ExternalResult item={item}>
        <Content item={item} showMethod />
      </ExternalResult>
    ) : (
      <InternalResult item={item}>
        <Content item={item} />
      </InternalResult>
    )}
  </li>
);

const ExternalResult = ({ children, item }) => (
  <a
    href={`https://docs.scale.com/reference-link/${item.slug}`}
    target="_blank"
    className={`${styles.link} font-normal block bg-white dark:bg-gray-800 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-background duration-500`}
  >
    {children}
  </a>
);

const InternalResult = ({ children, item }) => (
  <Link href="/docs/[slug]" as={`/docs/${item.slug}`}>
    <a
      className={`${styles.link} font-normal block bg-white dark:bg-gray-800 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-background duration-500`}
    >
      {children}
    </a>
  </Link>
);

const Content = ({ item, showMethod }) => (
  <>
    <div className="flex items-center">
      {showMethod && item.method && (
        <span
          className={`${styles[item.method]} ${
            styles.badge
          } text-white dark:text-black text-center font-bold uppercase mr-1 px-1 rounded-1 block`}
        >
          {item.method}
        </span>
      )}
      <span className="block text-sm text-black dark:text-white font-bold">{item.title}</span>
    </div>
    <span
      className="block text-sm text-black dark:text-white mt-1"
      dangerouslySetInnerHTML={{ __html: item._snippetResult.body.value }}
    />
  </>
);

export default Searchitem;
