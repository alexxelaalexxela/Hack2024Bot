"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 7544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./constants.ts
var METHODS;
(function(METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));

;// CONCATENATED MODULE: ./pages/api/chat/message.ts

async function handler(req, res) {
    if (req.method !== METHODS.POST) {
        return res.status(405).json({
            error: "Method Not Allowed"
        });
    }
    const messages = JSON.parse(req.body);
    let response;
    try {
        response = await fetch("http://127.0.0.1:5000/process", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages
            })
        });
    } catch (error) {
        console.error("Error:", error);
        return res.json({
            error: "An error occurred"
        });
    }
    try {
        const data = await response.json();
        console.log(data);
        console.log(data.message);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error:", error);
        return res.json({
            error: "An error occurred"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7544));
module.exports = __webpack_exports__;

})();