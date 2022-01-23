module.exports = (data, modelType, autoIncrement = false) => {
  let fixtures = [];
  var i = 1;
  data.forEach(item => {
    console.log(i);
    autoIncrement && (item.id = i);
    fixtures.push({
      model: modelType,
      data: item
    });
    i++;
  });
  return fixtures;
};
