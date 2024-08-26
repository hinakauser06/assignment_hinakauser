import "@/styles/globals.css";
import '../fontawesome.js'; // Import the FontAwesome configuration

export default function App({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    </>
  ) ;
}

