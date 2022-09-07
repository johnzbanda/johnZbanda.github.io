export const HtmlPage = function () {
  return (
    // <!DOCTYPE HTML>
    // <html lang="en" className ="browser">
    <section className="main">
      <header id="home" style={{ height: "665px" }}>
        <div className="ripple-background">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
        </div>

        <nav>
          <div>
            <ul className="navigation">
              <a href="#home">Home</a>
              <a href="#profile">Profile</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contacts">Contact Me</a>
            </ul>
          </div>
        </nav>

        <div className="name">
          <h1>
            <div>ZIZI BANDA</div>
          </h1>
          <h3>
            <div>QA ENGINEER</div>
          </h3>
        </div>

        <div className="social">
          <div>
            <div className="row">
              <div className="column">
                <a href="https://www.linkedin.com/in/zizibanda/">
                  <img
                    src="/Images/LinkedIn.png"
                    width="45"
                    height="auto"
                    alt="LinkedIn Icon"
                    className="center"
                  />
                </a>
              </div>
              <div className="column">
                <a href="https://github.com/johnZbanda">
                  <img
                    src="/Images/GithubIcon.png"
                    width="45"
                    height="auto"
                    alt="GitHub Icon"
                    className="center"
                  />
                </a>
              </div>
              <div className="column">
                <a href="mailto:johnzkbanda@gmail.com">
                  <img
                    src="/Images/EmailIcon.png"
                    width="50"
                    height="auto"
                    alt="Email Icon"
                  />
                </a>
              </div>
              <div className="column">
                <a href="Zizi Banda CV.pdf">
                  <img
                    src="/Images/FileIcon.png"
                    width="50"
                    height="auto"
                    alt="File Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!--try put on the same line as the text-->
              <!--contact details at the bottom possibly--> */}
      </header>

      <section className="profile" id="profile">
        <h1>PROFILE</h1>
        {/* <!--make this in a block--> */}
        <img
          alt="avatar"
          src="/Images/JohnPicture.png"
          width="auto"
          height="400"
          className="JohnPicture"
          style={{ float: "right", marginRight: "5%", position: "relative" }}
        />
        <p
          style={{ marginRight: "30%", marginBottom: "15%", marginTop: "10%" }}
        >
          In 2020, I graduated from the University of Liverpool with a 2:1 in
          Computer Science with Software Development. My aspiration is to grow
          into a career as a software developer, and to continue to evolve my
          skills as a programmer. I am determined to solve problems and
          challenges in an innovative manner, with software, game and web
          development as my key interests.
        </p>

        <div></div>
        {/* <!--<img src="/JohnPicture.png" width="auto" height="auto" className="JohnPicture">--> */}
      </section>

      <section className="skills" id="skills">
        <h1>
          <div>SKILLS</div>
        </h1>

        <div className="row">
          <div className="columnSkills">
            <img
              src="/Images/HTMLIcon.png"
              width="83.75"
              height="auto"
              alt="HTML Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/CSSIcon.png"
              width="80"
              height="auto"
              alt="CSS Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/JSIcon.png"
              width="110"
              height="auto"
              alt="JS Icon"
            />
          </div>
        </div>
        <hr style={{ width: "70%" }}></hr>
        <div className="row">
          <div className="columnSkills">
            <img
              src="/Images/JavaIcon.png"
              width="125"
              height="auto"
              alt="Java Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/CIcon.png"
              width="125"
              height="auto"
              alt="C Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/PythonIcon.png"
              width="125"
              height="auto"
              alt="Python Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/HaskellIcon.png"
              width="125"
              height="auto"
              alt="Haskell Icon"
            />
          </div>
        </div>
        <hr style={{ width: "70%" }}></hr>
        <div className="row">
          <div className="columnSkills">
            <img
              src="/Images/MySQLIcon.png"
              width="auto"
              height="110"
              alt="MySQL Icon"
            />
          </div>

          <div className="columnSkills">
            <img
              src="/Images/GitIcon.png"
              width="auto"
              height="100"
              alt="Git Icon"
            />
          </div>
        </div>
        <hr style={{ width: "70%" }}></hr>
      </section>

      <section className="projects" id="projects">
        <h1>
          <div>PROJECTS</div>
        </h1>
        <div className="carousel">
          <div className="myCarousel fade">
            <img
              src="/Images/board.jpeg"
              width="40%"
              height="auto"
              alt="board"
            />
            <h1>Minesweeper</h1>
            <p>
              Developed and Implemented a game of Minesweeper for three
              different levels (Beginner, Intermediate and Advanced). This was
              the first large project I managed and developed on my own meaning
              that a lot of my skills were tested throughout the development of
              this project.
            </p>
            <p style={{ fontStyle: "italic" }}>
              Languages and Softwares used: Java, SQL, MySQL database server
            </p>
            <a href="https://github.com/johnZbanda/Minesweeper/">Source Code</a>
          </div>

          <div className="myCarousel fade">
            <img
              src="/Images/Yum.png"
              width="30%"
              height="auto"
              alt="Yum icon"
            />
            <h1>Yum!</h1>
            <p>
              Co-Developed a Student based Mobile Recipe App that will allow
              users to input different ingredients into their inventory and then
              search for recipes from a database given the ingredients they
              have. I was in charge of the database management and did the
              majority of the queries using SQL and a MySQL database server.
            </p>
            <p style={{ fontStyle: "italic" }}>
              Languages and Softwares used: NodeJS, SQL, MySQL database server,
              Express
            </p>
            <a href="https://github.com/johnZbanda/group-project">
              Source Code
            </a>
          </div>

          <div className="myCarousel fade">
            <img
              src="/Images/DiscordIcon.png"
              width="15%"
              height="auto"
              alt="Discord Icon"
            />
            <h1>Discord Bot</h1>
            <p>
              Developed a bot using Discord's API to do random commands such as
              a dice roller and music player. This is a project that I decided
              to do in my spare time and look to add more aspects towards it
              based on feedback and comments from different people. This bot is
              very similar to bots used in communication applications such as
              Slack
            </p>
            <p style={{ fontStyle: "italic" }}>
              Languages and Softwares used: Javascript, Node JS, Discord API
            </p>
            <p style={{ fontStyle: "italic" }}>
              Due to some restrictions with Discord's API, I cannot share the
              source code for this project
            </p>
          </div>

          {/* <!--Add a Carousel here--> */}
          <a className="prev" href="/#prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" href="/#next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>

          {/* <!--Don't forget to add more dots when adding more projects--> */}
          <div style={{ textAlign: "center" }}>
            <span className="dot" onClick={() => currentSlide(0)}></span>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
          </div>
        </div>

        <script
          type="text/javascript"
          src="/scripts/carouselScript.js"
        ></script>
      </section>

      <div id="contacts"></div>
      <section className="contact" id="contacts">
        <h1>
          <div>CONTACT ME</div>
        </h1>
        <p>EMAIL: johnzkbanda@gmail.com</p>
        <p>UK, London</p>

        <div className="social">
          <div className="row">
            <div className="column">
              <a href="https://www.linkedin.com/in/johnzbanda/">
                <img
                  src="/Images/LinkedIn.png"
                  width="45"
                  height="auto"
                  alt="LinkedIn Icon"
                  className="center"
                />
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/johnZbanda">
                <img
                  src="/Images/GithubIcon.png"
                  width="45"
                  height="auto"
                  alt="GitHub Icon"
                  className="center"
                />
              </a>
            </div>
            <div className="column">
              <a href="mailto:johnzkbanda@gmail.com">
                <img
                  src="/Images/EmailIcon.png"
                  width="50"
                  height="auto"
                  alt="Email Icon"
                />
              </a>
            </div>
            <div className="column">
              <a href="John Zizikani Banda CV.pdf">
                <img
                  src="/Images/FileIcon.png"
                  width="50"
                  height="auto"
                  alt="File Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Write a description about yourself here--> */}
    </section>
    // </html>
  );
};

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n: number) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n: number) {
  showSlides((slideIndex = n));
}

function showSlides(n: number) {
  let i;
  let slides = document.getElementsByClassName("myCarousel");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { //if slides are above max number, go back to first project
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    const slide = slides[i] as HTMLElement;
    slide.style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  const slideDisplay = slides[slideIndex] as HTMLElement; //currently as undefined
  slideDisplay.style.display = "block";
  dots[slideIndex].className += " active"
}
