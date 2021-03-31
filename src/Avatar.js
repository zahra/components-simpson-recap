const Avatar = ({ image, firstName, lastName }) => {
  console.log(image);
  console.log(firstName);
  console.log(lastName);
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <img src={image} />
    </div>
  );
};

export default Avatar;
