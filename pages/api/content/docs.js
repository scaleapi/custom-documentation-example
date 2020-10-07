import { getDocsSearch } from 'docs/lib/content/docs';

export default async function DocsEntry(req, res) {
  const results = await getDocsSearch(req.query.search);
  res.json(results);
}
