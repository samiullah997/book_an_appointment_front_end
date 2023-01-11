import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleBike } from '../../redux/actions/bikeAction';

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  // const bikeData = useSelector((state) => state.bikeReducer);
  // const { bike } = bikeData;
  // if (!bike) {
  //   return (
  //     <h6 className=''>Loading ...</h6>
  //   );
  // }
  const bike = [
    {
      id: 1,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
    },
    {
      id: 2,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
    },
    {
      id: 3,
      name: 'Raptor 300 V-TWIN Bike',
      picture: 'https://rapidrides.pk/wp-content/uploads/2022/03/size-scaled.jpg',
      price: '1,560,000.00',
    },
    {
      id: 4,
      name: 'Pulsar P150',
      picture: 'https://cdn.bajajauto.com/-/media/Assets/bajajauto/bikes/BikeListing/Pulsar/p-n-160.ashx',
      price: '119757',
    },
  ];
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = bike.slice(indexOfFirstPost, indexOfLastPost);
  const nextPage = () => {
    if (currentPage >= bike.length / postPerPage) return;
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };
  return (
    <section className="container flex flex-col border h-full sm:h-200 sm:w-full items-center">
      <h2 className="mt-8">Hello Welcome to your Dashboard</h2>
      <h3 className="mt-2">List of your favourite Bikes</h3>
      <div className="">.........................</div>
      <div className="container flex flex-row justify-center items-center h-full">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-full" type="button" onClick={prevPage}>
          Prev
        </button>
        <div className="container flex flex-row px-3 space-x-3 justify-center items-center h-auto">
          {
            currentPosts.map((item) => {
              const {
                name, picture, price, id,
              } = item;
              return (
                <div className="h-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={id}>
                  <img className="rounded-t-lg w-96 h-96 lg:w-50 lg:h-50" src={picture} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
                    <Link to={`/user/bikes/${id}`} onClick={() => dispatch(singleBike(id))}>
                      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </div>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-full" type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Home;
