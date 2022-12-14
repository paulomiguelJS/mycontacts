const ContactsRepository = require('../respositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // get a register
  }

  update() {
    // Create register
  }

  delete() {
    // Delete register
  }
}

module.exports = new ContactController();
