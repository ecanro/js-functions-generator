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
  name: 'Marina',
  daughter: {
    name: 'Esperanza',
    daughter: {
      name: 'Deysy',
      daughter: {
        name: 'Isabella'
      }
    }
  }
};
var names = nameMatrioska(bigMatrioska);
console.log(names);
