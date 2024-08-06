import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./List.scss";
import Card from "../Card/Card";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Construct the base query
  let query = `/products?populate=*&[filters][categories][id]=${catId}`;

  // Add sub-categories to the query if any
  if (subCats.length > 0) {
    const subCatsQuery = subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join('');
    query += subCatsQuery;
  }

  // Add max price to the query
  query += `&[filters][price][$lte]=${maxPrice}`;

  // Add sorting to the query if sort is not null
  if (sort) {
    query += `&sort=price:${sort}`;
  }

  const { data, loading, error } = useFetch(query);

  if (loading) return <div aria-label="Loading products">Loading...</div>;
  if (error) return <div aria-label="Error loading products">Error loading products.</div>;

  return (
    <div className="list" role="list">
      {data?.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
