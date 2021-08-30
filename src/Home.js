import { useState } from "react";

const Home = () => {
  //let name = "tony";
  const [name, setName] = useState("tony");
  const [age, setAge] = useState(50);

  const handleClick = () => {
    setName("steve");
    setAge(46);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
