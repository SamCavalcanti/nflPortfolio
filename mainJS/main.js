// Section indicator - start

const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
          const scrollY = window.pageYOffset

          sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.ul__list a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
            document.querySelector('.ul__list a[href*=' + sectionId + ']').classList.remove('active-link')
            }
          })
        }
        window.addEventListener('scroll', scrollActive);
// Section indicator - end

        // AskC

        const shadowC = document.querySelector('.shadow-behind-askC');
        const askC = document.querySelector('.ask-container');
        const askH1 = document.querySelector('#changeAfter');
        const divButtons = document.querySelector('.buttons');
        const noOptionButton = document.querySelector('#noOption');
        const yesOptionButton = document.querySelector('#yesOption');

        const formC = document.querySelector('.form-askC');
        const formCH1 = document.querySelector('#askText');
        const inputUserName = document.querySelector('#userName');
        const buttonSubmit = document.querySelector('.submitButton');

        const mainH1IntroC = document.querySelector('#mainH1');
      

      function closeShadowC() {
        shadowC.classList.add('closeShadowCo');
        mainH1IntroC.innerHTML = "Hello, Visitant";
      }  
      noOptionButton.addEventListener('click', closeShadowC);

      function openInput() {
        formC.classList.add('openFormC');
        divButtons.classList.add('closeGeneral');
        askH1.classList.add('closeGeneral');
      }

      function showName() {
        // console.log('hfjs');
        shadowC.classList.add('closeShadowCo');
      }

      buttonSubmit.addEventListener('click', showName);

      yesOptionButton.addEventListener('click', openInput);

      function changeText() {
        const input = document.querySelector('#userName');
        let name = input.value
        const title = document.querySelector('.titleWillChange');
        title.textContent = 'Hello, '+name+'!';
        return false
      }

      // function changeText() {
      //   const input = document.querySelector('#userName');
      //   let name = input.value
      //   const title = document.querySelector('.titleWillChange');
      //   title.textContent = 'Hello, '+name+'!'
      //   return false
      // }