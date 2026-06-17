import qs from "query-string";

interface Url {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrl {
  params: string;
  keyToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: Url) => {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currentUrl,
  });
};

export const removeKeyFormUrlQuery = ({ params, keyToRemove }: RemoveUrl) => {
  const currentUrl = qs.parse(params);

  keyToRemove.forEach((key) => {
    delete currentUrl[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
