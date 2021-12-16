describe("Tests", () => {
  it("test", () => {
Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
  });
});
