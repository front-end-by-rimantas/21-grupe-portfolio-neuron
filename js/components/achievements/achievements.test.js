import { achievements } from "./achievements.js";

describe("Parameters validation", () => {
    test("No parameters found", () => {
        expect(achievements()).toBe("No parameters found");
    });
    test("Invalid parameter provided", () => {
        expect(achievements(5)).toBe("Invalid parameter provided");
    });
    test("No parameters found", () => {
        expect(achievements([])).toBe("Invalid parameter provided");
    });
});
describe("Parameters key validation", () => {
    test("Parameters should countain values", () => {
        expect(achievements({})).toBe("Incorect number of keys");
    });
    test("Incorect number of keys", () => {
        expect(achievements({ selector: "#achievements" })).toBe("Incorect number of keys");
    });
    test("Incorect keys provided", () => {
        expect(achievements({ selector: "#achievements", cars: "#achievements" })).toBe("Incorect keys provided");
    });
    test("Incorect keys provided", () => {
        expect(achievements({ selector: "#achievements", cars: "#achievements" })).toBe("Incorect keys provided");
    });
    test("Key value empty", () => {
        expect(achievements({ selector: "", list: [] })).toBe("Selector has not been specified");
    });
    test("Key value empty", () => {
        expect(achievements({ selector: " ", list: [] })).toBe("Selector has not been specified");
    });
    test("List value empty", () => {
        expect(achievements({ selector: "#achievements_content", list: [] })).toBe("Empty list parameter provided");
    });
});

