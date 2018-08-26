describe("AngularJS App", function () {

    beforeEach(function () {
        browser.get("http://localhost:8080");
    });

    it("should have a title", function () {
        browser.getTitle().then(function (webpagetitle) {
            expect(webpagetitle).toEqual("Protractor AngularJS test");
        });
    });

    it("should have heading with text", function () {
        expect(element(by.tagName("h1")).getText()).toBe("Welcome to the home page");
    });
});