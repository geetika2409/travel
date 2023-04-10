import React from "react";

// icons
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PeopleIcon from '@mui/icons-material/People';

// component for seat availablitiy which shows icons and text accroding the seat availability
const Crowdseats = ({ crowd }) => {
  const rendercrowd = () => {
    if (crowd === 1) {
      return (
        <div>
          <div className="flex justify-center">
            <PeopleIcon />
          </div>
          <div className="flex justify-center">Many seats available</div>
        </div>
      );
    } else if (crowd === 2) {
      return (
        <div>
          <div className="flex justify-center">
            <GroupsIcon />
          </div> 
          <div className="flex justify-center">Some seats available</div>
        </div>
      );
    } else if (crowd === 3) {
      return (
        <div>
          <div className="flex justify-center">
            <GroupsIcon/>  
            <EmojiPeopleIcon fontSize="small"/>
          </div>
          <div className="flex justify-center">All seats occupied; standing space available</div>
        </div>
      );
    } else if(crowd === 4) {
      return (
        <div >
          <div className="flex justify-center">
            <GroupsIcon />
            <EmojiPeopleIcon fontSize="small"/>
            <EmojiPeopleIcon fontSize="small"/>
            <EmojiPeopleIcon fontSize="small"/>
          </div>
          <div className="flex justify-center">Fully crowded or packed</div>
        </div>
      );
    }
  };

  return <div>{rendercrowd()}</div>;
};

export default Crowdseats;
