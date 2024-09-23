import "../styles/custom.global.scss"; // Your global styles
import Layout from "../components/Layout"; // Import the Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
