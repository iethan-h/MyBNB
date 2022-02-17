/* eslint-disable react/jsx-no-target-blank */
import "./footer.css";

function Footer (){
  return (
    <footer >
    <p>Made by Ethan Harwell</p>
    <div id="devLinks">
        <a href="https://www.linkedin.com/in/jackpercival7/" target="_blank" rel="noreferrer">
            <div className="footer-icon">
                <i className="fab fa-linkedin"></i>
            </div>
        </a>
        <a href="https://github.com/iethan-h" target="_blank" rel="noreferrer">
            <div className="footer-icon">
                <i className="fab fa-github"></i>
            </div>
        </a>
    </div>
</footer>
  );
};

export default Footer;