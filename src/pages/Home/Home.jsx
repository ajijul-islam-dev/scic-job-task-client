import { Input, Option, Select } from "@material-tailwind/react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const Axios = useAxios();

  const [brandName, setBrandName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [categoryName, setCategoryname] = useState("");

  const params = new URLSearchParams();

  if (brandName) params.append("brandName", brandName);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);
  if (sortBy) params.append("sortBy", sortBy);
  if (categoryName) params.append("categoryName", categoryName);

  // fetch all categoris from database
  useEffect(() => {
    Axios.get("/categories").then((res) => {
      setCategories(["All", ...res.data.data]);
    });
  }, []);
  // get product by filtering
  useEffect(() => {
    Axios.get(`/products?${params.toString()}`).then((res) =>
      setProducts(res.data.data)
    );
  }, [brandName, minPrice, maxPrice, sortBy, categoryName]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products?.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-32 mb-14">
        Search Products
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 mx-3 md:mx-20">
        <div className="w-full">
          <Input
            onChange={(e) => setBrandName(e.target.value)}
            label="Input With Icon"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full">
            <Input
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
              placeholder="min price"
              name="minPrice"
              label="min price"
            />
          </div>
          <Input
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
            placeholder="max price"
            name="maxPrice"
            label="max price"
          />
          <Select
            onChange={(e) => setSortBy(e)}
            size="md"
            label="Sort By"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            <Option value="price" className="flex items-center gap-2">
              Price
            </Option>
            <Option value="date" className="flex items-center gap-2">
              Date
            </Option>
          </Select>
          <Select
            onChange={(e) => setCategoryname(e)}
            size="md"
            label="Categorize By"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            {categories?.map((category, i) => (
              <Option
                key={i}
                value={category == "All" ? "" : category}
                className="flex items-center gap-2"
              >
                {category}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      {currentItems?.length > 0 ? (
        <div className="md:mx-20  mx-2 mt-16 grid grid-cols-1 md:grid-cols-4 gap-3">
          {currentItems?.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
        </div>
      ) : (
        <div className="w-full h-[20vh] flex items-center justify-center">
          <p className="text-2xl font-bold text-gray-500">Nothing to Show 😒</p>
        </div>
      )}

      <div className="w-full mx-auto text-center block">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination w-full flex justify-center mt-8"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Home;
