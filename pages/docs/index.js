import React from 'react';

import { getDocsCategories, getDocsSubcategories } from 'docs/lib/content/docs';

import DocsContainer from 'docs/containers/docs';

export async function getStaticProps() {
  const props = {};
  try {
    props.topLevelNavigation = await getDocsCategories();
    props.subLevelNavigation = await getDocsSubcategories();
  } catch (error) {
    console.log(error);
  }
  return { props, revalidate: 1 };
}

const Docs = ({ topLevelNavigation, subLevelNavigation }) => {
  return (
    <DocsContainer
      topLevelNavigation={topLevelNavigation}
      subLevelNavigation={subLevelNavigation}
    />
  );
};

export default Docs;
