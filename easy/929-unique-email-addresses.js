/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (const email of emails) {
    let localAddress = '';
    let i = 0;
    while (email[i] !== '@' && email[i] !== '+') {
      if (email[i] === '.') continue;
      localAddress += email[i];
      i++;
    }

    const domain = email.split('@')[1];
    set.add(localAddress + '@' + domain);
  }

  return set.size;
};
