document.addEventListener('DOMContentLoaded', () => {
    const setupPage = document.getElementById('setupPage');
    const indexPage = document.getElementById('indexPage');
    const krInput = document.getElementById('kratke');
    const stInput = document.getElementById('stredni');
    const dlInput = document.getElementById('dlouhe');
    const kratkodobe = document.getElementById('kratkodobe');
    const strednedobe = document.getElementById('strednedobe');
    const dlouhodobe = document.getElementById('dlouhodobe');
    const saveButton = document.getElementById('saveDenik');
    const editButton = document.getElementById('editDenik');

    // Načtení uloženého deníku
    function loadDenik() {
        const denik = JSON.parse(localStorage.getItem('denik')) || {
            kratke: '',
            stredni: '',
            dlouhe: '',
        };
        krInput.value = denik.kratke;
        stInput.value = denik.stredni;
        dlInput.value = denik.dlouhe;
        kratkodobe.textContent = denik.kratke;
        strednedobe.textContent = denik.stredni;
        dlouhodobe.textContent = denik.dlouhe;
    }

    // Uložení deníku
    saveButton.addEventListener('click', () => {
        const denik = {
            kratke: krInput.value,
            stredni: stInput.value,
            dlouhe: dlInput.value,
        };
        localStorage.setItem('denik', JSON.stringify(denik));
        loadDenik();
        setupPage.classList.add('hidden');
        indexPage.classList.remove('hidden');
    });

    // Přepnutí na stránku nastavení
    editButton.addEventListener('click', () => {
        setupPage.classList.remove('hidden');
        indexPage.classList.add('hidden');
    });

    // Inicializace
    loadDenik();
});

