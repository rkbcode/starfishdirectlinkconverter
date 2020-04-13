// HTML Elements
const inputNormalUrl = document.querySelector('#input-normal-url');
const inputDlProfile = document.querySelector('#input-dl-profile');
const inputDlAppointment = document.querySelector('#input-dl-appointment');
const pDlProfile = document.querySelector('#p-dl-profile');
const pDlAppointment = document.querySelector('#p-dl-appointment');
const generateButton = document.querySelector('#generate');

// Regexes
const fullUrl = /([\w-]+)\.starfishsolutions\.com\/([\w-]+)\/(\w+)\/serviceCatalog\.html(\?[\w\d=]+)?#\/(\w+)\/(\d+)/;
const dlUrl = /starfishsolutions.*\?bookmark=/;

// Event Listeners
inputNormalUrl.addEventListener('input', convertUrl);
inputNormalUrl.addEventListener('click', e => e.target.select());
pDlProfile.addEventListener('click', () => copyThis(inputDlProfile, pDlProfile));
pDlAppointment.addEventListener('click', () => copyThis(inputDlAppointment, pDlAppointment));

// Functions
function convertUrl() {
    
    const alreadyDl = dlUrl.test(inputNormalUrl.value) || dlUrl.test(inputNormalUrl.value)
    const matcher = fullUrl.exec(inputNormalUrl.value) || fullUrl.exec(inputNormalUrl.value);
    

    if (alreadyDl) {

        pDlProfile.textContent = "The pasted link is already a Direct Link!";
        pDlAppointment.textContent = "The pasted link is already a Direct Link!";

        inputDlAppointment.value = "";
        inputDlProfile.value = "";

    }
    else if(matcher && matcher.length === 7) {
        
        const domain = matcher[1];
        const instance = matcher[2];
        const view = matcher[3];
        const type = matcher[5];
        const id = matcher[6];
        
        inputDlProfile.value = `https://${domain}.starfishsolutions.com/${instance}/dl/${view}/serviceCatalog.html?bookmark=${type}/${id}`;
        inputDlAppointment.value = `https://${domain}.starfishsolutions.com/${instance}/dl/${view}/serviceCatalog.html?bookmark=${type}/${id}/schedule`;
        
        pDlProfile.textContent = inputDlProfile.value;
        pDlAppointment.textContent = inputDlAppointment.value;
    }
    else {

        pDlProfile.textContent = "The pasted link doesn't appear to be a Starfish profile/service link";
        pDlAppointment.textContent = "The pasted link doesn't appear to be a Starfish profile/service link"
        
    }
}

function copyThis(inputElement, pElement) {
    
    inputElement.select();
    document.execCommand('copy');
    inputElement.blur()
    pElement.textContent = "Copied!"
    setTimeout(() => pElement.textContent = inputElement.value, 1300 );

}
