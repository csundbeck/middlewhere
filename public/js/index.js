function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementsByClassName("closebtn").classList.toggle("rollIn");
}

function closeNav(x) {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    x.classList.toggle("rollIn");
}

function openPOINav() {
    document.getElementById("poiNav").style.width = "400px";
    document.getElementById("main").style.marginRight= "350px";
    document.getElementsByClassName("closebtn").classList.toggle("rollIn");
}

function closePOINav(x) {
    document.getElementById("poiNav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    x.classList.toggle("rollIn");
}

function showFriends() {
    const arrowDrop = document.getElementById('arrowDrop');
    const friendsList = document.getElementById('friends-list');
    
    if (arrowDrop.classList.value === 'fas fa-chevron-circle-down') {
        arrowDrop.classList.remove('fa-chevron-circle-down');
        arrowDrop.classList.add('fa-chevron-circle-up');
    } else {
        arrowDrop.classList.add('fa-chevron-circle-down');
        arrowDrop.classList.remove('fa-chevron-circle-up');
    }

    if (friendsList.style.display != 'block') {
        friendsList.style.display = 'block';
        friendsList.classList.toggle('slideInDown', true);
        friendsList.classList.toggle('slideOutUp', false);
    } else {
        friendsList.classList.toggle('slideOutUp', true);
        friendsList.classList.toggle('slideInDown', false);
        friendsList.style.display = 'none';
    }

}

function restartBtn() {
    location.href = "index.html";
}

window.onload = openPOINav();