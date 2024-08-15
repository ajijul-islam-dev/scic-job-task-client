import { Input, Option, Select } from "@material-tailwind/react";


const Home = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold text-center mt-32 mb-14">Search Products</h2>
      <div className="flex items-center justify-between gap-20  mx-20">
        <div className="w-full">
          <Input
          
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
        <div className="flex gap-5">
          <Select
            size="md"
            label="Select Country"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            <Option key={name} value={name} className="flex items-center gap-2">
              Bangladesh
            </Option>
          </Select>
          <Select
            size="md"
            label="Select Country"
            selected={(element) =>
              element &&
              React.cloneElement(element, {
                disabled: true,
                className:
                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
              })
            }
          >
            <Option key={name} value={name} className="flex items-center gap-2">
              Bangladesh
            </Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Home;
