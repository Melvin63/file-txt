const Shimmer = () => {
  const shimmerCards = Array(20)
    .fill("")
    .map((_, index) => (
      <div
        key={index}
        className="w-64 h-96 mt-20 mx-10  border-2 shadow-lg   overflow-hidden shimmer  inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-no-repeat bg-scroll animate-shimmer"
      >
        <div className=""></div>
      </div>
    ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
