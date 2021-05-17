export const fetcher = (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  return fetch(input, init).then((res) => res.json());
};
