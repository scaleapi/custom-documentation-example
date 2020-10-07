const requestConfig = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'x-readme-version': '1',
    Authorization: `Basic ${process.env.README_AUTH_TOKEN}`
  }
};

async function getDocsCategories() {
  const result = await fetch('https://dash.readme.io/api/v1/categories', requestConfig);
  const json = await result.json();
  return json.filter(category => !category.reference);
}

async function getDocsSubcategories() {
  const categories = await getDocsCategories();
  const subcategoriesPromise = categories.map(subcategory => fetchSubcategory(subcategory.slug));
  const subcategories = await Promise.all(subcategoriesPromise);
  return subcategories;
}

async function getDocsEntries() {
  const categories = await getDocsCategories();
  const subcategoriesPromise = categories.map(subcategory => fetchSubcategory(subcategory.slug));
  const subcategories = await Promise.all(subcategoriesPromise);

  const entriesSlugs = subcategories.map(item => item.map(page => page.slug));
  const entriesArray = [].concat.apply([], entriesSlugs);
  const entriesPromise = entriesArray.map(entry => fetchEntry(entry));
  const entriesJson = await Promise.all(entriesPromise);
  return entriesJson;
}

async function getDocEntry(query = {}) {
  const result = await fetch(`https://dash.readme.io/api/v1/docs/${query}`, requestConfig);
  const json = await result.json();
  return json;
}

async function getDocsSearch(search) {
  const result = await fetch(`https://dash.readme.io/api/v1/docs/search?search=${search}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-readme-version': '1',
      Authorization: `Basic ${process.env.README_AUTH_TOKEN}`
    }
  });
  const json = await result.json();
  return json;
}

const fetchSubcategory = async name => {
  const result = await fetch(
    `https://dash.readme.io/api/v1/categories/${name}/docs`,
    requestConfig
  );
  return result.json();
};

const fetchEntry = async entry => {
  const result = await fetch(`https://dash.readme.io/api/v1/docs/${entry}`, requestConfig);

  const json = await result.json();

  const parsed = {
    slug: json.slug,
    title: json.title,
    updatedAt: json.updatedAt
  };

  return parsed;
};

module.exports = {
  getDocsCategories,
  getDocsSubcategories,
  getDocsEntries,
  getDocsSearch,
  getDocEntry
};