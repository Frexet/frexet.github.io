// Function to show only the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleSection(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Show Home section by default on load
document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
});

// Function to load SoundCloud mix based on selection
function loadMix(mix) {
    const playerDiv = document.getElementById("soundcloud-player");
    let embedUrl = "";

    if (mix === "tech-house") {
        embedUrl = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rexet/tech-house-mix&color=%2300adb5";
    } else if (mix === "edm-remix") {
        embedUrl = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rexet/first-remix-edm&color=%2300adb5";
    }

    if (embedUrl) {
        playerDiv.innerHTML = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="${embedUrl}"></iframe>`;
        console.log(`Loaded SoundCloud mix: ${embedUrl}`);
    } else {
        console.error("No valid mix selected.");
    }
}
