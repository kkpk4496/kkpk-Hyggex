import './App.css'

const App = () => (
  <div className="main-container">
    <nav>
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423132/1_fouhjn.png"
        alt="logo"
        className="logo"
      />
      <div className="link-container">
        <a href="/">Home</a>
        <a href="/flashcard">Flashcard</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
        <a href="/login">
          <button type="button" className="login-btn">
            Login
          </button>
        </a>
      </div>
    </nav>
    <div className="arrow-container">
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705424292/Frame_2_zfgj7y.png"
        alt="home"
        className="home"
      />
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705424292/Vector_cz4nm1.png"
        alt="arrow"
      />
      <p>Flashcard</p>
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705424292/Vector_cz4nm1.png"
        alt="arrow"
      />
      <p>Mathematics</p>
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705424292/Vector_cz4nm1.png"
        alt="arrow"
      />
      <p className="highlight">Relation and Function</p>
    </div>
    <h1 className="head">Relation and Functions (Mathematics)</h1>
    <div className="cont">
      <div className="cont2">
        <p className="high-cont">Study</p>
        <p>Quiz</p>
        <p>Test</p>
        <p>Game</p>
        <p>Others</p>
      </div>
      <div className="blue-cont">
        <div className="icons">
          <img
            src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423133/Frame_rsxeqr.png"
            alt="light"
          />
          <img
            src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423132/Frame_1_ooyu4s.png"
            alt="volume"
          />
        </div>
        <h1 className="calc">9 + 6 + 7x - 2x - 3</h1>
      </div>
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423132/Frame_43_rx3zns.png"
        alt="shortcuts"
        className="shortcuts"
      />
    </div>
    <div className="powered-cont">
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423133/Frame_41_iidnps.png"
        alt="powered"
        className="powered"
      />
      <img
        src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705423132/Frame_48_uyjcqa.png"
        alt="create"
        className="powered"
      />
    </div>
    <h1 className="heads">FAQ</h1>
    <div>
      <div className="faqs">
        <p>Can education flashcards be used for all age groups?</p>
        <img
          src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705427009/Vector_1_btfog3.png"
          alt="downarrow"
          className="faq-icon"
        />
      </div>
      <div className="faqs">
        <p>How do education flashcards work?</p>
        <img
          src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705427009/Vector_1_btfog3.png"
          alt="downarrow"
          className="faq-icon"
        />
      </div>
      <div className="faqs">
        <p>Can education flashcards be used for test preparation?</p>
        <img
          src="https://res.cloudinary.com/dzo0il2vd/image/upload/v1705427009/Vector_1_btfog3.png"
          alt="downarrow"
          className="faq-icon"
        />
      </div>
    </div>
  </div>
)

export default App
