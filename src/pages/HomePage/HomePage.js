import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Trends from "../../components/Trends/Trends";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Trends></Trends>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
