const { Collection } = require("../Collection/Collection");
const { dataObj } = require("./utils/utils");

class YAMap extends Collection {
	constructor() {
	   super();
	}
	set(key: any, value: any): typeof dataObj {
	   return super.push({[key]: value});
	}
    get(key: any) {
	   const data = super.get();
	   const dataArr = Object.values(data);
	   const foundObj = dataArr.find(obj => obj.hasOwnProperty(key));
	   if(foundObj) return foundObj[key];
	   return undefined;
	}
	has(key: any): boolean {
	   const data = super.get();
	   const dataArr = Object.values(data);
	   return dataArr.some(obj => obj.hasOwnProperty(key));
	}
	delete(key: any) {
	   // returns value
	   const data = super.get();
	   const dataArr = Object.values(data);
	   const foundIdx = dataArr.findIndex(obj => obj.hasOwnProperty(key));
	   const del = Object.assign(data[foundIdx]);
	   delete data[foundIdx];
	   return del;
	}
	get entries() {
	   // returns Iterator object that contains an array of [key, value] for each element in insertion order. 
	   let entries = [];
	   const keys = this.keys;
	   const values = this.values;
	   for(let i = 0; i < super.size; i++)
	      entries = [...entries, [keys[i], values[i]]];
	   return entries;
	}
	get keys() {
	   // returns Iterator object that contains the keys for each element in the Map object in insertion order.
	   const data = super.get();
	   const dataArr = Object.values(data);
	   const keys = dataArr.flatMap((_, i) => 
		  Object.keys(dataArr[i])
	   );
	   return keys;
	}
	get values() {
	   const data = super.get();
	   const dataArr = Object.values(data);
	   const values = dataArr.flatMap((_, i) => 
		  Object.values(dataArr[i])
	   );
	   return values;
	}
	clear() {
	   const data = super.get();
	   const keys = Object.keys(data);
	   keys.forEach(key => {
		  delete data[key];
	   });
	}
}

exports.YAMap = YAMap;
