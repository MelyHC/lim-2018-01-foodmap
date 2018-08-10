window.districtRest = (rest, district) => {
  let restDistrict = rest;
  restDistrict = rest.filter(restAddres => restAddres.addres.toLowerCase().indexOf(district) >= 0)
  return restDistrict;
}

window.typeRest = (rest, typeFood) => {
  let foodTypeRest = rest;
  foodTypeRest = rest.filter(restType => restType.type.indexOf(typeFood) >= 0)
  return foodTypeRest;
}

window.searchNameRest = (rest, search) => {
  let searchName = rest;
  search = search.toLowerCase();
  searchName = rest.filter(restName => restName.name.toLowerCase().indexOf(search) >= 0)
  return searchName;
}

window.selecRest = (optionsFilter) => {
  const districtSelect = districtRest(optionsFilter.restaurants, optionsFilter.addres);
  const foodSelect = typeRest(districtSelect, optionsFilter.type);
  const nameRestSelect = searchNameRest(foodSelect, optionsFilter.name);
  return nameRestSelect;
}