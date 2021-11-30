import "./footer.css";

function Footer (){
  return (
    <div className="footerDiv">
      <div className="socialMedia">
        <p className="social">Created by: Ethan Harwell</p>
        <a className="icons" target="_blank" href="https://github.com/iethan-h">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="githubLogo"
          />
        </a>
        <a className="icons" target="_blank" href="https://www.linkedin.com/in/ethan-harwell-895587193/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedInLogo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;