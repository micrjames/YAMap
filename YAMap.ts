import { Collection } from "./Collection/Collection";
import { dataObj } from "./utils/utils";

export class YAMap extends Collection {
	constructor() {
	   super();
	}
	set(key: any, value: any): dataObj {
	   if(!this.has(key)) return super.push({[key]: value});
	   else {
		  const data = super.get();
		  const dataArr = Object.values(data);
		  const foundObj = dataArr.find(obj => obj.hasOwnProperty(key));
		  foundObj[key] = value;
		  return super.data;
	   }
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
	get entries(): typeof Collection {
	   // returns Iterator object that contains an array of [key, value] for each element in insertion order. 
	   const entries = new Collection();
	   const keys = this.keys;
	   const values = this.values;
	   for(let i = 0; i < super.size; i++)
	      entries.push([keys.getElement(i), values.getElement(i)]);
	   return entries;
	}
	get keys(): typeof Collection {
	   // returns Iterator object that contains the keys for each element in the Map object in insertion order.
	   const keys = new Collection();
	   const data = super.get();
	   const dataArr = Object.values(data);
	   dataArr.forEach((_, i) => { 
		  const k = Object.keys(dataArr[i])[0];
		  keys.push(k);
	   });
	   return keys;
	}
	get values(): typeof Collection {
	   const values = new Collection();
	   const data = super.get();
	   const dataArr = Object.values(data);
	   dataArr.flatMap((_, i) => {
		  const v = Object.values(dataArr[i])[0];
		  values.push(v);
	   });
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
