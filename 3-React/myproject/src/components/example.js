import React from "react";

export default function Component() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark sticky-top"
        style={{
          boxSizing: "border-box",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          flexFlow: "row nowrap",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          position: "sticky",
          top: "0px",
          zIndex: 1020,
          backgroundColor: "rgb(209, 114, 6)",
          marginLeft: "0%",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              fontFamily: "inherit",
              overflow: "visible",
              textTransform: "none",
              appearance: "button",
              padding: "0.25rem 0.75rem",
              border: "1px solid transparent",
              borderRadius: "0.25rem",
              fontSize: "1.25rem",
              lineHeight: 1,
              backgroundColor: "transparent",
              cursor: "pointer",
              display: "none",
              borderColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                boxSizing: "border-box",
                background: "center center / 100% 100% no-repeat",
                display: "inline-block",
                width: "1.5em",
                height: "1.5em",
                verticalAlign: "middle",
                content: '""',
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
              }}
            />
          </button>
          <div
            id="mainMenu"
            className="collapse navbar-collapse"
            style={{
              boxSizing: "border-box",
              flexGrow: 1,
              alignItems: "center",
              flexBasis: "auto",
              display: "flex",
            }}
          >
            <ul
              className="navbar-nav"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                padding: "10px 30px",
                position: "relative",
                listStyle: "none",
                display: "flex",
                paddingLeft: "0px",
                marginBottom: "0px",
                listStyleType: "none",
                flexDirection: "row",
              }}
            >
              <li
                className="nav-item active"
                style={{ boxSizing: "border-box" }}
              >
                <a
                  className="nav-link"
                  href="http://localhost:3002/#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    padding: "0.5rem 1rem",
                    display: "block",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <i
                    className="fa fa-home fa-lg"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontStretch: "normal",
                      fontFamily:
                        'var(--fa-style-family,"Font Awesome 6 Free")',
                      fontWeight: "var(--fa-style,900)",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      display: "var(--fa-display,inline-block)",
                      fontStyle: "normal",
                      textRendering: "auto",
                      fontSize: "1.25em",
                      lineHeight: "0.05em",
                      verticalAlign: "-0.075em",
                    }}
                  />
                  {"Home"}
                </a>
              </li>
              <li className="nav-item" style={{ boxSizing: "border-box" }}>
                <a
                  className="nav-link"
                  href="http://localhost:3002/lost.html"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    padding: "0.5rem 1rem",
                    display: "block",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <i
                    className="fa fa-question-circle fa-lg"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontStretch: "normal",
                      fontFamily:
                        'var(--fa-style-family,"Font Awesome 6 Free")',
                      fontWeight: "var(--fa-style,900)",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      display: "var(--fa-display,inline-block)",
                      fontStyle: "normal",
                      textRendering: "auto",
                      fontSize: "1.25em",
                      lineHeight: "0.05em",
                      verticalAlign: "-0.075em",
                    }}
                  />
                  {"Lost"}
                </a>
              </li>
              <li className="nav-item" style={{ boxSizing: "border-box" }}>
                <a
                  className="nav-link"
                  href="http://localhost:3002/found.html"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    padding: "0.5rem 1rem",
                    display: "block",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <i
                    className="fa fa-exclamation-circle fa-lg"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontStretch: "normal",
                      fontFamily:
                        'var(--fa-style-family,"Font Awesome 6 Free")',
                      fontWeight: "var(--fa-style,900)",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      display: "var(--fa-display,inline-block)",
                      fontStyle: "normal",
                      textRendering: "auto",
                      fontSize: "1.25em",
                      lineHeight: "0.05em",
                      verticalAlign: "-0.075em",
                    }}
                  />
                  {"Found"}
                </a>
              </li>
              <li className="nav-item" style={{ boxSizing: "border-box" }}>
                <a
                  className="nav-link"
                  href="http://localhost:3002/#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    padding: "0.5rem 1rem",
                    display: "block",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <i
                    className="fa fa-address-card fa-lg"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontStretch: "normal",
                      fontFamily:
                        'var(--fa-style-family,"Font Awesome 6 Free")',
                      fontWeight: "var(--fa-style,900)",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      display: "var(--fa-display,inline-block)",
                      fontStyle: "normal",
                      textRendering: "auto",
                      fontSize: "1.25em",
                      lineHeight: "0.05em",
                      verticalAlign: "-0.075em",
                    }}
                  />
                  {"Volunteering Help"}
                </a>
              </li>
              <li className="nav-item" style={{ boxSizing: "border-box" }}>
                <a
                  className="nav-link"
                  href="http://localhost:3002/#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    padding: "0.5rem 1rem",
                    display: "block",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <i
                    className="fa fa-info-circle fa-lg"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontStretch: "normal",
                      fontFamily:
                        'var(--fa-style-family,"Font Awesome 6 Free")',
                      fontWeight: "var(--fa-style,900)",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      display: "var(--fa-display,inline-block)",
                      fontStyle: "normal",
                      textRendering: "auto",
                      fontSize: "1.25em",
                      lineHeight: "0.05em",
                      verticalAlign: "-0.075em",
                    }}
                  />
                  {"Useful information"}
                </a>
              </li>
            </ul>
          </div>
          <div
            className="btn-group"
            style={{
              boxSizing: "border-box",
              position: "relative",
              display: "inline-flex",
              verticalAlign: "middle",
            }}
          >
            <button
              id="loginButton"
              className="btn mx-2 mt-3 col-sm-6 btn-outline-light rounded-pill"
              type="button"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontFamily: "inherit",
                overflow: "visible",
                textTransform: "none",
                appearance: "button",
                width: "100%",
                maxWidth: "50%",
                border: "1px solid transparent",
                padding: "0.375rem 0.75rem",
                transition:
                  "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                display: "inline-block",
                fontWeight: 400,
                textAlign: "center",
                verticalAlign: "middle",
                userSelect: "none",
                backgroundColor: "transparent",
                paddingRight: "0.75rem",
                paddingLeft: "0.75rem",
                fontSize: "1rem",
                lineHeight: 1.5,
                borderColor: "rgb(248, 249, 250)",
                color: "rgb(248, 249, 250)",
                flex: "1 1 auto",
                position: "relative",
                cursor: "pointer",
                borderRadius: "50rem",
                borderTopRightRadius: "50rem",
                borderBottomRightRadius: "50rem",
                marginRight: "0.5rem",
                marginLeft: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Log In
            </button>
            <button
              id="signupButton"
              className="btn mx-2 mt-3 col-sm-6 btn-outline-light rounded-pill"
              type="button"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontFamily: "inherit",
                overflow: "visible",
                textTransform: "none",
                appearance: "button",
                width: "100%",
                maxWidth: "50%",
                border: "1px solid transparent",
                padding: "0.375rem 0.75rem",
                transition:
                  "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                display: "inline-block",
                fontWeight: 400,
                textAlign: "center",
                verticalAlign: "middle",
                userSelect: "none",
                backgroundColor: "transparent",
                paddingRight: "0.75rem",
                paddingLeft: "0.75rem",
                fontSize: "1rem",
                lineHeight: 1.5,
                borderColor: "rgb(248, 249, 250)",
                color: "rgb(248, 249, 250)",
                flex: "1 1 auto",
                position: "relative",
                cursor: "pointer",
                borderRadius: "50rem",
                borderTopLeftRadius: "50rem",
                borderBottomLeftRadius: "50rem",
                marginRight: "0.5rem",
                marginLeft: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  text-align: left;
  background-color: rgb(255, 255, 255);
  font-family: "Open Sans", sans-serif;
  background-image: linear-gradient(to right, rgb(237, 243, 232), rgb(223, 247, 178), rgb(218, 233, 178));
}
`,
        }}
      />
    </>
  );
}
