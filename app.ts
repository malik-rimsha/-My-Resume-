const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsList?.style.display === 'none') {
        skillsList.style.display = 'block';
    } else {
        skillsList!.style.display = 'none';
    }
});