
// написание сокрытия модального окна

const btn = document.querySelector(".table")

const modal = document.querySelector(".modal")

const send = document.querySelector(".send")

const overlay = document.querySelector(".overlay")



// const body = document.querySelector("body")

// body.addEventListener("click", function () {
    
//     body.classList.add("hidden")
// }) 


// ОШИБКА!!!!!!!!!!!!!!!!!!!!!!



console.log(overlay)





send.addEventListener("click", function () {

    modal.classList.add("hidden")

    overlay.classList.add("hidden")



    // строка выше сокрытие затенения при закрытии модального окна

    // эдд тут добавил класс который скрывает

    // это скрытие модального окна
})

// адд добавить класс элементу в нашем случае модальному окну класс хидден в котором написано скрыть модальное окно

btn.addEventListener("click", function () {

    // console.log(modal.classList)

    // список классов которые есть у хтмл элемента модал

    modal.classList.remove("hidden") 

    overlay.classList.remove("hidden")

    // удаление класса хидден в котором есть дисплей нан скорытие модального окна соответственно оно снова появляется

    // тут модальное окно появляется

    // класс лист список классов модального окна

    
    
}) 



// эдд добавление класса ремув удаление вообще любого класса


// HOMEWORK повторять логику модального окна



// HW ДЗ
// Сделать так, чтобы при нажатии на overlay модальное окно закрывалось и overlay тоже закрывался

// ПРИ НАЖАТИИ НА ПУСТОЕ ПРОСТРАНСТВО


overlay.addEventListener("click", function () {
    
    modal.classList.add("hidden")

    overlay.classList.add("hidden")
})



// KEYDOWN НАЖАТИЕ КЛАВИШИ НА КЛАВИАТУРЕ

document.addEventListener("keydown", function (event) {

    // мы хотим реагировать на нажатие кнопки по всему сайту поэтому слушатель событий с документом

    console.log(event) 

    if (event.keyCode === 27) {

        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
})

// способ скрытия через клавишу эскейп в данном случае 27 код нужной клавиши

// на русском если событие код клавиши равен 27 то скрыть оверлей и модальное окно

// код клавиши не ее номер



// https://travkina-t.github.io/test-Tzeezotje/

const swiper = new Swiper('.swiper', {
  // ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ НАПРАВЛЕНИЕ ДВИЖЕНИЯ СЛАЙДЕРА ИЛИ БУДЕТ ЛИ ДВИЖЕНИЕ БЕСКОНЕЧНЫМ
//   direction: 'vertical',
  loop: true,
  keyboard: true,

  // киборд тру означает активно переключение стрелками на клавиатуре

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
    //   },
    
    // ТОЧКИ СЛАЙДЕРА ЧТОБЫ НАПРИМЕР ПЕРЕКЛЮЧИТЬСЯ С 3ЕГО НА ПЕРВЫЙ

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
    //   },
  // СКРОЛЛБАР ПОЛОСА ПРОКРУТКИ ТУТ НЕ НУЖНА ВООБЩЕ
  

}); 

// HW СДЕЛАТЬ СТИЛИЗАЦИЮ СЛАЙДЕРА
    
