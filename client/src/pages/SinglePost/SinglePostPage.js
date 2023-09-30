import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePostComp from "../../components/SinglePostComp/SinglePostComp";

import "./SinglePostPage.css";

const SinglePostPage = () => {
  return (
    <div className="single-page">
      <SinglePostComp />
      <Sidebar />
    </div>
  );
};

export default SinglePostPage;
