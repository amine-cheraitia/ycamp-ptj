import "../styles/ContactPage.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PhotoGallery from "../components/PhotoGallery";

function ContactPage(props) {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="container">
          <div className="form">
            <h1>Contactez-nous !</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="image">
            {/* <PhotoGallery /> */}

            <img
              src="/Img/Parc-De-Paris9.jpg"
              alt="Person running"
              style={{ width: "400px", height: "400px", objectFit: "cover", margin: "5px", borderRadius: "8px" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
