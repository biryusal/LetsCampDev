import { useState } from "react";
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

  for (let i = (pageID-1)*pageSize + (pageID-1); i < (pageID*pageSize + (pageID-1)); i++) {
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

export async function getCampingByFilter(name) {
  let result = await new Promise((resolve, reject) => {
    database.ref("currentRequests/").orderByChild(name).equalTo("true").on("value", snapshot => {
      resolve(snapshot.val());
    })
  });
  return result;
}

export function revokeSpecialFiltersCheckboxes() {
  document.getElementById("food").checked = false;
  document.getElementById("isWater").checked = false;
  document.getElementById("animals").checked = false;
  document.getElementById("electricity").checked = false;
  document.getElementById("kids").checked = false;
  document.getElementById("parkSpace").checked = false;
}

export function revokeAdditionalFiltersCheckboxes() {
  document.getElementById("WiFi").checked = false;
  document.getElementById("nonsmokeZone").checked = false;
  document.getElementById("sleepSpace").checked = false;
  document.getElementById("peopleDisabilities").checked = false
}

export function getNameOfClickedRegion(e) {
  if (e.target.classList.contains("region__option")) {
    closeModalWindows(e);
    return e.target.innerHTML;
  }
}

export function closeModalWindows(event) {
  let modalButtons = document.getElementsByClassName("modalWindowButton"),
      modalWindows = document.getElementsByClassName("modalWindow");


  for (let i = 0; i < modalWindows.length; i++) {
    modalWindows[i].style.display = "none";
  }
  
  for (let k = 0; k < modalButtons.length; k++) {
    modalButtons[k].classList.remove(modalButtons[k].id + "_active");
  }   

  resetOptionsScroll(event);
}

export function resetOptionsScroll(event) {
  let currentWindow = document.getElementById(event.target.parentNode.id);
  currentWindow.scrollTop = 0;
}

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}