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
};
export default Home;
