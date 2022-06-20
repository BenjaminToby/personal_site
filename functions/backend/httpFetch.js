/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
const http = require("http");
const https = require("https");

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */

/**
 * ==============================================================================
 * Main Function
 * ==============================================================================
 * @param {Object} mailObject - foundUser if any
 */
/** ********************* Main API Handler */
module.exports = async function httpFetch({ protocol, options, paradigm }) {
    if (!protocol) protocol = "http";

    /**
     * Http(s) Response function
     *
     * @description handle http and https protocols differently
     * @param {object} response => response object
     * @param {Function} resolve => promise resolve method
     * @param {Function} reject => promise reject method
     */
    function httpResponse(response, resolve, reject) {
        var str = "";

        /** * Append data chunks to "str" variable
         */
        response.on("data", function (chunk) {
            str += chunk;
        });

        /** * the whole response has been received, so we just print it out here
         */
        response.on("end", function () {
            resolve(JSON.parse(str));
        });

        /** * Handle errors
         */
        response.on("error", (err) => {
            console.log(err);
            reject("Fetch Failed");
        });
    }

    /**
     * Switch protocols
     *
     * @description handle http and https protocols differently
     */
    switch (protocol) {
        case "http":
            /**
             * Handle http protocol
             *
             * @description handles fetch requests with http protocol
             * @see => handles strapi api calls only for now
             */
            return await new Promise((resolve, reject) => {
                http.request(
                    /** * Make Request
                     * @abstract Make Request
                     */
                    {
                        ...options,
                        host: "localhost",
                        port: "1337",
                        // path: "/api/blog-posts",
                        // href: "http://localhost:1337/api/blog-posts",
                        headers: {
                            Authorization: `bearer ${process.env.STRAPI_API_KEY_DEV}`,
                        },
                    },
                    /** * Handle Response
                     * @abstract Handle response
                     */
                    (response) => {
                        httpResponse(response, resolve, reject);
                    }
                ).end();
            });
            break;
        
            case "https":
            /**
             * Handle http protocol
             *
             * @description handles fetch requests with http protocol
             * @see => handles strapi api calls only for now
             */
            return await new Promise((resolve, reject) => { 
                https.request(
                    /** * Make Request
                     * @abstract Make Request
                     */
                    {
                        ...options,
                        host: "cms.showmerebates.com",
                        headers: {
                            Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
                        },
                    },
                    /** * Handle Response
                     * @abstract Handle response
                     */
                    (response) => {
                        httpResponse(response, resolve, reject);
                    }
                ).end();
            });
            break;

        default:
            break;
    }
};

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */
