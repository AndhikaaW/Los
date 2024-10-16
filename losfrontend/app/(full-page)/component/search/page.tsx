import React from 'react';
import { InputText } from 'primereact/inputtext';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm, placeholder = "Cari..." }) => {
  return (
    <div className="p-input-icon-right flex justify-content-end">
      <i className="pi pi-search" />
      <InputText 
        value={searchTerm} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default SearchFilter;