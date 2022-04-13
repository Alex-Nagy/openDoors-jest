const getOpenDoors = (number) => {
  let doorsList = [];
  let openDoors = []
  for (let i = 0; i < number; i++) {
    door = {
      id: i + 1,
      isOpen: false,
    };
    doorsList.push(door);
  }
//   console.log(doorsList)

  for (let round = 1; round <= doorsList.length; round++) {
      for(let door of doorsList) {
          if(door.id % round === 0) door.isOpen = !door.isOpen
      }
  }

  for (let i = 0; i < doorsList.length; i++) {
      const door = doorsList[i];
      if (door.isOpen === true) openDoors.push(door.id)
  }

  return openDoors
}

module.exports = getOpenDoors