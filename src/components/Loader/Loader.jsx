import { LoaderWrapper } from "./Loader.styled";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => (
  <LoaderWrapper>
    <ThreeDots color="#ff6b08" height={80} width={80} />
  </LoaderWrapper>
);

export default Loader;
