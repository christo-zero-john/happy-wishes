import TextEffectGlow from "../text-effects/text-effect-glow";
import "../../styles/home-page-loading.css";

function HomePageLoading(props) {
  let message = props.message;

  return (
    <div className="loading-home-page hd-100 overflow-auto bg-black d-flex flex-column justify-content-center align-items-center">
      <TextEffectGlow />
      <p className="message message-animation text-uppercase px-3 py-1 rounded">{message}</p>
    </div>
  );
}

export default HomePageLoading;
