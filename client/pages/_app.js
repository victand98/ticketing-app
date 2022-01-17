import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/buildClient";
import { Header } from "../src/components";

const App = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />;
    </div>
  );
};

App.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps = {};
  if (appContext.Component.getInitialProps)
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);

  console.log(`pageProps`, pageProps);

  return {
    pageProps,
    ...data,
  };
};

export default App;
