import React from 'react';

import SiteHead from 'docs/components/shared/Head';
import Main from 'docs/components/docs/Main';

const Docs = ({
  topLevelNavigation,
  subLevelNavigation,
  title,
  content,
  slug,
  updated
}) => (
  <>
    <SiteHead />
    <Main
      topLevelNavigation={topLevelNavigation}
      subLevelNavigation={subLevelNavigation}
      title={title}
      content={content}
      slug={slug}
      updated={updated}
    />
  </>
);

export default Docs;
