# YAMap
An implementation of a map in Typescript.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working through implementing data structures. I decided not to use an array as the basic container for the data to be held in a Map. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Set using that as the data container.

## Technologies Used
I'm only using plain, vanilla Typescript with no libraries or other packages.

## Features
* An object with an iterator that functions as the container to hold data.
* Store keys and values into the Map.
* Remove the keys and value from the Map.
* Get the data stored at a given key.
* Retrieve the keys, values or a combination of them.
* Test if there is a value stored at a given key.
* Clear out all the data from the Map.

## Setup
Just import the YAMap class into your project.

## Usage
Instatiate the class.
```
const map = new YAMap();
```
Set or delete some elements to or from the Collection. Using the key and value you'd like to set in the Map.
```
map.set(key, value);
```
And to delete that key/value pair from the map, use:
```
map.delete(key);
```
To read the value stored at the given key:
```
const value = map.get(key);
```
Can test for the exisitence of any value stored at a given key.
```
const hasValue = map.has(key);
```
Read a key/value pair from the Map.
```
const [key, value] = map.entries;
```
Read the keys or values from the Map, individually, using getter methods.
```
const keys = map.keys;
const values = map.values;
```
Can remove all the key/value pairs from the Map, where the map instance is in a similar state as to when it was first initialized.
```
map.clear();
```
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
