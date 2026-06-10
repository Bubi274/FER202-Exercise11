import { useState } from 'react';

const ITEMS = [
  'React',
  'NodeJs',
  'MongoDB',
  'Express',
  'Angular',
  'VueJs'
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = ITEMS.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <label>Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="search-list">
          {filteredItems.map((item, index) => (
            <li key={index} className="search-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
