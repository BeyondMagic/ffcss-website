"use strict";

fetch('themes.json').then(function (data) {
  return data.json();
}).then(function (parsedData) {
  parsedData.forEach(function (entry) {
    var output = document.createElement('div');
    output.classList.add('card');
    var cardHeader = document.createElement('header');
    var themeTitle = document.createElement('h3');
    themeTitle.classList.add('theme-title');
    var themeTitleLink = document.createElement('a');
    themeTitleLink.href = entry.link;
    themeTitleLink.innerText = entry.title;
    var themeDownloadIcon = document.createElement('i');
    themeDownloadIcon.classList.add('fas', 'fa-chevron-circle-down');
    var themeMeta = document.createElement('a');
    themeMeta.classList.add('meta');
    themeMeta.href = entry.link;
    var themeImage = document.createElement('img');
    themeImage.src = entry.image;
    themeImage.alt = entry.title;
    var themeDesc = document.createElement('p');
    themeDesc.classList.add('description');
    themeDesc.innerText = entry.description;
    themeTitle.appendChild(themeTitleLink);
    cardHeader.appendChild(themeTitle);
    cardHeader.appendChild(themeDownloadIcon);
    themeMeta.appendChild(themeImage);
    themeMeta.appendChild(themeDesc);
    output.appendChild(cardHeader);
    output.appendChild(themeMeta);
    var container = document.getElementById('main_content');
    container.appendChild(output);
  });
}); // Themes

var prefDark = window.matchMedia("(prefers-color-scheme: dark)").matches,
    prefTheme = localStorage['theme'],
    themeTrigger = document.getElementById('js-themeSwitcher'),
    themeTriggerIcon = themeTrigger.querySelector('i');

var toggleTheme = function toggleTheme() {
  document.documentElement.classList.toggle('nightmode');
  document.documentElement.classList.toggle('daymode');
  themeTriggerIcon.classList.toggle('fa-sun');
  themeTriggerIcon.classList.toggle('fa-moon');
};

if (prefDark) {
  document.documentElement.classList.add('nightmode');
  themeTriggerIcon.classList.remove('fa-moon');
  themeTriggerIcon.classList.add('fa-sun');
}

if (!prefDark) {
  document.body.classList.add('daymode');
}

if (prefTheme === 'day') {
  toggleTheme();
} else localStorage['theme'] = 'night';

themeTrigger.addEventListener('click', function (event) {
  if (localStorage['theme'] === 'night') localStorage['theme'] = 'day';else localStorage['theme'] = 'night';
  toggleTheme();
});