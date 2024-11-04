import './scss/main.scss'

const frame = document.querySelector('.frame')
const folder = document.querySelector('.folder')
const mail = document.querySelector('.mail')
const optionItems = document.querySelectorAll('.options > div')
const listContainer = document.querySelector('.list-container')


// 點擊sidebar顯示效果
optionItems.forEach(element => {
    element.addEventListener('click', () => {
        for (let i=0; i< optionItems.length; i++) {
            optionItems[i].classList.remove('bg-black')
            optionItems[i].classList.remove('bg-white')
        }
        if(element.classList.contains('frame')) {
            element.classList.add('bg-white')
        }
        else if (element.classList.contains('folder') || element.classList.contains('mail')) {
            element.classList.add('bg-black')
        }
    })
});

// 動態產生內容
function generateInnerHtml (num) {
    for(let i=1; i<= num; i++) {
        listContainer.innerHTML += `
            <div class="list">
                <div class="checkbox-wraper">
                    <input type="checkbox" class="checkbox">
                </div>
                <div class="id">
                    <p>1</p>
                </div>
                <div class="name">
                    <p>Christmas 2020</p>
                </div>
                <div class="advertiser">
                    <p>Food Market</p>
                    <p>Krab</p>
                </div>
                <div class="description">
                    <p>holiday night during chr...</p>
                </div>
                <div class="price">
                    <p>2000</p>
                </div>
                <div class="start-time">
                    <p>2020/12/24 19:30</p>
                </div>
                <div class="end-time">
                    <p>2021/01/02 23:00</p>
                </div>
                <div class="actions">
                    <img src="icons/menu.svg" alt="">
                    <div class="popup d-none">
                        <div class="popup-items">
                            <img src="icons/duplicate.svg" alt="">
                            <p>Duplicate</p>
                        </div>
                        <div class="popup-items">
                            <img src="icons/edit.svg" alt="">
                            <p>Edit</p>
                        </div>
                        <div class="popup-items">
                            <img src="icons/delete.svg" alt="">
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

generateInnerHtml(16)

// 偶數表格灰底顏色
const listItems = document.querySelectorAll('.list')
for(let i=0; i<listItems.length; i++) {
    if(i%2 !== 0) {
        listItems[i].classList.add('odd')
    } else {
        listItems[i].classList.add('even')
    }
}

//勾選變橘色
const checkboxes = document.querySelectorAll('.list .checkbox')
checkboxes.forEach(element => {
    element.addEventListener('click', () => {
        const list = element.parentElement.parentElement
        list.classList.toggle('orange')
    })
})

//POP UP toggle
const button = document.querySelectorAll('.actions > img')
button.forEach(element => {
    element.addEventListener('click', () => {
        element.nextElementSibling.classList.toggle('d-none')
    })
})

// Dark Mode
const darkModeToggle = document.querySelector('#darkmode')
darkModeToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
})