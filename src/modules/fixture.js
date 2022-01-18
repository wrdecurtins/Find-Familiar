module.exports = (data, modelType, autoIncrement = false) => {
  let fixtures = [];
  var i = 1;
  data.forEach(item => {
    autoIncrement && (item.id = i);
    fixtures.push({
      model: modelType,
      data: item
    });
    i++;
  });
  return fixtures;
};
