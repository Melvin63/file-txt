const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-3 m-3">Contact Page</h1>
      <form className="flex flex-col  items-center ">
        <input
          className=" p-3 m-4 border border-teal-800  w-3/6 rounded-md"
          placeholder="Name"
        ></input>
        <input
          className="p-3 m-4 border border-teal-800  w-3/6  rounded-md"
          placeholder="Message"
        ></input>
        <button className="p-3 m-4 border border-teal-800 bg-gray-500 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
