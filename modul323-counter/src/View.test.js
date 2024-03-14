const {view} = require("./View");
const {MSGS} = require("./Update");

test("Root element structure", () => {
  const myView = view(() => {}, 0);
  expect(myView.tagName).toBe("DIV");
  expect(myView.properties).toEqual({ className: "flex flex-col gap-4 items-center" });
  expect(myView.children.length).toBe(2);
});

test("Counter text value", () => {
  const myView = view(() => {}, 1);
  expect(myView.children[0].children[0].text).toBe("Count: 1");
});

test("Button click", () => { const myView = view((msg) => { return msg;}, 0);
  expect(myView.children[1].children[0].properties.onclick(MSGS.ADD)).toBe(MSGS.ADD);
  expect(myView.children[1].children[1].properties.onclick(MSGS.SUBTRACT)).toBe(MSGS.SUBTRACT);
});