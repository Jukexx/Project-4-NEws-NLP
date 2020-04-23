import { nameSubmit } from './nameChecker'

function handleSubmit(submitStatement) {
    submitStatement.preventDefault()
    nameSubmit();
    // Receive text value
    const text = document.getElementById("statement").value;
    
    if (text.length < 100){
        const statementAnalysis = getStatementChecked(`/checkStatement?statement=${text}`);
        return true;
    }
    else{
        alert('Your text is over 100 words or there is a problem with it.')
        return;
    }
}




const getStatementChecked = async (url = '') => {

    const request = await fetch(url);
    try {
        // Transform into JSON
        const statementCheckResponse = await request.json();
        updateUI(statementCheckResponse);
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

function updateUI(data){
    document.querySelector('#formresults').innerHTML = `Polarity: ${data.polarity};

                                                        Subjectivity: ${data.subjectivity};

                                                        Polarity Confidence: ${Math.round(data.polarity_confidence*100)}%;

                                                        Polarity Confidence: ${Math.round(data.subjectivity_confidence*100)}%;

                                                        Text: ${data.text}`
}
export { handleSubmit }
