import List from "../../components/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";



const Product = () => {
  const cardId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([])
  
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${cardId}`
  );
  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCats)

  return (
    <section className="py-5 px-4 md:px-12 flex flex-col md:flex-row">
  <div className="LEFT flex-1 md:sticky  top-0 flex flex-col gap-4 mb-6 md:mb-0">
    <div className="">
      <h1 className="font-poppins text-gray-600 font-bold text-lg md:text-xl">Product Categories</h1>
      {data?.map((item) => (
        <div className="flex gap-3 items-center" key={item.id}>
          <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
          <label htmlFor={item.id} className="font-poppins text-gray-800">{item.attributes.title}</label>
        </div>
      ))}
    </div>
    <div className="">
      <h1 className="font-poppins text-gray-900 text-lg md:text-xl">Filter by price</h1>
      <div className="flex w-11 items-center gap-2">
        <span>0</span>
        <input
          type="range"
          min={0}
          max={1000}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="flex-grow"
        />
        <span>{maxPrice}</span>
      </div>
    </div>
    <div className="">
      <h1 className="font-poppins text-gray-800 text-lg md:text-xl">Sort by</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input type="radio" name="price" id="asc" value="asc" onChange={e => setSort('asc')} />
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="price" id="desc" value="desc" onChange={e => setSort('desc')} />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>
    </div>
  </div>

  <div className="RIGHT flex-[3]">
    <img
      className="w-full h-[200px] md:h-[300px] object-cover mb-6 md:mb-12"
      src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt=""
    />
    <List cardId={cardId} maxPrice={maxPrice} sort={sort} SubCat={selectedSubCats} />
  </div>
</section>

  );
};

export default Product;
