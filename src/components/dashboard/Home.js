import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleBike } from '../../redux/reducer/bikeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const bikeData = useSelector((state) => state.bikeReducer);
  const { bikes } = bikeData;
  const reversed = [...bikes].reverse();
  if (reversed.length === 0) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <img
          src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
          className="w-10 h-10"
          alt="loading"
        />
      </div>
    );
  }
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = reversed.slice(indexOfFirstPost, indexOfLastPost);
  const nextPage = () => {
    if (currentPage >= reversed.length / postPerPage) return;
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };
  return (
    <section className="container overflow-scroll flex flex-col border h-full sm:h-200 sm:w-full items-center">
      <h2 className="mt-8 text-4xl font-bold text-purple-600">
        Hello Welcome to your Dashboard
      </h2>
      <h3 className="mt-2">List of your favourite Bikes</h3>
      <div className="">.........................</div>
      <div className="container w-full flex flex-row justify-center items-center h-full">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-full"
          type="button"
          onClick={prevPage}
        >
          Prev
        </button>
        <div className="container w-4/5 flex flex-row px-3 space-x-3 justify-center items-center h-auto">
          {currentPosts.map((item) => {
            const {
              name, picture, price, id,
            } = item;
            return (
              <div
                className="h-full w-3/5 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                key={id}
              >
                <img
                  className="rounded-t-lg w-96 h-96 lg:w-50 lg:h-50"
                  src={picture}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    $
                    {price}
                  </p>
                  <div className="flex flex-row justify-between">
                    <Link
                      to={`/user/Details?id=${id}`}
                      onClick={() => dispatch(singleBike(id))}
                    >
                      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fillRule="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-full"
          type="button"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </section>
  );
};
export default Home;
