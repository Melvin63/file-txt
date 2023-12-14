const User = ({ Name, location }) => {
  return (
    <div className="about">
      {" "}
      <h1>name : {Name}</h1>
      <h2>Location : {location}</h2>
    </div>
  );
};

export default User;
