import React, { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';

import InputSearch from 'docs/components/shared/form/InputSearch';
import SearchResults from 'docs/components/docs/SearchResults';

import { inputIconsList } from 'docs/components/icons/form/InputIcons';

import styles from './BodyContent.module.css';

const BodyContent = ({ children }) => {
  const [searchItems, updateSearchItems] = useState([]);
  const [searchQuery, updatesearchQuery] = useState('');
  const [searchBox, updateSearchBox] = useState(false);

  const [] = useDebounce(
    async () => {
      if (!searchQuery.length) {
        updateSearchItems([]);
      } else {
        fetch(searchEndpoint(searchQuery))
          .then(res => res.json())
          .then(res => {
            updateSearchItems(res.results);
          });
      }
    },
    100,
    [searchQuery]
  );

  useEffect(() => {
    window.addEventListener('click', hideModal);
    return () => {
      window.removeEventListener('click', hideModal);
    };
  }, []);

  const searchEndpoint = query => `/api/content/docs?search=${query}`;

  const onSearch = query => {
    updatesearchQuery(query);
  };

  const handleModal = ev => {
    ev.stopPropagation();
    updateSearchBox(true);
  };

  const hideModal = () => {
    updateSearchBox(false);
  };

  return (
    <div className={`${styles.bodyContent} bg-white dark:bg-gray-900`}>
      <header className="hidden lg:flex h-10 pl-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 relative">
        <div className={`${styles.inputWrapper} mr-2`}>
          <InputSearch
            icon={inputIconsList.search}
            color="text-gray-700 dark:text-gray-300"
            bg="bg-white dark:bg-gray-900"
            placeholder="Start typing to search..."
            style={{ width: '100%' }}
            onSearch={ev => onSearch(ev.target.value)}
            onClick={ev => handleModal(ev)}
            allowDarkMode
          />
        </div>
        {searchBox && <SearchResults items={searchItems} query={searchQuery} />}
        <button className="text-sm text-white bg-pink p-1 px-2 rounded-1 uppercase">Some Link</button>
      </header>
      <div className="lg:pl-8 pb-8">{children}</div>
    </div>
  );
};

export default BodyContent;
