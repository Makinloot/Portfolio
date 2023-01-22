const Contact = () => {
  return (
    <div className="Contact flex-row" id="contact">
      <div className="container-small">
        <h2 className="Contact-title">Contact me</h2>
        <div className="Contact-wrapper">
          <p className="Contact-text">
            I'm interested in freelance & fulltime job opportunities. However,
            if you have other request or question, don't hesitate to use the
            form.
          </p>
          <form 
            className="Contact-form" 
            action="#" 
            autoComplete="off"
          >
            <div className="input-wrapper name-wrapper">
              <input type="text" id="name" placeholder="Name" />
              <div className="input-border"></div>
            </div>
            <div className="input-wrapper email-wrapper">
              <input type="email" id="email" placeholder="Email" />
              <div className="input-border"></div>
            </div>
            <div className="input-wrapper subject-wrapper">
              <input type="text" id="subject" placeholder="Subject" />
              <div className="input-border"></div>
            </div>
            <div className="input-wrapper textarea-wrapper">
              <textarea id="textarea" cols={30} rows={10} placeholder="Message"></textarea>
              <div className="input-border"></div>
            </div>
            <input type="submit" value="Submit form!" id="submit-form" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
