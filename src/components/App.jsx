import React from 'react';
import './App.css'; // Make sure to import your styles here.

const App = () => {
  return (
    <div className="transition-none">
      {/* Search Section */}
      <div className="search-section">
        <div className="wrap">
          <div className="wrap_float">
            <div className="search-form">
              <input type="text" className="search-input" placeholder="Search…" />
              <button className="search-submit"></button>
            </div>
            <div className="search-close" id="search-close"></div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container page">
        <div className="container-wrap">
          {/* Mobile Panel */}
          <div className="mobile-panel">
            <div className="wrap">
              <div className="wrap_float">
                <div className="mobile-btn" id="js-menu-open">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a className="logo" href="/">
                  I<div>ns</div>olify
                </a>
                <div className="search-button"></div>
              </div>
            </div>
          </div>

          {/* Dummy Container (if needed for layout) */}
          <div className="container-wrap--dummy"></div>

          {/* Top Panel */}
          <div className="top-panel top-panel-wide" id="js-panel">
            <div className="wrap wrap-wide">
              <div className="wrap_float">
                {/* Mode Check */}
                <div className="mode-check">
                  <input type="checkbox" id="mode-checkbox" className="mode-checkbox-input" />
                  <label
                    htmlFor="mode-checkbox"
                    className="mode-checkbox-label"
                    data-dark-title="Night"
                    data-light-title="Daylight"
                  ></label>
                </div>

                <div className="wrap">
                  {/* Logo */}
                  <a href="/" className="logo">
                    I<div>ns</div>olify
                  </a>

                  <div className="wrap-center">
                    {/* Currency Selector */}
                    <div className="currency-wrap">
                      <label htmlFor="currency-select" className="currency-label">
                        Language
                      </label>
                      <select className="currency-select" id="currency-select">
                        <option value="USD">EN</option>
                        <option value="RUB">AR</option>
                        <option value="EUR">FR</option>
                      </select>
                    </div>

                    {/* Menu */}
                    <div className="menu" id="js-menu">
                      <ul>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="https://settle.africa">Settle</a>
                        </li>
                        <li>
                          <a href="https://safi.insolify.com">Safi</a>
                        </li>
                        <li>
                          <a href="https://blog.insolify.com">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Search Button */}
                <div className="search-button" id="btn-search"></div>
              </div>

              {/* Social Links */}
              <div className="socials">
                <a href="https://twitter.com/insolify" className="soc-link">
                  <img
                    loading="lazy"
                    src="/bilu/img/twitter-soc-icon.svg"
                    className="img-svg"
                    alt="Twitter"
                  />
                </a>
                <a href="https://facebook.com/insolify" className="soc-link">
                  <img
                    loading="lazy"
                    src="/bilu/img/facebook-icon.svg"
                    className="img-svg"
                    alt="Facebook"
                  />
                </a>
                <a href="https://instagram.com/insolify" className="soc-link">
                  <img
                    loading="lazy"
                    src="/bilu/img/instagram-icon.svg"
                    className="img-svg"
                    alt="Instagram"
                  />
                </a>
              </div>

              {/* Menu Close */}
              <div className="menu-close" id="js-menu-close"></div>
            </div>
          </div>

          {/* Table Content */}
          <table className="gam">
            <tr>
              <td>
                <div id="chart" className="chart-container"></div>
              </td>
              <td>
                <h2 className="animate__animated animate__backInDown">Powering Businesses.</h2>
                Powerful software to power your business.<br />
                <br />
                Collection of software designed to work individually, together, and with third-party services.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
