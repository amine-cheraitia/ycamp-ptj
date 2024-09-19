// Strat Import Model and View
// Mettre toutes les variables ou les fonctions dans le crochet, separé par des virgules
import {test, text} from "../controllers/ContactController.jsx";


// Import CSS
import "../styles/ContactPage.scss";

// Import Componants
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PhotoGallery from "../components/PhotoGallery";


import {contact} from "../models/ContactModel.jsx";
// exemple recuperation model
const contactFromModel = contact;
console.log("Test ContactModel", contactFromModel) 
// End Import Model and View




// exemple recuperation model
const texttext = text;
const hello = test();
console.log(texttext, hello) 


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
