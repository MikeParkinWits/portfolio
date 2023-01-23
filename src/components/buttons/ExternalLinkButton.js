import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/buttons/externalLinkButton.css";

import GitHubIcon from "@mui/icons-material/GitHub";

export default class ExternalLinkbutton extends Component {
  static defaultProps = {
    buttonText: "Button",
    buttonPath: "/",
    buttonIcon: <GitHubIcon />,
    downloadName: "Download",
  };

  render() {
    const { buttonText, buttonPath, buttonIcon, downloadName } = this.props;

    return (
      <>
        <a
          className="external-link-button"
          href={buttonPath}
          target="_blank"
          download={downloadName}
        >
          {buttonIcon}
          <p> {buttonText}</p>
        </a>
      </>
    );
  }
}
