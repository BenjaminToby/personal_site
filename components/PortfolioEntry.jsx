/**
 *
 *
 * Imports
 * ------------------------------------------------------------------------------
 *
 */
/** ********************* React/Next Imports */
import React from "react";
import TextShuffler from "./actions/TextShuffler";
/** ~ End React/Next Imports *************** */

/** ********************* Functions and Other Page Imports */
/** ~ End Functions and Other Page Imports *************** */

/**
 *
 *
 * Main Component { Functional }
 * ------------------------------------------------------------------------------
 * @param {Object} props - React component props including { children }
 *
 */
/** ********************* Page Main Component */
export default function PortfolioEntry({ title, description, url, image }) {
    // ## Get Contexts
    // -----------------------

    // ## Javascript Variables
    // -----------------------

    // ## React Hooks { useState, useEffect, useRef, etc ... }
    // -----------------------

    // ## Function Return
    return (
        <div className="portfolio-entry-block">
            <h2 style={ { marginTop: "0" } }><TextShuffler textInput={ title } /></h2>
            <img src={ image } alt="" />
            <span>
                <TextShuffler textInput={ description } />
            </span>
            <div className="hero-ctas-section">
                <a href={ url } target="_blank">Visit Site</a>
            </div>
        </div>
    );
    // -----------------------
};
/** ~ End Page Main Component *************** */

// export default Header;
