
function lesMerMindreU() {
    // Toggle the visibility state
    txtSynligU = !txtSynligU;

    // Set the button text based on the current visibility state
    btnLMU.textContent = txtSynligU ? "Les mindre ..." : "Les mer ...";

    // Update the display style accordingly
    txtLMU.style.display = txtSynligU ? "block" : "none";
    // Når tekstboksen utvides, flytt visningen slik at teksten starter øverst på siden
    if (txtSynligU) {
        document.querySelector('#introU').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else{
        document.querySelector('#boker').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Set focus back to the button
    btnLMU.focus();
}

function lesMerMindreV(){
    // Toggle the visibility state
    txtSynligV = !txtSynligV;

    // Set the button text based on the current visibility state
    btnLMV.textContent = txtSynligV ? "Les mindre ..." : "Les mer ...";

    // Update the display style accordingly
    txtLMV.style.display = txtSynligV ? "block" : "none";

    if (txtSynligV) {
        document.querySelector('#introV').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else{
        document.querySelector('#ruleV').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Set focus back to the button
    btnLMV.focus();
}
// Initialize the button and text elements
let btnLMU = document.getElementById("btnLesMerUS");
let txtLMU = document.getElementById("lesMerUS");
let btnLMV = document.getElementById("btnLesMerVGS");
let txtLMV = document.getElementById("lesMerVGS");
// Set the initial state and update the UI accordingly
let txtSynligU = false;
let txtSynligV = false;

// Assign the event handler to the button's onclick event
btnLMU.onclick = lesMerMindreU;
btnLMV.onclick = lesMerMindreV;
