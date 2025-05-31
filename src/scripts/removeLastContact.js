import {readContacts} from '../utils/readContacts.js';
import {writeContacts} from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контакти відсутні. Немає чого видаляти.');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);
    console.log('Останній контакт видалено.');
  } catch (err) {
    console.error('Помилка при видаленні:', err);
  }
};

removeLastContact();
