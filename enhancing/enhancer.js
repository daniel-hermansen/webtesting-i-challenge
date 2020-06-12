module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(name, enhancement, durability) {
  let newItem = { name, enhancement, durability };
  if (enhancement < 20) {
    return { ...newItem, enhancement: enhancement + 1 };
  } else if (enhancement === 20){
    return newItem
  }
}

function fail(name, enhancement, durability) {
  let newItem = { name, enhancement, durability };
  if(enhancement < 15) {
    return { ...newItem, durability: durability - 5 };
  } else if (enhancement >= 15) {
    return { ...newItem, durability: durability - 10 };
  } else if (enhancement >= 17) {
    return { ...newItem, enhancement: enhancement - 1, durability: durability - 10 };
  }
}

function repair(item) {
  const newItem = {...item, durability: 100};
  return newItem;
}

function get(item) {
  return { ...item };
}
