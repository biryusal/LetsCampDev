import {database} from "./firebase";

export function getLoggedKey() {
  const cookies = document.cookie;
  return cookies.match(/letscampIsLoggedIn\s*=\s*(.*)/)[1];
}

export function createUser(userId, name, email, token) {
  database.ref('users/' + Number(100000 + userId)).set({
    username: name,
    email: email,
    token: token
  });
}

export function generateKey(len, charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let randomString = '';
  for (let i = 0; i < len; i++) {
      let randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

export function asyncGetCampingById(id) {
  return new Promise((resolve) => {
    database.ref("currentRequests/" + id).on("value", (snapshot) => {
      resolve(snapshot.val());
    });
  })
}

export async function getCampingsByPageIdAndSize(pageID, pageSize = 20) {    
  const promises = [];

  for (let i = (pageID-1)*20 + (pageID-1); i < (pageID*20 + (pageID-1)); i++) {
    promises.push(getAsyncData(i))
  }

  return Promise.all(promises)
    .then((results) => results)
}