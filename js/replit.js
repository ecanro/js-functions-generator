function recursiveNameMatrioska(matrioska, list) {
    list.push(matrioska.name);
    if (!matrioska.daughter) {
        return list;
    } else {
        return recursiveNameMatrioska(matrioska.daughter, list);
    }
}
function nameMatrioska(target) {
  return recursiveNameMatrioska(target, []);
}
//USER
var bigMatrioska = {
    name: 'grandma',
    daughter: {
      name: 'mother',
      daughter: {
        name: 'daughter',
        daughter: {
          name: 'granddaughter'
        }
      }
    }
  };
var names = nameMatrioska(bigMatrioska);
console.log(names);
