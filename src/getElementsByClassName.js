const getElementsByClassName = (targetClass) => {
  const targetedElementsList = [];
  const { body } = document;
  function checkForClass(body) {
    if (body.classList.contains(targetClass)) {
      targetedElementsList.push(body);
    }
    if (body.children.length > 0) {
      for (let i = 0; i < body.children.length; i++) {
        checkForClass(body.children[i]);
      }
    }
  }
  checkForClass(body);
  return targetedElementsList;
};

module.exports = { getElementsByClassName };
