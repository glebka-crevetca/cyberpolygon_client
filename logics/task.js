try {
    let getParams;
    if(window.location.search.indexOf('task=') != -1){
        const currentValue = window.location.search.replace(/\?/, '').split('=');
        getParams = {[currentValue[0]]: currentValue[1]};
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/cyberpolygon/get-task",
            data: getParams,
            success: function (task) {
                console.log(task);
                composeTask(task);
            },
        });
    }

    function composeTask(item){

        const main = document.querySelector('task');


        const template = document.getElementById('task_template');

        const post = template.content.cloneNode(true);
        const { title, description } = item;

        post.querySelector('.title').innerText = title;
        post.querySelector('.description').innerText = description;

        post.querySelector('.file_download').innerText = title+'.zip';
        main.append(post);
    }




    /*const form = document.getElementById('wrong-form');
    form.addEventListener("submit", toChangeButton);

    function toChangeButton() {
        rightButton = document.getElementById('right-answer');
        rightButton.setAttribute("disabled", "");
    }*/

}catch (e) {
    console.log(e);
}