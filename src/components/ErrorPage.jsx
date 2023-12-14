import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops... Page not found.</h1>
      <h2>{error.status + ": " + error.statusText}</h2>
      <img
        src="https://c8.alamy.com/comp/2H31R58/404-error-page-not-found-sad-kawaii-bunny-and-duckling-with-error-message-cute-little-duck-and-rabbit-apologize-system-maintenance-updates-uploa-2H31R58.jpg"
        alt="error img"
        width={400}
        height={400}
      />
    </div>
  );
};

export default ErrorPage;
