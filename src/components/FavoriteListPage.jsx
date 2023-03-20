import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import Footer from "../pages/Footer";
import CartCategory from "./Category/CartCategory";
import Navbar from "./Navbar";

const FavoriteListPage = () => {
  const [state, dispatch] = useContext(ProductsContext);

  return (
    <>
      <Navbar />

      <div className=" min-h-[100vh]">
        {state.favList.length === 0 ? (
          ""
        ) : (
          <div className="  w-full rounded-xl my-7">
            <section className="mx-8 grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-8  pb-4">
              {state.favList.map((item) => (
                <CartCategory key={item.id} item={item} />
              ))}
            </section>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default FavoriteListPage;
