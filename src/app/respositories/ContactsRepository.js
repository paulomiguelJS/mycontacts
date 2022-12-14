const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Paulo',
    email: 'paulo@email.com',
    phone: '123123123',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
