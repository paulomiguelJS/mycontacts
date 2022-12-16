const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Paulo',
    email: 'paulo@email.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Carlos',
    email: 'carlos@email.com',
    phone: '55555',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }
}

module.exports = new ContactsRepository();
