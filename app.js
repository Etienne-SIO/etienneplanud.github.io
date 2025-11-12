// app.js — léger : anime les barres de compétences et ajoute alt/fallback si besoin
document.addEventListener('DOMContentLoaded', function () {
  // Animation des barres de compétences
  const skills = document.querySelectorAll('.niveau-skill');
  skills.forEach(function (el, idx) {
    const level = parseInt(el.dataset.level, 10) || 70;
    // petite attente pour séquence légère
    setTimeout(() => el.style.width = level + '%', 120 * idx);
  });

  // Ajout d'un role / aria-hidden sur icônes décoratives si besoin
  document.querySelectorAll('.icone-geometrique i, .liste-contact i').forEach(i => {
    i.setAttribute('aria-hidden', 'true');
  });

  // Gestion d'un fallback si JS bloque les barres (progress non animé)
  // Nothing else heavy here to keep perf small
});
