import Card from "../Cards";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <section className="my-12 px-4 md:px-16 lg:px-24 xl:px-52">
      <div className="flex font-poppins flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12">
        <h1 className="flex-[2] uppercase font-bold text-xl mb-4 lg:mb-0">{type} products</h1>
        <p className="flex-[3] text-gray-600 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap  gap-4 md:gap-8 flex-col md:flex-row">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id}  />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
