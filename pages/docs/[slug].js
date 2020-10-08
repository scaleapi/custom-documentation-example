import React from 'react';
import Error from 'next/error'

import {
  getDocEntry,
  getDocsEntries,
  getDocsCategories,
  getDocsSubcategories
} from 'docs/lib/content/docs';

import DocsContainer from 'docs/containers/docs';

export async function getStaticPaths() {
  let pages = [];

  try {
    pages = await getDocsEntries();
  } catch (error) {
    throw error;
  }

  let paths = [];

  if (pages) {
    paths = pages.map(page => ({
      params: { slug: page.slug }
    }));
  }

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const props = {};
  try {
    props.topLevelNavigation = await getDocsCategories();
    props.subLevelNavigation = await getDocsSubcategories();
    props.content = await getDocEntry(params.slug);
    props.slug = params.slug;
  } catch (error) {
    throw error;
  }

  return { props, revalidate: 1 };
}

const Docs = ({ topLevelNavigation, subLevelNavigation, content, slug }) => {
  if (!content) {
    return <Error statusCode={404} />;
  }
  return (
    <DocsContainer
      topLevelNavigation={topLevelNavigation}
      subLevelNavigation={subLevelNavigation}
      slug={slug}
      seoTitle={content.metadata.title}
      seoDescription={content.metadata.description}
      title={content.title}
      content={content.body_html}
      updated={content.updatedAt}
    />
  );
};

Docs.defaultProps = {
  slug: null
};

export default Docs;
