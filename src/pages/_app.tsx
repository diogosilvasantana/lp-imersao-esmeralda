import { useRouter } from "next/router";
import ContainerPage from "../_container";
import { globalStyles } from "../styles/global";

globalStyles();

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const noContainerRoutes = ["/success"];
  const shouldRenderContainer = !noContainerRoutes.includes(router.pathname);

  return (
    <>
      {shouldRenderContainer && <ContainerPage />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
