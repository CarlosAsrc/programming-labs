import React, { useEffect, useState, useRef } from "react";
import Input from "./Input";

const AppFunction = (props) => {
  const [crowd, setCrowd] = useState([]);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const nameRef = useRef(null);
  const birthRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCrowd = {
      id: crowd.length + 1,
      name: name,
      birth: birth,
    };
    setCrowd([...crowd, newCrowd]);

    setName("");
    setBirth("");
    nameRef.current.value = "";
    birthRef.current.value = "";
  };

  useEffect(() => {
    const crowdMock = [
      {
        id: 1,
        name: "Carlos",
        birth: "1999-04-1999",
      },
    ];
    setCrowd(crowdMock);
    console.log("effect fired");
  }, []);

  return (
    <div>
      <h2 className="text-center">{props.msg}</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          title="Name"
          type="text"
          name="name"
          id="name"
          ref={nameRef}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          title="Birth"
          type="date"
          name="birth"
          id="birth"
          ref={birthRef}
          className="form-control"
          onChange={(e) => setBirth(e.target.value)}
        ></Input>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <hr />
      <ul>
        {crowd.map((item) => (
          <li key={item.id}>
            <div>
              {item.name}: {item.birth}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppFunction;
