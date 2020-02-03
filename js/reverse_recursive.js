function nameMatrioska(target) {
    console.log(target);
    var longMatrioska = target.length;
    
    var lastPosition = longMatrioska -1;
    for(var  i= lastPosition; i >= 0; i--){
    
      console.log(target[i]);
    }
  }
  //USER
  const names = nameMatrioska({
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
  });
  
  console.log(names);