import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';

import Close from 'docs/components/shared/Close';
import Accordion from 'docs/components/docs/Accordion';

const Sidebar = ({ topLevelNavigation, subLevelNavigation, slug }) => {
  const [isOpen, setOpen] = useState(false);
  const [openHeaderMobile, setOpenHeaderMobile] = useState(false);

  const toggle = (index, show) => {
    if (!show) {
      setOpen(index);
    } else {
      setOpen(false);
    }
  };

  const toggleHeaderMobile = () => {
    setOpenHeaderMobile(!openHeaderMobile);
  };

  return (
    <div className="bg-white lg:bg-gray-100 dark:bg-transparent lg:dark:bg-black px-2 lg:px-0 -mx-2 lg:mx-0">
      <header className="h-10 flex items-center justify-between lg:justify-start border-b border-gray-200 dark:border-gray-800">
        <Link href="/">
          <a className="text-black dark:text-white text-2xl">Docs</a>
        </Link>
        <div className="block lg:hidden">
          <Close handleClick={toggleHeaderMobile} />
        </div>
      </header>
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className={cn('pt-4 pb-4 lg:pt-6 lg:block', openHeaderMobile ? 'block' : 'hidden')}>
          <div className="mb-3">
            <Link href="/docs">
              <a className="cursor-pointer font-normal text-base text-gray-900 dark:text-gray-300 flex items-center group">
                <p className="transition-color duration-250 group-hover:opacity-80">Home</p>
              </a>
            </Link>
          </div>
          {topLevelNavigation && topLevelNavigation.map((item, i) => (
            <Accordion
              key={item.title}
              title={item.title}
              items={subLevelNavigation[i]}
              show={isOpen === i || subLevelNavigation[i].find(item => item.slug === slug)}
              slug={slug}
              index={i}
              toggle={toggle}
            />
          ))}
        </div>
      </StickyBox>
    </div>
  );
};

export default Sidebar;
