import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Traveltime from "./traveltime";
import Crowdseats from "./crowding";
import Service from "./servicetype";

//importing icons 
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SubwayIcon from "@mui/icons-material/Subway";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";

function Basetable(props){
 // variable to store the JSON file
  let dataFile = null;
  if (props.secondOpt === "<5 km")
    dataFile = require("./sample_db_0km.json");
  else if (props.secondOpt === "5-10 km")
    dataFile = require("./sample_db_5km.json");
  else if (props.secondOpt === "10-15 km")
    dataFile = require("./sample_db_10km.json");
  else if (props.secondOpt === "15-20 km")
    dataFile = require("./sample_db_15km.json");
  else if (props.secondOpt === "20-25 km")
    dataFile = require("./sample_db_20km.json");
  else dataFile = require("./sample_db_25km.json");

  return (
    <TableContainer component={Paper}>
    {/* Starting of table*/}
       <Table 
        sx={{
          minWidth: 650,
          outlineStyle: "solid",
          outlineWidth: "thin",
          margin: "3px",
        }}
      >
        <TableHead>          {/*Head of the table*/}
        {/* 1 row*/}
            <TableRow sx={{
              outlineStyle: "solid",
              outlineWidth: "thin",
            }}>
            {/*Cells of the table of Row 1*/}
            <TableCell
              sx={{
                color:"white",
                backgroundColor: " #696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div sx={{display:"flex" ,
              fontSize:" 50"}}>
                Bus Route 1
              </div>
              <div sx={{display:"flex"}}>
                <input type="radio" value="Bus Route 1" name="Routee" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: " #696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div sx={{display:"flex"}}>
                Bus Route 2
              </div>
              <div sx={{display:"flex"}}>
                <input type="radio" value="Bus Route 2" name="Routee" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: " #696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div sx={{display:"flex"}}>
                {dataFile.Data[0].mode_4}
              </div>
              {/* showing data according to the selection in previous page */}
              <div sx={{display:"flex"}}>
                <input type="radio" value={dataFile.Data[0].mode_4} name="Routee" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: " #696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div sx={{display:"flex"}}>
                {props.firstOpt==="Own Car"?dataFile.Data[0].mode_8 :dataFile.Data[0].mode_9 }
              </div>
              <div sx={{display:"flex"}}>
                <input type="radio" value={props.firstOpt==="Own Car"?dataFile.Data[0].mode_8 :dataFile.Data[0].mode_9} name="Routee" />
              </div>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: " #696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <div sx={{display:"flex"}}>
                {props.firstOpt==="Auto"?dataFile.Data[0].mode_7 : "Ride-hailing Car" }
              </div>
              <div sx={{display:"flex"}}>
                <input type="radio" value={props.firstOpt==="Own Car"?dataFile.Data[0].mode_7 : "Ola / Uber"} name="Routee" />
              </div>
              
            </TableCell>
          </TableRow>
        </TableHead>
        {/* Row1 */}
        <TableBody>
            <TableRow>
            <TableCell align="center" colSpan={5} sx={{backgroundColor:"#000000",color:"white"}}>
              Total travel time spent while inside the vehicle
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Traveltime
                time={dataFile.Data[0]["mode_1.ivtt"]}
                icon={<DirectionsBusIcon />}
                trans={dataFile.Data[0]["mode_1.trans"]}
              />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Traveltime
                time={dataFile.Data[0]["mode_2.ivtt"]}
                icon={<DirectionsBusIcon />}
                trans={dataFile.Data[0]["mode_2.trans"]}
              />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Traveltime
                time={dataFile.Data[0]["mode_4.ivtt"]}
                icon={
                  props.secondOpt === "<5 km" ? (
                    <DirectionsBikeIcon />
                  ) : (
                    <SubwayIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
            <TableCell
              sx={{ 
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Traveltime
                time={
                  props.firstOpt === "Own Car"
                    ? dataFile.Data[0]["mode_8.ivtt"]
                    : dataFile.Data[0]["mode_9.ivtt"]
                }
                icon={
                  props.firstOpt === "Own Car" ? (
                    <DirectionsCarIcon />
                  ) : (
                    <TwoWheelerIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Traveltime
                time={
                  props.firstOpt === "Auto"
                    ? dataFile.Data[0]["mode_7.ivtt"]
                    : dataFile.Data[0]["mode_5.ivtt"]
                }
                icon={
                  props.firstOpt === "Auto" ? (
                    <ElectricRickshawIcon />
                  ) : (
                    <LocalTaxiIcon />
                  )
                }
                trans={0}
              />
            </TableCell>
          </TableRow>

          {/* Row 2*/}
          <TableRow>
          <TableCell
              align="center"
              colSpan={5}
              sx={{
                color:"white",
                backgroundColor: "black",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Total travel time spent outside vehicle(s)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>
                {`${
                 dataFile.Data[0]["mode_1.walktime"] +
                 dataFile.Data[0]["mode_1.waittime"]
                } min`}
              </p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>
                {`${
                 dataFile.Data[0]["mode_2.walktime"] +
                 dataFile.Data[0]["mode_2.waittime"]
                } min`}
              </p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>
                {`${
                 dataFile.Data[0]["mode_4.walktime"] +
                 dataFile.Data[0]["mode_4.waittime"]
                } min`}
              </p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              {props.firstOpt === "Own Car" ? (
                <p>
                  {`${
                   dataFile.Data[0]["mode_8.walktime"] +
                   dataFile.Data[0]["mode_8.waittime"]
                  } min`}
                </p>
              ) : (
                <p>
                  {`${
                   dataFile.Data[0]["mode_9.walktime"] +
                   dataFile.Data[0]["mode_9.waittime"]
                  } min`}
                </p>
              )}
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              {props.firstOpt === "Auto" ? (
                <p>
                  {`${
                   dataFile.Data[0]["mode_7.walktime"] +
                   dataFile.Data[0]["mode_7.waittime"]
                  } min`}
                </p>
              ) : (
                <p>
                  {`${
                   dataFile.Data[0]["mode_5.walktime"] +
                   dataFile.Data[0]["mode_5.waittime"]
                  } min`}
                </p>
              )}
            </TableCell>
          </TableRow>

          {/* 3rd row */}
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              sx={{
                color:"white",
                backgroundColor: "black",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Possible delay due to traffic congestion or other uncertainties
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`... up to ${dataFile.Data[0]["mode_1.tvariab"]} min more`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`... up to ${dataFile.Data[0]["mode_2.tvariab"]} min more`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`... up to ${dataFile.Data[0]["mode_4.tvariab"]} min more`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`... up to ${
                props.firstOpt === "Own Car"
                  ?dataFile.Data[0]["mode_8.tvariab"]
                  :dataFile.Data[0]["mode_9.tvariab"]
              } min more`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`... up to ${
                props.firstOpt === "Auto"
                  ?dataFile.Data[0]["mode_7.tvariab"]
                  :dataFile.Data[0]["mode_5.tvariab"]
              } min more`}</p>
            </TableCell>
          </TableRow>

          {/*4th row*/}
          <TableRow>
          <TableCell
              align="center"
              colSpan={5}
              sx={{
                color:"white",
                backgroundColor: "black",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Total one-way cost of travel
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor:"#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`Rs. ${dataFile.Data[0]["mode_1.tcost"]}`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`Rs. ${dataFile.Data[0]["mode_2.tcost"]}`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`Rs. ${dataFile.Data[0]["mode_4.tcost"]}`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`Rs. ${
                props.firstOpt === "Own Car"
                  ? dataFile.Data[0]["mode_8.tcost"]
                  : dataFile.Data[0]["mode_9.tcost"]
              }`}</p>
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <p>{`Rs. ${
                props.firstOpt === "Auto"
                  ? dataFile.Data[0]["mode_7.tcost"]
                  : dataFile.Data[0]["mode_5.tcost"]
              }`}</p>
            </TableCell>
          </TableRow>
          
          {/* 5th*/}
         <TableRow>
         <TableCell
              align="center"
              colSpan={5}
              sx={{
                color:"white",
                backgroundColor: "black",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Extent of crowding in the vehicle
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Crowdseats crowd={dataFile.Data[0]["mode_1.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Crowdseats crowd={dataFile.Data[0]["mode_2.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Crowdseats crowd={dataFile.Data[0]["mode_4.crowd"]} />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#808080",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
          </TableRow>
        
         {/* */}
        <TableRow>
        <TableCell
              align="center"
              colSpan={5}
              sx={{
                color:"white",
                backgroundColor: "black",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              Service type
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Service service={dataFile.Data[0]["mode_1.serv"]} />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            >
              <Service service={dataFile.Data[0]["mode_2.serv"]} />
            </TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
            <TableCell
              sx={{
                color:"white",
                backgroundColor: "#696969",
                outlineStyle: "solid",
                outlineWidth: "thin",
              }}
            ></TableCell>
        </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
  );
}

export default Basetable;