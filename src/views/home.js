import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AeroxWebApp</title>
        <meta property="og:title" content="AeroxWebApp" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <img
              alt="image"
              src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
              className="home-image"
            />
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="home-links-container">
              <a href="#games" className="home-link anchor">
                Games
              </a>
              <a href="#focuses" className="home-link01 anchor">
                <span>Our Focuses</span>
                <br></br>
              </a>
              <a href="#team" className="home-link02 anchor">
                <span>About our Team</span>
                <br></br>
              </a>
              <a
                href="https://paypal.me/TimmyDev"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                <span className="anchor">Donate</span>
                <br></br>
              </a>
            </div>
          </div>
          <div className="home-right-side">
            <a
              href="https://www.youtube.com/watch?v=Hf244LCkkLc"
              target="_blank"
              rel="noreferrer noopener"
              className="home-cta-btn anchor button"
            >
              <span className="home-text006">
                <br></br>
                <span>Mobile Hub Coming soon...</span>
                <br></br>
                <br></br>
              </span>
            </a>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <a href="#resources" className="home-link04 anchor">
                Resources
              </a>
              <a href="#inspiration" className="home-link05 anchor">
                Inspiration
              </a>
              <a href="#process" className="home-link06 anchor">
                Process
              </a>
              <span className="home-link07 anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="home-hero">
        <div className="home-content-container">
          <div className="home-hero-text">
            <h1 className="home-heading section-Heading">
              <span>
                Free Games to Entertain,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Not to steal your money</span>
              <br></br>
            </h1>
            <label className="home-text015 section-Text">
              <span>
                Guaranteed to be free, and always remain free to the public.
              </span>
              <br></br>
            </label>
            <button className="home-cta-btn1 button anchor">
              <span className="home-text018">
                <br></br>
                <span>Start Playing Now</span>
                <br></br>
                <br></br>
              </span>
            </button>
            <span className="home-text023">
              [This will send you to one of our web games, picked randomly every
              2 days]
            </span>
          </div>
        </div>
      </div>
      <h1 id="games" className="home-heading1">
        <span>Our Top Pick Games</span>
        <br></br>
        <br></br>
      </h1>
      <div className="home-features">
        <h1 className="home-text027">
          <span>Perry&apos;s Works</span>
          <br></br>
        </h1>
        <div className="home-cards-container">
          <div className="home-features-card">
            <div className="home-icon-container">
              <img
                alt="image"
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
                className="home-image2"
              />
            </div>
            <div className="home-text-container">
              <a
                href="..\AttackOnTheCarrots\index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <span>Attack on the Carrots</span>
                <br></br>
              </a>
              <span className="home-text032">
                <span>
                  In this simple game you play as Big Chungus and step on the
                  incoming carrots in order to score, but beware, for the
                  carrots will take your life if you touch them...
                </span>
                <br className="home-text034"></br>
              </span>
            </div>
          </div>
          <div className="home-features-card1">
            <div className="home-icon-container1">
              <img
                alt="image"
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
                className="home-image3"
              />
            </div>
            <div className="home-text-container1">
              <a
                href="src\SuperChungus\index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <span>SuperChungus</span>
                <br></br>
              </a>
              <span className="home-text037">
                <span>
                  This is another game where you play as Big Chungus...but as a
                  platformer?
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-features-card2">
            <div className="home-icon-container2">
              <img
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/en/5/5a/Black_question_mark.png"
                className="home-image4"
              />
            </div>
            <div className="home-text-container2">
              <a
                href="https://www.youtube.com/watch?v=Hf244LCkkLc"
                target="_blank"
                rel="noreferrer noopener"
                className="home-heading2 card-Heading"
              >
                <span>In development...</span>
                <br></br>
              </a>
              <span className="home-text042 card-Text">
                <span>
                  This game is still under development, stay tuned and be ready
                  at release!
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <span className="home-text045">
          <span>More Coming Soon!</span>
          <br></br>
        </span>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-services">
        <div className="home-heading-container">
          <h1 id="focuses" className="home-text048 section-Heading">
            <span>Our Core Focuses</span>
            <br></br>
          </h1>
          <span className="home-text051 section-Text">
            <span>The focuses of our team boil down to these 3 points:</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container1">
          <div className="home-service-card">
            <h3 className="home-text054 card-Heading">Entertainment</h3>
            <span className="home-text055 card-Text">
              <span>
                All our games are primarily focused on trying to give its
                players a good time along with some good laughs.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="home-link10 anchor">
              <span>The process of making our games</span>
              <br></br>
            </span>
          </div>
          <div className="home-service-card1">
            <h3 className="home-text061 card-Heading">
              <span>Open Source</span>
              <br></br>
            </h3>
            <span className="home-text064 card-Text">
              <span>
                All our games are open source and can be found on GitHub. Anyone
                can make a fork and contribute to them!
              </span>
              <br></br>
            </span>
            <span className="home-link11 anchor">
              <span>Our GitHub Page</span>
              <br></br>
            </span>
          </div>
          <div className="home-service-card2">
            <h3 className="home-text069">
              <span className="card-Heading">Simplicity</span>
              <br></br>
            </h3>
            <span className="home-text072">
              <span>
                We want our games want to give the players a good time while
                keeping it simple. No extreme hardware required to open the
                menu.
              </span>
              <br></br>
            </span>
            <span className="home-link12 anchor">Learn more</span>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-team">
        <div className="home-heading-container1">
          <h1 id="team" className="home-text075 section-Heading">
            <span>Our Devteam</span>
            <br></br>
          </h1>
          <span className="home-text078">
            <span>Meet the crew (Going by our online names)</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container2">
          <div className="home-team-card">
            <div className="home-avatar-container">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="home-name card-Heading">NotYanne</span>
            <span className="home-position card-Text">
              <span>
                Web and Mobile Designer,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Game Programmer</span>
              <br></br>
            </span>
          </div>
          <div className="home-team-card1">
            <div className="home-avatar-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="home-name1 card-Heading">Wigla</span>
            <span className="home-position1">
              <span>Art and sound designer</span>
              <br></br>
            </span>
          </div>
          <div className="home-team-card2">
            <div className="home-avatar-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="home-name2 card-Heading">YaboiPerry</span>
            <span className="home-position2 card-Text">
              <span>Game programmer ,</span>
              <br></br>
              <span>Storyline suggester</span>
              <br></br>
            </span>
          </div>
          <div className="home-team-card3">
            <div className="home-avatar-container3">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="home-name3 card-Heading">
              <span>
                Connect
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>to the internet</span>
              <br></br>
            </span>
            <span className="home-position3">
              <span> Game ideas and suggestions</span>
              <br></br>
            </span>
          </div>
          <div className="home-team-card4">
            <div className="home-avatar-container4">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <span className="home-name4 card-Heading">Iced</span>
            <span className="home-position4">
              <span>
                Asset creator,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>game programmer</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-hero1">
        <div className="home-feature-card">
          <img
            alt="image"
            src="https://upload.wikimedia.org/wikipedia/en/5/5a/Black_question_mark.png"
            className="home-image5"
          />
          <h2 className="home-text101">
            <span>Experiencing Issues with our Services?</span>
            <br></br>
          </h2>
          <span className="home-text104">
            Don&apos;t be shy to contact us on our Socials!
          </span>
          <div className="home-container2">
            <img
              alt="image"
              src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
              className="home-image6"
            />
            <a
              href="https://discord.gg/2QXPqUCu"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              Our Discord
            </a>
          </div>
          <span className="home-text105">
            <span>Inhouse Games 2022</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
