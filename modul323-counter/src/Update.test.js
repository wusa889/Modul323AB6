const { update, MSGS} = require("./Update");

test("Add Test for Model", () => {
    const model = 1;
    const newModel = update(MSGS.ADD, model);
    expect(model).toBe(1);
    expect(newModel).toBe(2) 
});

test("Subtract Test for Model", () => {
    const model = 100;
    const newModel = update(MSGS.SUBTRACT, model);
    expect(model).toBe(100);
    expect(newModel).toBe(99)
})

test("Not correct message", () => {
    const model = 100;
    const newModel = update("someMessage", model);
    expect(model).toBe(100)
    expect(newModel).toBe(100)
})