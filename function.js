export default async function ({ props }) {
  // Normalize inputs for index.html
  const urls = Array.isArray(props.urls) ? props.urls.filter(Boolean) : [];
  const zipName = (typeof props.zipName === 'string' && props.zipName.trim())
    ? (props.zipName.endsWith('.zip') ? props.zipName : `${props.zipName}.zip`)
    : 'download.zip';
  const requestHeaders = Array.isArray(props.requestHeaders) ? props.requestHeaders : [];

  return { urls, zipName, requestHeaders };
}
