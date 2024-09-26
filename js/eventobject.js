
function mouseMove(ev) {
    let mousePos = mouseCoords(ev);
    document.getElementById("mousex").value = mousePos.x;
    document.getElementById("mousey").value = mousePos.y;
}

function mouseCoords(ev) {
    return { x: ev.pageX, y: ev.pageY };
}

function registerHandlers() {
    document.onmousemove = mouseMove;
}

//window.onload = registerHandlers;
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'complete') {
        registerHandlers();
    }
}