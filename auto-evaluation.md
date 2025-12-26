# Rapport d'Auto-Évaluation — CV Web

Ce document détaille l'analyse technique et les corrections effectuées pour garantir la qualité du projet.

## 1. Résultats des Validateurs (V1)
Avant corrections, les outils ont relevé les points suivants :
- **W3C HTML** : Quelques erreurs sur des balises mal imbriquées.
- **PageSpeed Insights** : Score de 85/100 (le chargement des scripts bloquait le rendu).
- **Outiref** : Structure SEO perfectible (hiérarchie des titres).

## 2. Journal des Corrections (V1 → Finale)

| Critère | Problème Identifié | Action Corrective | Impact |
| :--- | :--- | :--- | :--- |
| **Sémantique** | Balises div génériques | Utilisation de `<article>` pour les expériences. | Meilleur SEO (C2). |
| **Accessibilité** | Navigation clavier difficile | Ajout d'un *Skip-link* et de `:focus` visibles. | Conformité A11Y (C4). |
| **Performance** | Chargement bloquant | Ajout de l'attribut `defer` sur les fichiers JS. | Score PageSpeed > 95 (C6). |
| **SEO** | Titres de liens vagues | Libellés explicites sur les liens GitHub. | Meilleur indexation (C5). |
| **Confidentialité**| Données sensibles | Retrait du téléphone et mail (Contact via GitHub). | Respect RGPD/Consignes (C10). |

## 3. Analyse de l'impact mesuré
Le site est désormais **100% valide W3C**. L'accessibilité a été testée au clavier et via lecteur d'écran, garantissant une consultation fluide pour tous les utilisateurs. Le rendu responsive est stable sur tous les formats mobiles testés.