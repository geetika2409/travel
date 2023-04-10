import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Traveltime = ({ icon, trans, time }) => {
  const arrayTimIco = new Array(trans + 1).fill(icon);
  return (
    <div>
      {trans === 0 ? (
        <div>
          <div>{icon}</div>
          <p>{`${time} minutes`}</p>
        </div>
      ) : (
        <div>
          <p>{`${trans} transfers`}</p>
          <div>
            <div>
              {arrayTimIco.map((a, index) => {
                return (
                  <div>
                    {a}
                    {index !== arrayTimIco.length - 1 && (
                      <ArrowForwardIosIcon fontSize="small"/>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p>{`${time} minutes`}</p>
        </div>
      )}
    </div>
  );
};

export default Traveltime;
