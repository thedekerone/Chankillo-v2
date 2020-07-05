import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import withGA from "next-ga";
import "nprogress/nprogress.css"; //styles of nprogress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default withGA("UA-171582522-1", Router)(MyApp);
