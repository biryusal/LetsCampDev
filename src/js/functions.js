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
  return new Promise((resolve, reject) => {
    database.ref("currentRequests/" + id).on("value", (snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val());
      }
      else {
        reject();
      }
    })
  })
}

export async function getCampingsByPageIdAndSize(pageID, pageSize = 20) {    
  const promises = [];

  for (let i = (pageID-1)*20 + (pageID-1); i < (pageID*20 + (pageID-1)); i++) {
    promises.push(asyncGetCampingById(i))
  }

  return Promise.allSettled(promises)
    .then(values => {
      return values.filter(currentItem => {
        if (currentItem.status == "fulfilled" && currentItem.value) {
          return currentItem;
        }
      }).map(curr => {
        if (curr.value) {
          return curr.value;
        }
      })
    });
}

export async function asyncGetAmountOfCampings() {
  return new Promise((resolve) => {
    database.ref("/amountOfCampings").on("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
}