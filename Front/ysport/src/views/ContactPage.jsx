import "../styles/ContactPage.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ContactPage(props) {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container">
          <p>ContactPage</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
