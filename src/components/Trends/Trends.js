import "./Trends.scss";
import { FormattedMessage } from "react-intl";
import useFetch from "../../hooks/useFetch";

// const API_URL_TRENDING = `${process.env.REACT_APP_API_URL_TRENDING}`;
const API_URL_TRENDING = `${process.env.REACT_APP_API_URL_POPULAR}`;

const Trends = () => {
  const [moviesTrending] = useFetch(API_URL_TRENDING);
  console.log(moviesTrending);

  return (
    <div className="trend">
      <div className="trend__header">
        <h1 className="trend__header--title">
          <FormattedMessage id="home:bienvenida"></FormattedMessage>
        </h1>
        <h2 className="trend__header--subtitle">
          <FormattedMessage id="home:bienvenida-texto"></FormattedMessage>
        </h2>
      </div>
      <div className="trend__selection">
        <h2 className="trend__selection--title">
          <strong>
            <FormattedMessage id="home:tendencias" />
          </strong>
        </h2>
        <button className="trend__selection--btn">
          <FormattedMessage id="home:hoy" />
        </button>
        <button className="trend__selection--btn">
          <FormattedMessage id="home:esta-semana" />
        </button>
      </div>
      <div>
        {/* {moviesTrending.results?.map((item) => console.log("hola"))} */}
      </div>
    </div>
  );
};

export default Trends;
