function nameSubmit(event) {
    // Receive text value
    const nameToCheck = document.querySelector('#name').value;
    const getWelcomings = JSON.stringify(getNameChecked(`/getwelcomings?name=${nameToCheck}`));

    return true;
}

function updateUI(name){
    document.querySelector('#username').innerHTML = name.message;
    return;
}

const getNameChecked = async (url = '') => {

    const request = await fetch(url);
    try {
        // Transform into JSON
        const nameCheckedResponse = await request.json()
        updateUI(nameCheckedResponse);
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

export { nameSubmit }