const consumptionInput = document.getElementById('consumption');
const panelsInput = document.getElementById('panels');
const batteriesInput = document.getElementById('batteries');
const invertersInput = document.getElementById('inverters');

const iconsContainer = document.getElementById('icons-container');
const alertBox = document.getElementById('alert-box');

[consumptionInput, panelsInput, batteriesInput, invertersInput].forEach(input => {
    input.addEventListener('input', calculateSystem);
});

function calculateSystem() {
    const consumption = parseFloat(consumptionInput.value) || 0;
    const panels = parseInt(panelsInput.value) || 0;
    const batteries = parseInt(batteriesInput.value) || 0;
    const inverters = parseInt(invertersInput.value) || 1;

    const VOLTAGE = 220;
    
    const dayAmps = panels * 2;
    const dayKw = (dayAmps * VOLTAGE) / 1000;
    
    const totalBatteryKw = batteries * 12.5; 
    const nightAmps = (totalBatteryKw * 1000) / VOLTAGE;
    
    let nightHours = 0;
    if (consumption > 0) {
        nightHours = nightAmps / consumption; 
    }

    document.getElementById('day-amps').innerText = dayAmps;
    document.getElementById('day-kw').innerText = dayKw.toFixed(2);
    document.getElementById('night-kw').innerText = totalBatteryKw.toFixed(1);
    document.getElementById('night-amps').innerText = nightAmps.toFixed(1);
    document.getElementById('night-hours').innerText = consumption > 0 ? nightHours.toFixed(1) : "∞";

    checkWarnings(panels, batteries, inverters);

    drawIcons(panels, batteries, inverters);
}

function checkWarnings(panels, batteries, inverters) {
    const maxPanelsPerInverter = 10;
    const maxBatteriesPerInverter = 3;
    
    if (panels > inverters * maxPanelsPerInverter || batteries > inverters * maxBatteriesPerInverter) {
        alertBox.className = "alert-box alert-danger glass-effect";
        alertBox.innerText = "WARNING: Capacity exceeded! You must add another Inverter.";
    } 
    else if (panels === inverters * maxPanelsPerInverter || batteries === inverters * maxBatteriesPerInverter) {
        alertBox.className = "alert-box alert-warning glass-effect";
        alertBox.innerText = "CAUTION: Max capacity reached. It is recommended to use 9 panels and 2 batteries per inverter for safety.";
    } 
    else {
        alertBox.className = "alert-box hidden";
    }
}

function drawIcons(panels, batteries, inverters) {
    iconsContainer.innerHTML = '';
    
    if (panels === 0 && batteries === 0 && inverters === 0) {
        iconsContainer.innerHTML = '<p class="placeholder-text">Enter quantities to see your hardware here...</p>';
        return;
    }

    function createSection(title, count, iconName) {
        if (count === 0) return ''; 
        
        let html = `<div class="hardware-section">`;
        html += `<p class="hardware-title">${title} (<span>${count}</span>):</p>`;
        
        html += `<div class="icons-group">`;
        for(let i = 0; i < count; i++) {
            html += `<img src="../assets/icons/${iconName}.png" class="hardware-icon" title="${title}">`;
        }
        html += `</div></div>`;
        
        return html;
    }

    iconsContainer.innerHTML += createSection('Number of Panels', panels, 'panel');
    iconsContainer.innerHTML += createSection('Number of Batteries', batteries, 'battery');
    iconsContainer.innerHTML += createSection('Number of Inverters', inverters, 'inverter');
}