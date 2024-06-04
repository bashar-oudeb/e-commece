import Card from "../components/Cards";
import useFetch from "../hooks/useFetch";

const List = ({ SubCat, sort, maxPrice, cardId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${cardId}${SubCat.map(
      (item) =>
        `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[price][$lte]=${maxPrice}`
  );

  return (
    <div className="flex flex-wrap  gap-4 md:gap-8 flex-col md:flex-row">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
