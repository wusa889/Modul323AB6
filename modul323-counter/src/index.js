const { update } = require("./Update");
const { view } = require("./View");
const { app } = require("./App");
const { initModel } = require("./Model"); 

const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);


// import hh from "hyperscript-helpers";
// import { h, diff, patch } from "virtual-dom";
// import createElement from "virtual-dom/create-element";

// const hh = require("hyperscript-helpers");
// const { h, diff, patch } = require("virtual-dom");
// const createElement = require("virtual-dom/create-element");

// const { div, button } = hh(h);

// const MSGS = {
//   ADD: "ADD",
//   SUBTRACT: "SUBTRACT",
// };

// function view(dispatch, model) {
//   const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
//   return div({ className: "flex flex-col gap-4 items-center" }, [
//     div({ className: "text-3xl" }, `Count: ${model}`),
//     div({ className: "flex gap-4" }, [
//       button({ className: btnStyle, onclick: () => dispatch(MSGS.ADD) }, "➕ Increase"),
//       button({ className: btnStyle, onclick: () => dispatch(MSGS.SUBTRACT) }, "➖ Decrease"),
//     ]),
//   ]);
// }

// function update(msg, model) {
//   switch (msg) {
//     case MSGS.ADD:
//       return model + 1;
//     case MSGS.SUBTRACT:
//       return model - 1;
//     default:
//       return model;
//   }
// }

// impure code below (not avoidable but controllable)
// function app(initModel, update, view, node) {
//   let model = initModel;
//   let currentView = view(dispatch, model);
//   let rootNode = createElement(currentView);
//   node.appendChild(rootNode);
//   function dispatch(msg) {
//     model = update(msg, model);
//     const updatedView = view(dispatch, model);
//     const patches = diff(currentView, updatedView);
//     rootNode = patch(rootNode, patches);
//     currentView = updatedView;
//   }
// }

// const initModel = 0;
