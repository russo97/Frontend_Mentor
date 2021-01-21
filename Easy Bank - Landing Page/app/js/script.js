(function () {

  const $ = document.querySelector.bind(document);

  const [header, overlay, btnHamburger] = [
    '.header', '.overlay', '#btnHamburger'
  ].map($);

  const toggleClasses = [{
    addIf: true, className: 'fade-in'
  }, {
    addIf: false, className: 'fade-out'
  }];


  function toggleMenuAndOverlayBox () {
    header.classList.toggle('open');

    let headerHasOpenClass = header.classList.contains('open');

    toggleClasses.forEach(({ className, addIf }) => {
      overlay.classList.toggle(className, headerHasOpenClass == addIf);
    });
  }


  btnHamburger.addEventListener('click', toggleMenuAndOverlayBox, false);
})();