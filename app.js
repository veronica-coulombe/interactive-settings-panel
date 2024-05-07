const settingsData = [
    {
        title: 'auto save photos',
        uid: 'autoSavePhotos',
        description: 'automatically save photos when uploading them to your profile.',
        isChecked: false
    },
    {
        title: 'location services',
        uid: 'locationServices',
        description: 'allow the app to have access to your location to show you more relevant posts.',
        isChecked: true
    },
    {
        title: 'dark mode',
        uid: 'darkMode',
        description: 'toggle a darker theme for the app. this makes the UI easier to read in darker environments.',
        isChecked: false
    }
];

const settingsPanel = document.getElementById('settingsPanel');
settingsData.forEach(setting => {
    createSetting(setting);
});

function createSetting(data) {
    const settings = document.getElementById('settings');
    settings.innerHTML += `
    <div class="setting">
        <label for="${data.uid}">
            <span><strong>${data.title}</strong></span>
            <span>${data.description}</span>
        </label>
        <input type="checkbox" id="${data.uid}">
    </div>
    `
}

if (document.getElementById('darkMode')) {
    document.getElementById('darkMode').addEventListener('change', e => {
        if (e.target.checked) {
            settingsPanel.classList.add('dark');
        } else {
            settingsPanel.classList.remove('dark');
        }
    });
}