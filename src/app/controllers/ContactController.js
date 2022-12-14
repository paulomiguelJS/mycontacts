class ContactController {
  index(request, response) {
    response.send('Send from Contact Controller');
  }

  show() {
    // get a registar
  }

  update() {
    // Create register
  }

  delete() {
    // Delete register
  }
}

module.exports = new ContactController();
