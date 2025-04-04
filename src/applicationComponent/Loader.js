import { connect } from "react-redux";
import LoaderGif from "../assets/loader.gif";

const loaderOnComp = (props) => {
  const { showLoader } = props;
  if (!showLoader) return null;
  return (
    <div class="loader-container">
      <div className="loader">
        <img src={LoaderGif} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoader: state.register.showLoader,
  };
};

export const Loaderon = connect(mapStateToProps)(loaderOnComp);

export const loaderOff = () => {
  return null;
};
