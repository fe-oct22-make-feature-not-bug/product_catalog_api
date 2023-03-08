const phonesService = require('../services/phones-info');

const getAll = (req, res) => {
  phonesService.getAll().then((phones) => {
    res.send(phones);
  });
};

const getOne = (req, res) => {
  const { phoneId } = req.params;
  phonesService
    .findById(phoneId)
    .then((foundPhone) => {
      if (!foundPhone) {
        res.sendStatus(404);

        return;
      }

      res.send(foundPhone);

      return foundPhone;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  getOne,
};
