"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/secondPageProjet",{

/***/ "./src/pages/secondPageProjet.jsx":
/*!****************************************!*\
  !*** ./src/pages/secondPageProjet.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecondPageProjet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar/Navbar */ \"./src/pages/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer */ \"./src/pages/components/Footer.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n\nvar _s = $RefreshSig$();\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\n\nconst imgg1 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../public/assets/IMG_blog1.jpg */ \"./public/assets/IMG_blog1.jpg\"));\nfunction SecondPageProjet(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [projet, setprojet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const Gallery = (param)=>{\n        let { imagePaths  } = param;\n        if (!Array.isArray(imagePaths)) {\n            imagePaths = [\n                imagePaths\n            ];\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gallery\",\n            children: imagePaths.map((path)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://localhost:5050/imagesProjet/\".concat(path),\n                    alt: path\n                }, path, false, {\n                    fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/projet/\").concat(data.id)).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setprojet(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _projet_images;\n        console.log(\"hedha projet\", projet);\n        console.log(\"hetha taille imta3 tableau images\", projet === null || projet === void 0 ? void 0 : (_projet_images = projet.images) === null || _projet_images === void 0 ? void 0 : _projet_images.length);\n    }, [\n        projet\n    ]);\n    const MyVideoComponent = ()=>{\n        const videoId = \"q9nAytDl0JA&list=RDq9nAytDl0JA&start_radio=1\"; // Replace with your YouTube video ID\n        const videoOptions = {\n            height: \"360\",\n            width: \"640\",\n            playerVars: {\n                autoplay: 1\n            }\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Projet Referent\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\chadi\\\\Documents\\\\final-ecosol\\\\ecoSolution-final\\\\src\\\\pages\\\\secondPageProjet.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(SecondPageProjet, \"SrcU0qEEfZN6wBgcDpRugI49ATk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SecondPageProjet;\nSecondPageProjet.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const data = query;\n    return {\n        data\n    };\n}; /**import Head from \"next/head\";\r\nimport Image from 'next/image';\r\n// import styles from '../styles/Home.module.css'\r\nconst breakPoints = [{ width: 1, itemsToShow: 1 }];\r\n\r\nimport styles from \"../styles/secondPage.module.scss\";\r\nimport { useEffect, useState } from \"react\";\r\nimport { useRouter } from \"next/router\";\r\nimport Navbar from \"./components/Navbar/Navbar\";\r\nimport Footer from \"./components/Footer\";\r\nimport { Carousel } from \"react-responsive-carousel\";\r\n\r\nimport Partenariat from \"./components/partenariat/partenariat\";\r\nimport ImageArticle from \"./components/imageArticle/imageArticle\";\r\nconst imgg1 = new URL(\"../../public/assets/IMG_blog1.jpg\", import.meta.url);\r\nexport default function SecondPageArticle({data}) {\r\n    const router = useRouter();\r\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = 'http://localhost:5050'\r\n    const [article, setArticle] = useState([]);\r\n\r\n    useEffect(() => {\r\n        fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/article/${data.id}`)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                console.log('hedhi idata', data);\r\n                setArticle(data);\r\n            }).catch(error => console.log(error));\r\n\r\n    }, []);\r\nuseEffect(()=>{\r\n        console.log('hedha article', article)\r\n        console.log('hetha taille imta3 tableau images', article?.images?.length)\r\n    },[article]);\r\n    const [currentImageIndex, setCurrentImageIndex] = useState(0);\r\n\r\n    const handleClickPrevious = () => {\r\n      setCurrentImageIndex((currentImageIndex - 1 + article.images.length) % images.length);\r\n    };\r\n  \r\n    const handleClickNext = () => {\r\n      setCurrentImageIndex((currentImageIndex + 1) % article.images.length);\r\n    };\r\n    return (\r\n        <div>\r\n            <Head>\r\n                <title>Create Next App</title>\r\n                <meta name=\"description\" content=\"Generated by create next app\" />\r\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n                <link rel=\"icon\" href=\"/favicon.ico\" />\r\n            </Head>\r\n            <Navbar />\r\n\r\n            <div className={styles.flex_container_page}>\r\n                \r\n                 <h2 className={styles.titre}>{article.titre}</h2>\r\n        <div className={styles.article}>{article.contenu}</div>\r\n        \r\n        <img  className={styles.image1} src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesArticle/${Array.isArray(article?.images)? article.images[0]:article.images}`} /> \r\n            \r\n        <div className={styles.flex_container_page}>\r\n    \r\n    <h2 className={styles.titre}>\r\n    {article.titre}\r\n    </h2>\r\n\r\n    <div className=\"row justify-content-center\">\r\n       \r\n        \r\n        <div className=\" col-sm-12 col-md-6\">\r\n        <p className={styles.article}>\r\n        {article.contenu}\r\n          </p>      \r\n        </div>\r\n    </div>\r\n                <button\r\n                    className={styles.btnR}\r\n                    onClick={() => {\r\n                        router.back();\r\n                    }}>\r\n                    {\" \"}\r\n                    Retour\r\n                </button>\r\n            </div>\r\n            <Footer />\r\n        </div>\r\n        </div>\r\n    );\r\n}\r\nSecondPageArticle.getInitialProps = async ({ query }) => {\r\n    const data = query;\r\n\r\n    return { data };\r\n};\r\n\r\n\r\n\r\n */ \nvar _c;\n$RefreshReg$(_c, \"SecondPageProjet\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Vjb25kUGFnZVByb2pldC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUM3QixpREFBaUQ7QUFDVztBQUNoQjtBQUNKO0FBQ3VCO0FBQ2Y7QUFDUDtBQUNZO0FBQ0M7QUFFdEQsTUFBTVUsUUFBUSwySUFBNkQ7QUFDNUQsU0FBU0csaUJBQWlCLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUN2QyxNQUFNQyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTVkseUNBQXlDO0lBQy9DLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU1nQixVQUFVLFNBQW9CO1lBQW5CLEVBQUVDLFdBQVUsRUFBRTtRQUM3QixJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0YsYUFBYTtZQUM5QkEsYUFBYTtnQkFBQ0E7YUFBVztRQUMzQixDQUFDO1FBQ0QscUJBQ0UsOERBQUNHO1lBQUlDLFdBQVU7c0JBQ1pKLFdBQVdLLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZiw4REFBQ0M7b0JBRUNDLEtBQUssc0NBQTJDLE9BQUxGO29CQUMzQ0csS0FBS0g7bUJBRkFBOzs7Ozs7Ozs7O0lBT2Y7SUFFQXhCLGdEQUFTQSxDQUFDLElBQU07UUFDZDRCLE1BQU0sR0FBb0RoQixPQUFqREUsd0NBQXVDLFlBQWtCLE9BQVJGLEtBQUtpQixFQUFFLEdBQzlEQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNsQixPQUFTO1lBQ2RxQixRQUFRQyxHQUFHLENBQUMsZUFBZXRCO1lBQzNCSSxVQUFVSjtRQUNaLEdBQ0N1QixLQUFLLENBQUMsQ0FBQ0MsUUFBVUgsUUFBUUMsR0FBRyxDQUFDRTtJQUNsQyxHQUFHLEVBQUU7SUFDTHBDLGdEQUFTQSxDQUFDLElBQU07WUFFbUNlO1FBRGpEa0IsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQm5CO1FBQzVCa0IsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ25CLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLE9BQVFzQixNQUFNLGNBQWR0Qiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0J1QixNQUFGO0lBQ2pFLEdBQUc7UUFBQ3ZCO0tBQU87SUFDWCxNQUFNd0IsbUJBQW1CLElBQU07UUFDN0IsTUFBTUMsVUFBVSxnREFBZ0QscUNBQXFDO1FBQ3JHLE1BQU1DLGVBQWU7WUFDbkJDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxZQUFZO2dCQUNWQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN4Qjs7MEJBQ0MsOERBQUN2QixrREFBSUE7O2tDQUNILDhEQUFDZ0Q7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ2pELGlFQUFNQTs7Ozs7MEJBR1AsOERBQUNDLDBEQUFNQTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBM0R1Qk87O1FBQ1BULGtEQUFTQTs7O0tBREZTO0FBNER4QkEsaUJBQWlCMEMsZUFBZSxHQUFHLGVBQXFCO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQ2pELE1BQU0xQyxPQUFPMEM7SUFFYixPQUFPO1FBQUUxQztJQUFLO0FBQ2hCLEdBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdHQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2Vjb25kUGFnZVByb2pldC5qc3g/ODI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NlY29uZFBhZ2VQcm9qZXQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBZb3VUdWJlLCB7IFlvdVR1YmVQcm9wcyB9IGZyb20gXCJyZWFjdC15b3V0dWJlXCI7XHJcblxyXG5jb25zdCBpbWdnMSA9IG5ldyBVUkwoXCIuLi8uLi9wdWJsaWMvYXNzZXRzL0lNR19ibG9nMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vjb25kUGFnZVByb2pldCh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFBST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIjtcclxuICBjb25zdCBbcHJvamV0LCBzZXRwcm9qZXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IEdhbGxlcnkgPSAoeyBpbWFnZVBhdGhzIH0pID0+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShpbWFnZVBhdGhzKSkge1xyXG4gICAgICBpbWFnZVBhdGhzID0gW2ltYWdlUGF0aHNdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XHJcbiAgICAgICAge2ltYWdlUGF0aHMubWFwKChwYXRoKSA9PiAoXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGtleT17cGF0aH1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo1MDUwL2ltYWdlc1Byb2pldC8ke3BhdGh9YH1cclxuICAgICAgICAgICAgYWx0PXtwYXRofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChgJHtQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTH0vcHJvamV0LyR7ZGF0YS5pZH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlZGhpIGlkYXRhXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldHByb2pldChkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVkaGEgcHJvamV0XCIsIHByb2pldCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhldGhhIHRhaWxsZSBpbXRhMyB0YWJsZWF1IGltYWdlc1wiLCBwcm9qZXQ/LmltYWdlcz8ubGVuZ3RoKTtcclxuICB9LCBbcHJvamV0XSk7XHJcbiAgY29uc3QgTXlWaWRlb0NvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpZGVvSWQgPSBcInE5bkF5dERsMEpBJmxpc3Q9UkRxOW5BeXREbDBKQSZzdGFydF9yYWRpbz0xXCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIFlvdVR1YmUgdmlkZW8gSURcclxuICAgIGNvbnN0IHZpZGVvT3B0aW9ucyA9IHtcclxuICAgICAgaGVpZ2h0OiBcIjM2MFwiLFxyXG4gICAgICB3aWR0aDogXCI2NDBcIixcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGF1dG9wbGF5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlByb2pldCBSZWZlcmVudDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgIFxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblNlY29uZFBhZ2VQcm9qZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBxdWVyeTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG4vKippbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5jb25zdCBicmVha1BvaW50cyA9IFt7IHdpZHRoOiAxLCBpdGVtc1RvU2hvdzogMSB9XTtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zZWNvbmRQYWdlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5cclxuaW1wb3J0IFBhcnRlbmFyaWF0IGZyb20gXCIuL2NvbXBvbmVudHMvcGFydGVuYXJpYXQvcGFydGVuYXJpYXRcIjtcclxuaW1wb3J0IEltYWdlQXJ0aWNsZSBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlQXJ0aWNsZS9pbWFnZUFydGljbGVcIjtcclxuY29uc3QgaW1nZzEgPSBuZXcgVVJMKFwiLi4vLi4vcHVibGljL2Fzc2V0cy9JTUdfYmxvZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY29uZFBhZ2VBcnRpY2xlKHtkYXRhfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwNTAnXHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTH0vYXJ0aWNsZS8ke2RhdGEuaWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWRoaSBpZGF0YScsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWRoYSBhcnRpY2xlJywgYXJ0aWNsZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnaGV0aGEgdGFpbGxlIGltdGEzIHRhYmxlYXUgaW1hZ2VzJywgYXJ0aWNsZT8uaW1hZ2VzPy5sZW5ndGgpXHJcbiAgICB9LFthcnRpY2xlXSk7XHJcbiAgICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KChjdXJyZW50SW1hZ2VJbmRleCAtIDEgKyBhcnRpY2xlLmltYWdlcy5sZW5ndGgpICUgaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tOZXh0ID0gKCkgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCgoY3VycmVudEltYWdlSW5kZXggKyAxKSAlIGFydGljbGUuaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfY29udGFpbmVyX3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdHJlfT57YXJ0aWNsZS50aXRyZX08L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+e2FydGljbGUuY29udGVudX08L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aW1nICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZTF9IHNyYz17YCR7UFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkx9L2ltYWdlc0FydGljbGUvJHtBcnJheS5pc0FycmF5KGFydGljbGU/LmltYWdlcyk/IGFydGljbGUuaW1hZ2VzWzBdOmFydGljbGUuaW1hZ2VzfWB9IC8+IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfY29udGFpbmVyX3BhZ2V9PlxyXG4gICAgXHJcbiAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0cmV9PlxyXG4gICAge2FydGljbGUudGl0cmV9XHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgIHthcnRpY2xlLmNvbnRlbnV9XHJcbiAgICAgICAgICA8L3A+ICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5SfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgUmV0b3VyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuU2Vjb25kUGFnZUFydGljbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcblxyXG5cclxuICovXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJGb290ZXIiLCJDYXJvdXNlbCIsIllvdVR1YmUiLCJZb3VUdWJlUHJvcHMiLCJpbWdnMSIsIlVSTCIsInVybCIsIlNlY29uZFBhZ2VQcm9qZXQiLCJkYXRhIiwicm91dGVyIiwiUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwiLCJwcm9qZXQiLCJzZXRwcm9qZXQiLCJHYWxsZXJ5IiwiaW1hZ2VQYXRocyIsIkFycmF5IiwiaXNBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBhdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJmZXRjaCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiaW1hZ2VzIiwibGVuZ3RoIiwiTXlWaWRlb0NvbXBvbmVudCIsInZpZGVvSWQiLCJ2aWRlb09wdGlvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/secondPageProjet.jsx\n"));

/***/ })

});