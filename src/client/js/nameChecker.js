async function nameSubmit(event) {
    // Receive text value
    const nameToCheck = document.querySelector('#name').value;
    const nameResponse = await getNameChecked(`/getwelcomings?name=${nameToCheck}`);
    updateUI(nameResponse);
    return nameResponse;
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
        return nameCheckedResponse
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

export { nameSubmit }