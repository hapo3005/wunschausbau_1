const base = import.meta.env.BASE_URL;

export function withBase(path = '/') {
  const normalizedPath = path.replace(/^\/+/, '');
  return normalizedPath ? `${base}${normalizedPath}` : base;
}
