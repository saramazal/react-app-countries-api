import { BoxesLoader } from "react-awesome-loaders";


export const BoxesLoaderComponent = () => {
  return (
     <>
      <BoxesLoader
        className="loader"
        boxColor={"#FF0266"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
       </>
  );
};

export default BoxesLoaderComponent;