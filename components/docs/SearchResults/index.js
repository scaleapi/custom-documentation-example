import React, { useState } from 'react';

import { Wrapper, TabPanel } from 'react-aria-tabpanel';
import Selector from 'docs/components/shared/tab-selector/Selector';
import Item from 'docs/components/shared/tab-selector/Item';

import SearchItem from './SearchItem';
import styles from './SearchResults.module.css';

const SearchResults = ({ items, query }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [selectorLeft, setSelectorLeft] = useState(0);
  const [selectorWidth, setSelectorWidth] = useState(0);

  const onClickSelector = (width, left) => {
    setSelectorWidth(width);
    setSelectorLeft(left);
  };

  const onChange = id => {
    setActiveTab(id);
  };

  return (
    <Wrapper onChange={onChange}>
      <div
        className={`${styles.wrapper} bg-white dark:bg-gray-800 light:shadow-2xl rounded-1 flex flex-col pt-1 overflow-hidden relative z-10`}
      >
        <div className="px-4 mb-2 relative z-10" onClick={ev => ev.stopPropagation()}>
          <Selector
            selectorWidth={selectorWidth}
            selectorLeft={selectorLeft}
            delayOnLoad={false}
            centered={false}
            allowDarkMode
          >
            {tabs.map(tab => (
              <Item
                isActive={activeTab === tab.id}
                id={tab.id}
                label={tab.label}
                onClick={onClickSelector}
                key={`search-filter-${tab.id}`}
                textColors={{
                  active: 'text-black dark:text-white',
                  inactive: 'text-black dark:text-white'
                }}
              />
            ))}
          </Selector>
        </div>
        {tabs.map(tab => (
          <div className="overflow-auto">
            <TabPanel tabId={tab.id} key={tab.id} active={activeTab === tab.id}>
              {activeTab === tab.id && (
                <ul className="pb-3">
                  {tab.id === 'all' && items &&
                    items.map(item => <SearchItem key={`search-item-${item.title}`} item={item} />)}
                  {tab.id === 'documentation' && items &&
                    items
                      .filter(item => !item.isReference)
                      .map(item => <SearchItem key={`search-item-${item.title}`} item={item} />)}
                  {tab.id === 'api-reference' && items &&
                    items
                      .filter(item => item.isReference)
                      .map(item => <SearchItem key={`search-item-${item.title}`} item={item} />)}
                </ul>
              )}
            </TabPanel>
          </div>
        ))}
        {items && !items.length && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {query === '' && (
              <p className="text-sm text-black dark:text-white">Start typing to search...</p>
            )}
            {query !== '' && (
              <>
                <p className="text-sm text-black dark:text-white">Try a different search.</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">No results for `{query}`</p>
              </>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const tabs = [
  {
    label: 'All',
    id: 'all',
    index: 0
  },
  {
    label: 'Documentation',
    id: 'documentation',
    index: 1
  },
  {
    label: 'API Reference',
    id: 'api-reference',
    index: 2
  }
];

export default SearchResults;
