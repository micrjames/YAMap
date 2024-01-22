const { Collection } = require("../Collection/Collection");

class YAMap extends Collection {
	constructor() {
	   super();
	}

	delete(key: any) {
	   // returns value
	}
	entries() {
	   // returns Iterator object that contains an array of [key, value] for each element in insertion order. 
	}
	get(key: any) {
	   // returns value
	}
	has(key: any): boolean {
	   return false;
	}
	keys() {
	   // returns Iterator object that contains the keys for each element in the Map object in insertion order.
	}
	set(key: any, value: any) {
	   // returns this
	}
	values() {
	}
	clear() {
	}
}

exports.YAMap = YAMap;
