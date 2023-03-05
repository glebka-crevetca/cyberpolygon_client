const servResponse = document.querySelector('.text_button');

let userCategory;
let nextPage = 2;
let isLoading = false;
let shouldLoad = true


;(() => {

        window.addEventListener('scroll', throttle(checkPosition, 250))
        window.addEventListener('resize', throttle(checkPosition, 250))

})()

document.forms.categoriesPanel.onsubmit = function (e) {
    e.preventDefault();
    userCategory = e.submitter.id;

    document.getElementById(userCategory).style["background-color"] = "white";
    if (userCategory != 'admin'){
        document.getElementById("admin").style["background-color"] =    "#89AAC8";
    }
    if (userCategory != 'stegano'){
        document.getElementById("stegano").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'forensic'){
        document.getElementById("forensic").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'crypto'){
        document.getElementById("crypto").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'osint'){
        document.getElementById("osint").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'web'){
        document.getElementById("web").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'network'){
        document.getElementById("network").style["background-color"] = "#89AAC8";
    }
    if (userCategory != 'reverse'){
        document.getElementById("reverse").style["background-color"] = "#89AAC8";
    }
    $('#task-container').children().not('#Task_reg').not('#task_template').remove();

    /*fetch('http://localhost:3000/cyberpolygon/getTasks', {
        method: 'GET',
        body: {
            Category: userCategory
        },
        headers: new Headers(),
    })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            alert(response.message);
        });*/

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/cyberpolygon/getTasks",
        data:{category: userCategory},//Стоит сделать отправку количества присылаемых тасков
        success: function ({tasks}) {
            tasks.forEach(item => {
                renderTask(item);
            })
        },
    });

};

async function checkPosition() {
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight

    const scrolled = window.scrollY

    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы:
    const threshold = height - screenHeight / 4

    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight

    if (position >= threshold) {
        await requestTasks();
    }
}

function throttle(callee, timeout) {
    let timer = null

    return function perform(...args) {
        if (timer) return

        timer = setTimeout(() => {
            callee(...args)

            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}

async function requestTasks() {
    if (isLoading || !shouldLoad) return;
    isLoading = true;
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/cyberpolygon/getTasks",
        data:{category: userCategory, page: nextPage},
        success: function ({tasks,next}) {


            console.log(tasks);
            tasks.forEach(item => {
               renderTask(item);
            })

            nextPage = next;
            if (!next) shouldLoad = false;

            isLoading = false;
        },
    });
}


function renderTask(item){

    const main = document.querySelector('#task-container');
    const taskNode = composeTask(item);
    main.append(taskNode);

}

function composeTask(data) {
    const template = document.getElementById('task_template');

    const post = template.content.cloneNode(true);
    const { id, title, description, points } = data;

    post.querySelector('h1').innerText = title;
    post.querySelector('.text-task').innerText = description;
    post.querySelector('.score').innerText = points;

    post.querySelector('.task-button').href += '?task='+id;
    return post;
}

