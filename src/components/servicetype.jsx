import React from "react";
// icons
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Service = ({ service }) => {
  const servicefunction = () => {
    if (service === 1) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineNormalIcon />
          </div>
          <p>Ordinary</p>
        </div>
      );
    }
    else if (service === 2) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineExtraIcon />
          </div>
          <p>Express Non-AC</p>
        </div>
      );
    }
    else if (service === 3) {
      return (
        <div>
          <div className="flex justify-center pb-2">
            <AirlineSeatReclineExtraIcon />
            <AcUnitIcon />
          </div>
          <p>Express AC</p>
        </div>
      );
    }
  };


  return <div>
    {servicefunction()}
  </div>;
};

export default Service;
