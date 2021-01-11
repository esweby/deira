const themeSwitcher = {
    container: document.querySelector('.color-switcher'),
    btn: document.querySelector('.color-toggle'),
    theme: 'light',
    opposite: 'dark',
    btnSwitch: () => {
      themeSwitcher.btn.classList.toggle('right');
      themeSwitcher.btn.classList.toggle('left');
    },
    themeSwap: () => {
      if (themeSwitcher.theme === 'light') {
        themeSwitcher.theme = 'dark';
        themeSwitcher.opposite = 'light';
      } else {
        themeSwitcher.theme = 'light';
        themeSwitcher.opposite = 'dark';
      }
    },
    classColor: (theme, num) => { return `.color-${theme}-${themeSwitcher.numbers[num]}` },
    classBgColor: (theme, num) => { return `.bgcolor-${theme}-${themeSwitcher.numbers[num]}` },
    numbers: ['one', 'two', 'three', 'four', 'five'],
    changeColor: () => {
      for (let i = 0; i < 5; i++) {
        const oldClass = `color-${themeSwitcher.theme}-${themeSwitcher.numbers[i]}`;
        const newClass = `color-${themeSwitcher.opposite}-${themeSwitcher.numbers[i]}`;
        const getEles = document.querySelectorAll(`.${oldClass}`);
        if(getEles) {
          for(let i = 0; i < getEles.length; i++) {
            getEles[i].classList.toggle(`${oldClass}`);
            getEles[i].classList.toggle(`${newClass}`);
          }
        }
      }
    },
    changeBgColor: () => {
      for (let i = 0; i < 5; i++) {
        const oldClass = `bgcolor-${themeSwitcher.theme}-${themeSwitcher.numbers[i]}`;
        const newClass = `bgcolor-${themeSwitcher.opposite}-${themeSwitcher.numbers[i]}`;
        const getEles = document.querySelectorAll(`.${oldClass}`);
        if(getEles) {
          for(let i = 0; i < getEles.length; i++) {
            getEles[i].classList.toggle(`${oldClass}`);
            getEles[i].classList.toggle(`${newClass}`);
          }
        }
      }
    },
    exe: () => {
      themeSwitcher.changeColor()
      themeSwitcher.changeBgColor();
      themeSwitcher.btnSwitch();
      themeSwitcher.themeSwap();
    }
  }


  themeSwitcher.container.addEventListener('click', event => {
    if(themeSwitcher.theme === 'light') {
      themeSwitcher.exe()
    } else if (themeSwitcher.theme === 'dark') {
      themeSwitcher.exe()
    }
  });