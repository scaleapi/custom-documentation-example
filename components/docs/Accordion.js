import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

const Accordion = ({ title, items, show, slug, index, toggle }) => {
  return (
    <div className="mb-3 last:mb-0">
      <div
        className="cursor-pointer text-base text-gray-900 dark:text-gray-300 flex items-center select-none group"
        key={index}
        onClick={() => toggle(index, show)}
      >
        <span className="w-3 mr-2">
          <svg 
            className={cn('w-full h-auto fill-current text-black dark:text-white transition duration-250', { 'transform rotate-90': show })}
            viewBox="0 0 24 24" 
          >
            <path d="M9.60022 16.8265L9.60022 7.17773C9.60022 6.51023 10.4065 6.17648 10.879 6.64898L15.7052 11.4715C15.9977 11.764 15.9977 12.2402 15.7052 12.5327L10.879 17.3552C10.4065 17.8277 9.60022 17.494 9.60022 16.8265Z" />
          </svg>
        </span>
        <p className="transition-color duration-250 group-hover:opacity-80">{title}</p>
      </div>
      <div
        className="h-auto overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: !show ? '0px' : '500px' }}
      >
        <ul className="pt-2 pl-6 pb-3">
          {items.map(item => (
            <li key={`${item.title}`}>
              {item.slug && (
                <div className="mb-1 last:mb-0" key={`${item.title}`}>
                  <Link href="/docs/[slug]" as={`/docs/${item.slug}`}>
                    <a className="group relative text-sm font-normal text-gray-800 dark:text-gray-400">
                      <span
                        className={cn(
                          'w-2 absolute group-hover:opacity-100 transition-opacity duration-250',
                          item.slug !== slug ? 'opacity-0' : ''
                        )}
                        style={{ left: '-32px', top: 'calc(50% - 16px / 2)' }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-gray-900 dark:text-gray-300"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.60684 12.1142C9.41154 12.3097 9.0947 12.3099 8.89917 12.1146C8.70363 11.9193 8.70344 11.6025 8.89874 11.4069L11.804 8.50522H3.00244C2.7263 8.50522 2.50244 8.28136 2.50244 8.00522C2.50244 7.72908 2.7263 7.50522 3.00244 7.50522H11.7955L8.89874 4.61195C8.70344 4.41641 8.70363 4.09957 8.89917 3.90427C9.0947 3.70897 9.41154 3.70916 9.60684 3.9047L13.3624 7.65582C13.5577 7.85072 13.5581 8.16705 13.3632 8.36236C13.3629 8.36261 13.3627 8.36285 13.3624 8.3631L9.60684 12.1142Z"
                          />
                        </svg>
                      </span>
                      <span
                        className={cn(
                          'transition-color duration-250',
                          item.slug !== slug
                            ? 'group-hover:opacity-80'
                            : 'text-gray-900 dark:text-gray-300 group-hover:opacity-100'
                        )}
                      >
                        {item.title}
                      </span>
                    </a>
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
