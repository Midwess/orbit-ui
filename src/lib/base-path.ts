const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, '')

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}` || '/'
}

export function withoutBasePath(pathname: string) {
  if (!normalizedBase || !pathname.startsWith(`${normalizedBase}/`) && pathname !== normalizedBase) return pathname
  return pathname.slice(normalizedBase.length) || '/'
}
