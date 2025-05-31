import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
    await fs.writeFile(PATH_DB, '[]', 'utf8');
    console.log('Усі контакти видалено.');
  } catch (err) {
    console.error('Помилка при видаленні контактів:', err);
  }
};

removeAllContacts();
