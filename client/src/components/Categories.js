const Categories = () => {
  const fetchCategories = async () => {
    const res = await fetch('http://localhost:8000/categories');
    const data = await res.json();
    console.log(data);
  };
  const data = fetchCategories();
  // console.log(data);

  return <h1>Categories</h1>;
};

export default Categories;
