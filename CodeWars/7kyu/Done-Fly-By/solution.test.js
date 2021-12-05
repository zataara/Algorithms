const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Drone Fly-By", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
        assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
        assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
    })
})