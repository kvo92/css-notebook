let bgcolor = window
                    .getComputedStyle(document
                    .documentElement)
                    .getPropertyValue('--div-background-color')
console.log(bgcolor);

document.getElementById('dark-theme-button')
        .addEventListener('click', () => {
          document.documentElement.style.setProperty
            ('--background-color', '#333')
        })

document.getElementById('light-theme-button')
        .addEventListener('click', () => {
          document.documentElement.style.setProperty
            ('--background-color', 'white')
        })

//detect black mode
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.style.setProperty
                                ('--background-color', '#333');
}

//detech change mode
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    console.log("here");
      document.documentElement.style.setProperty
    ('--background-color', '#333')
  } else {
    //light mode
  }
})