export type RouteSearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function withSearchParams(
  path: string,
  searchParams: RouteSearchParams,
): Promise<string> {
  const params = await searchParams;
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
    } else if (value !== undefined) {
      query.set(key, value);
    }
  }

  const serialized = query.toString();
  return serialized ? `${path}?${serialized}` : path;
}
