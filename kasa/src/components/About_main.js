// J'importe la bibliothèque React.
import React from 'react';
// J'importe les styles CSS spécifiques à la page "About".
import '../styles/About.css';
// J'importe le composant "Collapse" nécessaire pour afficher des sections dépliables.
import Collapse from './collapse';

function About_main() {

    // Définition des sections à afficher avec leur titre et contenu.
    const sections = [
        {
            title: 'Fiabilité',
            content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos qont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title: 'Respect',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title: 'Service',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title: 'Sécurité',
            content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
        },
    ]

    return (
        <div className="about-main">
          {sections.map((section, index) => (
            // Boucle sur les sections pour créer des composants "Collapse" avec le titre et le contenu de chaque section.
            <Collapse key={index} title={section.title} content={section.content} />
          ))}
        </div>
      );
}

export default About_main;