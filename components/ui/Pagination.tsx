import React from "react";

const Pagination: React.FC<{
  paginateFront: () => void;
  paginateBack: () => void;
  ItemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber) => void;
  currentPage: number;
}> = ({
  ItemsPerPage,
  totalItems,
  paginate,
  currentPage,
  paginateBack,
  paginateFront,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / ItemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap gap-1 justify-center items-center">
          <li>
            <a
              onClick={() => {
                paginateBack();
              }}
              href="#"
              className="flex justify-center items-center leading-tight text-gray-500 hover:bg-blue-400 hover:rounded-full font-medium xl:text-base  w-5 h-5 xl:w-8 xl:h-8 text-[10px]"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5 xl:w-8 xl:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          <li className="space-x-0 xl:space-x-2 ">
            {pageNumbers.map((number) => (
              <a
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className={
                  currentPage === number
                    ? "bg-[#2F80ED] rounded-full  text-white hover:bg-blue-400 relative inline-flex items-center justify-center xl:px-4 xl:py-4 border  font-medium xl:text-base  w-5 h-5 xl:w-8 xl:h-8 text-[11px] "
                    : "text-gray-500 hover:bg-blue-400  hover:rounded-full relative inline-flex items-center justify-center xl:px-4 xl:py-4   font-medium xl:text-base  w-5 h-5 xl:w-8 xl:h-8 text-[10px]"
                }
              >
                {number}
              </a>
            ))}
          </li>
          <li>
            <a
              onClick={() => {
                paginateFront();
              }}
              href="#"
              className="flex justify-center items-center ml-0 leading-tight text-gray-500 hover:bg-blue-400 hover:rounded-full font-medium xl:text-base  w-5 h-5 xl:h-8 xl:w-8 text-[10px] "
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5 xl:w-8 xl:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
