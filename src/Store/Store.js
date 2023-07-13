import React,{memo} from "react";
import Items from "./Items";

const Store = () => {
  
  return (
    <React.Fragment>
      <Items />
    </React.Fragment>
  );
};

export default memo(Store);
