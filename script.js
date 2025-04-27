function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

function showRecipes() {
    const recipeList = document.getElementById('recipe-list');
    if (recipeList.style.display === 'none') {
        recipeList.style.display = 'block';
    } else {
        recipeList.style.display = 'none';
    }
}

// При запуске показываем первую секцию
document.addEventListener('DOMContentLoaded', () => {
    showSection('strength');
});