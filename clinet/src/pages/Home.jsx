import React, { useState } from "react";
import Container from "../components/Container/Container";
import Input from "../components/Input/Input";
import Row from "../components/Row/Row";
import Button from "../components/Button/Button";
import { DateRange } from "react-date-range";
import { format, set } from "date-fns";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {
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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const clickRef = useRef();
  // console.log(clickRef.current,"ref")
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!clickRef.current.contains(e.target)) {
  //       setOpenDate(false);
  //       setOpenOptions(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);

  const handlerClose = ()=>{
    setOpenDate(false)
    setOptions(false)
  }

  return (
    <>
      <div className="overlay__home" onClick={handlerClose} ref={clickRef}></div>
      <Container>
        <div className="header__search">
          <div className="header__overlay">
            <Row className="justify-between align-center">
              <div className="col-3">
                <Input
                  placeholder="Where are you going?"
                  className="header__search__input"
                />
              </div>
              <div className="col-3">
                <div className="header_search_item"  >
                  <span
                   onClick={() => setOpenDate(!openDate)}
                    className="header__Search__Text"
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
                      minDate={new Date()}
                    />
                  )}
                </div>
              </div>
              <div className="col-3">
              <div className="header_search_item"  >
                  <span
                   onClick={() => setOpenOptions(!openOptions)}
                    className="header__Search__Text"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="option__Item">
                        <span className="option__Text">Adult</span>
                        <div className="option__Counter">
                          <Button
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </Button>
                          <span className="option__Counter__Number">
                            {options.adult}
                          </span>
                          <Button onClick={() => handleOption("adult", "i")}>
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="option__Item">
                        <span className="option__Text">Children</span>
                        <div
                          className="option__Counter"
                          style={{ margin: "10px 0px" }}
                        >
                          <Button
                            disabled={options.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </Button>
                          <span className="option__Counter__Number">
                            {options.children}
                          </span>
                          <Button onClick={() => handleOption("children", "i")}>
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="option__Item">
                        <span className="option__Text">Room</span>
                        <div className="option__Counter">
                          <Button
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </Button>
                          <span className="option__Counter__Number">
                            {options.room}
                          </span>
                          <Button onClick={() => handleOption("room", "i")}>
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="search_button">
                <Button className="primary">Search</Button>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
