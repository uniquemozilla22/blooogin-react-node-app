import { useDispatch } from "react-redux";
import { onLoading, onNotLoading } from "../store/slice/Loading";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(onLoading());

                setInterval(() => {
                  dispatch(onNotLoading());
                }, 2000);
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
