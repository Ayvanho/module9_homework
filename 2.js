const jsonString = `<{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}>

`;

const jsonData = JSON.parse(jsonString);

const result = {
  list: []
};

for (let i = 0; i < jsonData.list.length; i++) {
  const item = jsonData.list[i];
  const name = item.name;
  const age = Number(item.age);
  const prof = item.prof;

  result.list.push({ name, age, prof });
}

console.log(result);