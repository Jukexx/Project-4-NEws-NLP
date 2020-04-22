function namePost() {
    document.getElementById('username').innerHTML = "";
    // check what text was put into the form field
    let formName = [document.getElementById('name').value];
    postData('/formresponsename', formName);
    let userWelcomingText = getWelcomingsFromServer('/formresponsewelcome');
    updateUI(userWelcomingText);
}

function updateUI(data){
    let print = document.getElementById('username').innerHTML = data;
    return data;
}

export { namePost }
export { updateUI }
module.exports = updateUI