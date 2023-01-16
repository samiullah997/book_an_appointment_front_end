import { useState } from 'react';
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
  if (!reversed) {
    return <h6 className="text-center">Loading ...</h6>;
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
    <section>
      <h2>Hello Welcome to your Dashboard</h2>
      <h3> </h3>
      <div>.........................</div>
      <div>
        <button type="button" onClick={prevPage}>
          Prev
        </button>
        <div>
          {currentPosts.map((item) => {
            const { name, picture, price, id } = item;
            return (
              <div key={id}>
                <img src={picture} alt="" />
                <div>
                  <h5>{name}</h5>
                  <p>${price}</p>
                  <div>
                    <Link
                      to={`/user/Details?id=${id}`}
                      onClick={() => dispatch(singleBike(id))}
                    >
                      <div>
                        View Details
                        <svg
                          aria-hidden="true"
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
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </section>
  );
};
export default Home;
