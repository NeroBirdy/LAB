let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

const settings = {
    step: 0,
    maxStep: 6, 
    sizeCell: 16,
    sizeBerry: 16 / 2,
    score: 0
}

const snake = {
    x: 160,
    y: 160,
    speedX: settings.sizeCell,
    speedY: 0,
    tails: [],
    maxTails: 3
}

let berry = {
    x: 0,
    y: 0
}

requestAnimationFrame(gameLoop);

function gameLoop() {

    requestAnimationFrame(gameLoop);

    if ( ++settings.step < settings.maxStep) {
        return;
    }
    settings.step = 0;

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawBerry();
    drawSnake();
}
function plusScore() {
    let score = document.querySelector(".score");
    score.innerHTML = "счет: " + settings.score;            
}

function drawSnake() {
    snake.x += snake.speedX;
    snake.y += snake.speedY;

    collisionBorder();

    snake.tails.unshift( {x: snake.x, y: snake.y});

    if (snake.tails.length > snake.maxTails) {
        snake.tails.pop();
    }

    snake.tails.forEach(function(el, index){
        if (index == 0) {
			context.fillStyle = "#14b814";
		} else {
			context.fillStyle = "#53ec53";
		}

        context.fillRect(el.x, el.y, settings.sizeCell, settings.sizeCell);

        if (el.x === berry.x && el.y === berry.y)
        {
            settings.score++;
            plusScore();
            snake.maxTails++;
            randomBerry();
        }

        for(let i = index + 1; i < snake.tails.length; i++) {

            if (el.x === snake.tails[i].x && el.y === snake.tails[i].y) {
                gameOver();
            }
        }
    })
}

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomBerry() {
    berry.x = getRandom( 0, canvas.width / settings.sizeCell ) * settings.sizeCell;
	berry.y = getRandom( 0, canvas.height / settings.sizeCell ) * settings.sizeCell;
}

function drawBerry() {
	context.beginPath();
	context.fillStyle = "#A00034";
	context.arc( berry.x + (settings.sizeCell / 2 ), berry.y + (settings.sizeCell / 2 ), settings.sizeBerry, 0, 2 * Math.PI );
	context.fill();
}

function gameOver() {
    snake.x = 160;
    snake.y = 160;
    snake.tails = [];
    snake.maxTails = 3;
    snake.speedX = settings.sizeCell;
    snake.speedY = 0;
    settings.score = 0;
    plusScore();
    randomBerry();
}

function collisionBorder() {
    if(snake.x < 0) {
        snake.x = canvas.width - settings.sizeCell;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    if(snake.y < 0) {
        snake.y = canvas.height - settings.sizeCell;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.code == "KeyW") {
        if (snake.speedY === settings.sizeCell)
            return;
        snake.speedY = -settings.sizeCell;
        snake.speedX = 0;
    }
    else if (e.code == "KeyA") {
        if (snake.speedX === settings.sizeCell)
            return;
        snake.speedX = -settings.sizeCell;
        snake.speedY = 0;
    }
    else if (e.code == "KeyD") {
        if (snake.speedX === -settings.sizeCell)
            return;
        snake.speedX = settings.sizeCell;
        snake.speedY = 0;
    }
    else if (e.code == "KeyS") {
        if (snake.speedY === -settings.sizeCell)
            return;
        snake.speedY = settings.sizeCell;
        snake.speedX = 0;
    }
    
});

document.addEventListener('DOMContentLoaded', function () {
    const draggable = document.getElementById('draggable');

    let offsetX, offsetY, isDragging = false;

    draggable.addEventListener('mousedown', function (event) {
        isDragging = true;

        offsetX = event.clientX - draggable.getBoundingClientRect().left;
        offsetY = event.clientY - draggable.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
        if (isDragging) {
            draggable.style.left = event.clientX - offsetX + 'px';
            draggable.style.top = event.clientY - offsetY + 'px';
        }
    }

    function onMouseUp() {
        isDragging = false;

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const trail = document.querySelector('.trail');

//     document.addEventListener('mousemove', function (e) {
//         const x = e.pageX;
//         const y = e.pageY;

//         trail.style.transform = `translate(${x}px, ${y}px)`;
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    let seven = document.querySelector(".seven").childNodes;

    let buttons = [];

    for (let i of seven) {
        if (i.outerHTML == "<div></div>")
            buttons.unshift({btn: i, red: true});
    }
    
    buttons.forEach(function(el) {
        el.btn.addEventListener('click',function() {
            if (el.red == false)
            {
                el.red = true;
                el.btn.style.background = "red";
                return;
            }
            for (let i of buttons)
            {
                i.red = true;
                i.btn.style.background = "red";
            }
            el.btn.style.background = "green";
            el.red = false;
        })
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let circle = document.querySelector(".sixCircle");
    circle.addEventListener('mouseenter', function() {
        circle.style.background = "green";
    });
    circle.addEventListener('mouseleave', function() {
        circle.style.background = "red";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector(".one-one");
    let btn2 = document.querySelector(".one-three");
    let btn3 = document.querySelector(".one-four");
    let btn4 = document.querySelector(".one-five");
    let textarea = document.getElementById("one-two");
    btn.addEventListener('click',function() {
        if (textarea.textContent !== "")
        {
            textarea.textContent = "123131";
            alert("Вы ввели «123131»");
        }
        else
        {
            textarea.textContent = "123131";
            alert("Вы ничего не ввели");
        }
    });

    btn2.addEventListener('click',function() {
        if (btn2.textContent == "Разблокировано")
        {
            textarea.disabled = true;
            btn2.textContent = "Заблокировано"
        }
        else
        {
            textarea.disabled = false;
            btn2.textContent = "Разблокировано"
        }
    });

    btn3.addEventListener('click',function() {
        if (btn3.textContent == "Доступно")
        {
            textarea.style.color = "transparent";
            btn3.textContent = "Скрыто";
        }
        else
        {
            textarea.style.color = "black"
            btn3.textContent = "Доступно";
        }
    });

    btn4.addEventListener('click',function() {
        if (btn4.textContent === "Скрыть поле")
        {
            textarea.style.display = "none";
            btn4.textContent = "Показать поле";
        }
        else
        {
            textarea.style = "";
            btn4.textContent = "Скрыть поле";
        }
    });
});

let data = ["Яблоко",
            "Опель",
            "Россия",
            "Банан",
            "Саша",
            "Ящер"
            ];

document.addEventListener('DOMContentLoaded', function () {
    
    let text = document.querySelector(".inp");
    let area = document.querySelector(".e");
    text.addEventListener('input',function() {
        area.innerHTML = "";
        if (text.value === "")
            return;
        else   
        {
            let find = [];
            for (i of data)
            {
                if (i.toLowerCase().includes(text.value.toLowerCase()))
                {
                    let div = document.createElement("div");
                    div.innerHTML = i;
                    find.push(div);
                }
            }
            if (find.length == "")
                return;
            for(let i of find)
            {
                area.appendChild(i);
            }
            find.forEach(function(el) {
                el.addEventListener('click', function() {
                    text.value = el.innerHTML;
                    area.innerHTML = "";
                    area.appendChild(el);
                });
            });
        }
    });


});
