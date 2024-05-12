let settings = document.querySelector('.settings-icon'),
     settingsBox = document.querySelector('.settings-box'),
     licolors = document.querySelectorAll('.color-links li'),
     navIcon = document.getElementById('nav-icon'),
     close = document.getElementById('close'),
     linksUl = document.querySelector('.links'),
     buttonsMood = document.querySelectorAll('.buttons span'),
     lightBtn = document.getElementById('light'),
     darkBtn = document.getElementById('dark'),
     tabLinks = document.querySelectorAll('.tab-title .tab-links'),
     inputs = document.querySelectorAll('.inputs')
     gearIcon = document.querySelector('.settings-icon .icon');

settings.addEventListener('click', ()=> {
     gearIcon.classList.toggle('fa-spin');
     settingsBox.classList.toggle('open');
});

let temp;
//local Storge
let colorOption = localStorage.getItem('color-option');
let moodOption =   localStorage.getItem('mood-option');
if(colorOption != null) {
     document.documentElement.style.setProperty('--main-color', colorOption);
     // remove active class from all colors
     licolors.forEach(li => {
          li.classList.remove('active');

          if (li.dataset.color === colorOption) {
               li.classList.add('active');
          }
     });
     
}
 // check moodOption
 if (moodOption != null) { 
     // remove active class from all buttons
     buttonsMood.forEach(btn => {
          btn.classList.remove('active');
     });

     if (moodOption === 'light') {
          document.body.classList = ('light-mood');
          lightBtn.classList.add('active');
     } else {
          document.body.classList = ('dark-mood');
          darkBtn.classList.add('active');
     }
     // remove class from body
     document.body.classList.remove('light');
     document.body.classList.remove('dark');

     document.body.classList.add(moodOption);

}

//navBar toggle class open
navIcon.addEventListener('click', ()=> {
     linksUl.classList.add('open');
});
close.addEventListener('click',()=> {
     linksUl.classList.remove('open');
});

// change color
licolors.forEach(li => {
     li.addEventListener('click', (e) => {
          document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
          // set color in local storage
          localStorage.setItem('color-option', e.target.dataset.color);

          licolors.forEach(li => {
               li.classList.remove('active');
          });
          e.target.classList.add('active');
          
     });
});

// Light and Dark Mood
function lightMood(id){
     if(id == 'light'){
          document.body.classList = ('light-mood');
          // set color in local storage
          localStorage.setItem('mood-option', id);
          
     }else{
          document.body.classList = ('dark-mood');
          // set color in local storage
          localStorage.setItem('mood-option', id);
     }
};

// Active Class
buttonsMood.forEach(btn => {
     btn.addEventListener('click', (ele)=> {
          buttonsMood.forEach(btn => {
               btn.classList.remove('active');
          });
          ele.target.classList.add('active');
     })
});

// Active TabLinks 
tabLinks.forEach(link => {
     link.addEventListener('click', (ele)=> {

          tabLinks.forEach(link => {
               link.classList.remove('active-link');
          });
          ele.target.classList.add('active-link');
     });
});

// Show active-tab
let activeTab = document.querySelectorAll('.tab-content');

function showTab(tabname) {
     activeTab.forEach(tab => {
          tab.classList.remove('active-tab');
     });
     document.getElementById(tabname).classList.add('active-tab');
}

