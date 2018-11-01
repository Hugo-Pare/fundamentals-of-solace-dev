/**
 * This function POSTs to a dummy authentication service fronted by PubSub+.
 * The result of the POST is translated to a boolean and provided back to the caller
 * via the callback function.
 *
 * @param {string} sUsername - Username to use for autentication
 * @param {string} sPassword - Password associated with the username
 *
 * @param {oResultCallback} oResultCallback - callback function to execute on success or failure events.
 */
function authenticate(sUsername, sPassword, oResultCallback) {
    'use strict';

    var serverUrl = 'http://localhost:8082/solace/cloud/proxy',
        jsonBody = {
            username: sUsername,
            password: sPassword
        };

    fetch(serverUrl, {
        method: "POST",
        body: JSON.stringify(jsonBody),
        mode: "cors",
        cache: "no-cache"
    })
        .then(function (response) {
            console.debug(response);
            if (response.ok) {
                oResultCallback(true);
            } else {
                oResultCallback(false);
            }
        });
}