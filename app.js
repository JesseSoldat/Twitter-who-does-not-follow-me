var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '3A98ovHBVZMmp1Gza874HrwYk',
  consumer_secret: 'sM3VVuLJ7apCVWlyWhhJLkbLxqt4XQjTqpXzBtkxEEdOu1jocv',
  access_token_key: '4275177635-aPHVn0rQJeaBGIPFfdEJ7FKLf0IVw1abmjtdUBY',
  access_token_secret: 'eUqSGurjZsxTn19zTUJmJJ3T0j4boQ8lpBmOGqLv047yy'
});
 
var params = {screen_name: 'jkup'};
client.get('followers/ids', params, function(error, users, response) {
  if (!error) {
    console.log(users.ids.length);
  }
});