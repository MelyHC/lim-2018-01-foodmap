window.districtRest = (rest, district) => {
  let restDistrict = rest;
  district = district.toLowerCase();
  restDistrict = rest.filter(restAddres => restAddres.addres.toLowerCase().indexOf(district) >= 0)
  return restDistrict;
}

window.typeRest = (rest, typeFood) => {
  let foodTypeRest = rest;
  typeFood = typeFood.toLowerCase();
  foodTypeRest = rest.filter(restType => restType.type.toLowerCase().indexOf(typeFood) >= 0)
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