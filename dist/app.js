/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: User } = __webpack_require__(/*! ./models/User */ \"./src/models/User.js\");\r\n\r\nfunction run() {\r\n\r\nloadDataInTheDom()\r\nremoveFromDocument()\r\nloadStatus()\r\n\r\n}\r\nrun()\r\n\r\n\r\nfunction loadDataInTheDom(){\r\n    const users=User.getData()\r\n    let tbody=document.querySelector('tbody')\r\n    users.forEach((user,index)=>{\r\n\r\n       tbody.innerHTML+=`\r\n       <tr>\r\n       <th>${user.id}</th>\r\n       <td>${User.getFormatedDate(user.createdDate)}</td>\r\n       <td><span id=\"badge\" class=\"badge\" style=\"background-color:${User.checkStatus(user.status)}\">${user.status}</span></td>\r\n       <td>${user.userName}</td>\r\n       <td>${user.firstName}</td>\r\n       <td>${user.lastName}</td>\r\n       <td>${user.registrationNumber}</td>\r\n       <td>\r\n       <i  class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n       <input type=\"hidden\" value=\"${index}\">\r\n       </td>\r\n     </tr>\r\n       `\r\n    })\r\n\r\n}\r\n\r\nfunction removeFromDocument(){\r\n    document.querySelector('tbody').addEventListener('click',function(e){\r\n           if(e.target.className==\"fa fa-trash\")\r\n           {\r\n              e.target.parentElement.parentElement.remove()\r\n              let index =e.target.nextElementSibling.value\r\n              User.removeFromArray(index)\r\n           }\r\n    })\r\n}\r\n\r\nfunction loadStatus() {\r\n    const statusList=[\"Rejeté\",\"Validé\",\"En validation\"]\r\n    statusList.forEach(status=>{\r\n        document.getElementById('status').innerHTML+=`\r\n           <option value=\"${status}\">${status}</option>\r\n        `\r\n    })\r\n}\r\n\r\ndocument.getElementById('btnAdd').addEventListener('click',function(){\r\n    addNewUser()\r\n    document.querySelector('tbody').innerHTML=\"\"\r\n    loadDataInTheDom()\r\n\r\n    document.getElementById('parentDiv').style.display='none'\r\n})\r\n\r\ndocument.getElementById('btnModal').addEventListener('click',function(){\r\n    document.getElementById('parentDiv').style.display='block'\r\n})\r\n\r\nfunction addNewUser() {\r\n    let firstName=document.getElementById('firstName').value\r\n    let lastName=document.getElementById('lastName').value\r\n    let userName=document.getElementById('userName').value\r\n    let createdDate=document.getElementById('createdDate').value\r\n    let status=document.getElementById('status').value\r\n    let registrationNumber=document.getElementById('registrationNumber').value \r\n    new User(firstName,lastName,userName,createdDate,status,registrationNumber)\r\n    \r\n    let inputs=document.querySelectorAll(\"input\")\r\n    for (let index = 0; index < inputs.length; index++) {\r\n        inputs[index].value=\"\" \r\n    }\r\n}\n\n//# sourceURL=webpack://nextgrowth-exercice/./src/index.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nlet users = [\r\n    {\r\n        id: \"123456789\",\r\n        createdDate: \"2021-01-06T00:00:00.000Z\",\r\n        status: \"En validation\",\r\n        firstName: \"Mohamed\",\r\n        lastName: \"Taha\",\r\n        userName: \"mtaha\",\r\n        registrationNumber: \"2584\",\r\n    },\r\n    {\r\n        id: \"987654321\",\r\n        createdDate: \"2021-07-25T00:00:00.000Z\",\r\n        status: \"Validé\",\r\n        firstName: \"Hamid\",\r\n        lastName: \"Orrich\",\r\n        userName: \"horrich\",\r\n        registrationNumber: \"1594\",\r\n    },\r\n    {\r\n        id: \"852963741\",\r\n        createdDate: \"2021-09-15T00:00:00.000Z\",\r\n        status: \"Rejeté\",\r\n        firstName: \"Rachid\",\r\n        lastName: \"Mahidi\",\r\n        userName: \"rmahidi\",\r\n        registrationNumber: \"3576\",\r\n    }\r\n]\r\n\r\n\r\nclass User {\r\n\r\n\r\n    constructor(firstName, lastName, userName,createdDate,status, registrationNumber) {\r\n        users.push({\r\n            id: users.length + 1,\r\n            createdDate,\r\n            status,\r\n            firstName,\r\n            lastName,\r\n            userName,\r\n            registrationNumber\r\n        })\r\n        console.log(users);\r\n    }\r\n\r\n    static getData() {\r\n        return users\r\n    }\r\n    static checkStatus(status) {\r\n        switch (status) {\r\n\r\n            case \"Validé\":return \"#5BE881;\"\r\n    \r\n            case \"En validation\":return \"#FDB64D;\"\r\n\r\n            case \"Rejeté\":return \"#FF0000;\"\r\n\r\n\r\n            default:\"\"\r\n                break;\r\n        }\r\n    }\r\n\r\n    static getFormatedDate(date){\r\n\r\n        return  new Date(date).toLocaleDateString('en-us', { year:\"numeric\", month:\"numeric\", day:\"numeric\"}) \r\n      \r\n    }\r\n    static removeFromArray(index){\r\n      users.splice(index,1)\r\n      console.log(users);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://nextgrowth-exercice/./src/models/User.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;