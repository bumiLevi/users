import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const useSort = (list: any[]) => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [csvIsOpen, setCsvIsOpen] = useState(false);
  const [oneIsOpen, setOneIsOpen] = useState(false);
  
  const handleCsvOpen = () => {
    setCsvIsOpen(true);
  };

  const handleCsvClose = () => {
    setCsvIsOpen(false);
  };

  const handleOneOpen = () => {
    setOneIsOpen(true);
  };

  const handleOneClose = () => {
    setOneIsOpen(false);
  };

  const handleSort = (column:string) => {
    if (sortBy === column) {
      toggleSortOrder(); // Switch order if the same column is clicked
    } else {
      setSortBy(column); // Set a new column for sorting
    }
  };
  
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedList = useMemo(() => {
    if (!sortBy) return list;

    return [...list].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortBy, sortOrder, list]);

  return {handleSort, sortBy, setSortBy, sortOrder, toggleSortOrder, sortedList,handleCsvOpen, handleCsvClose,csvIsOpen,handleOneOpen, handleOneClose,oneIsOpen};
};


export default useSort;
