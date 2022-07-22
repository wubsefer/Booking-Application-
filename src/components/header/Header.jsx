import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faMagnet,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMagnet} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDisc">
          Search deals on hotels, homes, and much more...
        </p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where you want to go"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            <div className="options">
              <div className="optionsItem">
                <span className="optionText">Adult</span>
                <div className="optionsCounter">
                  <button className="optionCounterbtn">-</button>
                  <span className="optioncounterNumber">1</span>
                  <button className="optionCounterbtn">+</button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterbtn">-</button>
                  <span className="optioncounterNumber">0</span>
                  <button className="optionCounterbtn">+</button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterbtn">-</button>
                  <span className="optioncounterNumber">1</span>
                  <button className="optionCounterbtn">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchItemBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
