const { YAMap } = require("../YAMap");
const { dataObj } = require("../utils/utils");

describe("A Map.", () => {
   let map: typeof YAMap;
   const entries = [
	  ["barks", true],
	  ["active", true],
	  ["size", "small"],
	  ["breed", "poodle"]
   ];
   const map_keys = ["barks", "active", "size", "breed"];
   const map_values = [true, true, "small", "poodle"];
   describe("Basic operations.", () => {
	  let data: typeof dataObj;
	  let value: string;
	  beforeAll(() => {
		 map = new YAMap();
		 data = map.set("breed", "poodle");
		 map.set("barks", true);
		 map.set("active", true);
		 map.set("size", "small");
		 value = map.get("breed");
	  });
	  test("Should not be empty.", () => {
		 expect(value).not.toBeFalsy();
	  });
      test("Should set the key/value pair.", () => {
		 expect(data[0]).toHaveProperty("breed", "poodle");
	  });
      test("Should get the value.", () => {
		 expect(value).toBe("poodle");
	  });
      test("Should have the value.", () => {
		 expect(map.has("breed")).toBeTruthy();
	  });
      test("Should be of given size.", () => {
		 expect(map.size).toBe(4);
	  });
      test("Should delete the given key/value pair.", () => {
		 map.delete("breed");
		 expect(map.has("breed")).toBeFalsy();
	  });
	  test("Should get the entries([key/value]).", () => {
		 map.set("breed", "poodle");
		 expect([...map.entries]).toEqual(entries);
	  }); // it
	  test("Should get the keys of the map.", () => {
		 const keys = [...map.keys];
		 expect(keys).toEqual(map_keys);
	  }); // it
	  test("Should get the values of the map.", () => {
		 const values = [...map.values];
		 expect(values).toEqual(map_values);
	  }); // it
      test("Should clear the map.", () => {
		 map.clear();
		 expect(map.has("breed")).toBeFalsy();
	  });
   });
   describe("That is iterable.", () => {
	  test("Should iterate the entries.", () => {
		 let it = 0;
		 for(const [key, value] of map.entries) {
			expect([key, value]).toEqual(entries[it]);
			it++;
		 }
	  });
	  test("Should iterate the keys.", () => {
		 let it = 0;
		 for(const key of map.keys) {
			expect(key).toEqual(map_keys[it]);
			it++;
		 }
	  });
	  test("Should iterate the values.", () => {
		 let it = 0;
		 for(const value of map.values) {
			expect(value).toEqual(map_values[it]);
			it++;
		 }
	  });
   });
});
