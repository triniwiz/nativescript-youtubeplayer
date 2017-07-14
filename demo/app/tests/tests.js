var Youtubeplayer = require("nativescript-youtubeplayer").Youtubeplayer;
var youtubeplayer = new Youtubeplayer();

describe("greet function", function() {
    it("exists", function() {
        expect(youtubeplayer.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(youtubeplayer.greet()).toEqual("Hello, NS");
    });
});