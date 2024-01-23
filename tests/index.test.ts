const { YAMap } = require("../YAMap");
const { dataObj } = require("../utils/utils");

describe("A Map.", () => {
   describe("Basic operations.", () => {
	  let map: typeof YAMap;
	  let data: typeof dataObj;
	  let value: string;
	  beforeAll(() => {
		 map = new YAMap();
		 data = map.set("breed", "poodle");
		 value = map.get("breed");
	  });
	  test("Should not be empty.", () => {
		 expect(value).not.toBeFalsy();
	  });
      test("Should set the key/value pair.", () => {
		 expect(data[map.size - 1]).toHaveProperty("breed", "poodle");
	  });
      test("Should get the value.", () => {
		 expect(value).toBe("poodle");
	  });
      test("Should have the value.", () => {
		 expect(map.has("breed")).toBeTruthy();
	  });
      test("Should be of given size.", () => {
		 expect(map.size).toBe(1);
	  });
      test("Should delete the given key/value pair.", () => {
		 map.delete("breed");
		 expect(map.has("breed")).toBeFalsy();
	  });
	  test.todo("Should get the entries([key/value])."); // it
	  test.todo("Should get the keys of the map."); // it
	  test.todo("Should get the values of the map."); // it
      test("Should clear the map.", () => {
		 data = map.set("breed", "poodle");
		 map.clear();
		 expect(map.has("breed")).toBeFalsy();
	  });
   });
   describe("That is iterable.", () => {
	  test.todo("Should iterate the entries.");
	  test.todo("Should iterate the keys.");
	  test.todo("Should iterate the values.");
   });
});
