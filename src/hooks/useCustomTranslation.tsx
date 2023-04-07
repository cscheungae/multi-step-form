import useTranslation from 'next-translate/useTranslation';
import React, { useCallback } from 'react';
import v from 'voca';

/**
 *
 * @param fileName refer to the json fileName in locales/en in root directory, e.g. if you want to use common.json file, pass 'common' as an argument
 */
function useCustomTranslation(fileName: string) {
  const { t, lang } = useTranslation(fileName);

  /* t with capitalized the first letter */
  const tCapFirst = useCallback(
    (key: string) => v.capitalize(t(key), true),
    [t]
  );

  return {
    tCapFirst,
  };
}

export default useCustomTranslation;
