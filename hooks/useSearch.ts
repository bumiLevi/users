import { useMemo, useState } from 'react';

// Define the search type options


function useSearch<T>(initialItems:T[]) {
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchBy, setSearchBy] = useState<string>('');

  const filteredItems = useMemo(() => {
    if (!searchWord) return initialItems;

    return initialItems.filter((item) =>
      `${item[searchBy as keyof T]}`.toLowerCase().includes(searchWord.toLowerCase())
    );
  }, [initialItems, searchWord, searchBy]);

  return {
    searchWord,
    setSearchWord,
    searchBy,
    setSearchBy,
    filteredItems,
  };
}

export default useSearch;
