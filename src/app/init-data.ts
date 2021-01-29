import { Card } from "./models/card";

export class home{
public static sectionA: Card[] = [
  {Id:getRandomInt(1000), Content:"Write something",Likes:2, Section:"A"},
  {Id:getRandomInt(1000),Content:"",Likes:4, Section:"A"},
  {Id:getRandomInt(1000),Content:"",Likes:8, Section:"A"},
]

public static sectionB: Card[] = [
  {Id:getRandomInt(1000),Content:"",Likes:1, Section:"B"},
  {Id:getRandomInt(1000),Content:"",Likes:3, Section:"B"},
]

public static sectionC: Card[] = [
  {Id:getRandomInt(1000),Content:"",Likes:0, Section:"C"},
  {Id:getRandomInt(1000),Content:"",Likes:9, Section:"C"},
  {Id:getRandomInt(1000),Content:"",Likes:5, Section:"C"},
]
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}