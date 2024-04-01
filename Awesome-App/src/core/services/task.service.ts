import axios from "axios";
import { mapFromApi, taskApi, TaskModel } from "../models/tasks/task-model";

export async function getTasks(url: string): Promise<TaskModel[]> {
console.log(url)

  const result = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      title: "Créer un site web",
      description:
        "Développement d'un site web vitrine pour une entreprise locale.",
      domain: "Développement web",
      nombre_heures: 20,
      progression: 0.25,
      participants: ["John Doe", "Jane Doe"],
      essence_of_assessment: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg",
      title: "Rédiger un article de blog",
      description:
        "Rédaction d'un article informatif sur les tendances du marché pour un blog d'entreprise.",
      domain: "Marketing",
      nombre_heures: 5,
      progression: 0.75,
      participants: ["Jane Doe"],
      essence_of_assessment: ["SEO", "Rédaction web"],
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg",
      title: "Concevoir un logo",
      description:
        "Création d'un logo unique et identifiable pour une nouvelle entreprise.",
      domain: "Graphisme",
      nombre_heures: 10,
      progression: 0.5,
      participants: ["John Doe"],
      essence_of_assessment: ["Adobe Illustrator", "Design graphique"],
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/6366444/pexels-photo-6366444.jpeg",
      title: "Analyser des données",
      description:
        "Collecte et analyse de données pour identifier les tendances et les opportunités d'amélioration.",
      domain: "Data Science",
      nombre_heures: 15,
      progression: 0.1,
      participants: ["Jane Doe", "John Doe"],
      essence_of_assessment: ["Python", "NumPy", "Pandas"],
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      title: "Développer une application mobile",
      description:
        "Création d'une application mobile native pour iOS et Android.",
      domain: "Développement mobile",
      nombre_heures: 40,
      progression: 0.0,
      participants: ["John Doe"],
      essence_of_assessment: ["Kotlin", "Java", "React Native"],
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg",
      title: "Traduire un document",
      description:
        "Traduction d'un document juridique de l'anglais vers le français.",
      domain: "Traduction",
      nombre_heures: 10,
      progression: 0.0,
      participants: ["Jane Doe"],
      essence_of_assessment: ["Traduction juridique"],
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/4737201/pexels-photo-4737201.jpeg",
      title: "Créer une vidéo explicative",
      description:
        "Production d'une vidéo pédagogique pour expliquer un concept complexe.",
      domain: "Production vidéo",
      nombre_heures: 20,
      progression: 0.25,
      participants: ["John Doe", "Jane Doe"],
      essence_of_assessment: ["Adobe Premiere Pro", "Motion Graphics"],
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg",
      title: "Organiser un événement",
      description:
        "Planification et coordination d'un séminaire pour une entreprise.",
      domain: "Événementiel",
      nombre_heures: 15,
      progression: 0.5,
      participants: ["Jane Doe"],
      essence_of_assessment: ["Logistique événementielle", "Gestion de projet"],
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/9430880/pexels-photo-9430880.jpeg",
      title: "Rédiger un rapport d'analyse",
      description:
        "Synthèse et analyse de données pour un projet de recherche.",
      domain: "Data Science",
      nombre_heures: 10,
      progression: 0.75,
      participants: ["John Doe"],
      essence_of_assessment: ["R", "Statistiques"],
    },
    {
      id: 10,
      image: "https://images.pexels.com/photos/374563/pexels-photo-374563.jpeg",
      title: "Développer un site e-commerce",
      description:
        "Création d'une plateforme de vente en ligne pour un magasin de vêtements.",
      domain: "Développement web",
      nombre_heures: 40,
      progression: 0.1,
      participants: ["John Doe", "Jane Doe"],
      essence_of_assessment: ["Django", "E-commerce"],
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/5668808/pexels-photo-5668808.jpeg",
      title: "Gérer les réseaux sociaux",
      description:
        "Création et publication de contenu sur les réseaux sociaux pour une entreprise.",
      domain: "Marketing",
      nombre_heures: 5,
      progression: 0.0,
      participants: ["Jane Doe"],
      essence_of_assessment: [
        "Social Media Management",
        "Community Management",
      ],
    },
    {
      id: 12,
      image:
        "https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg",
      title: "Rédiger un livre blanc",
      description:
        "Création d'un document informatif sur un sujet d'expertise pour une entreprise.",
      domain: "Marketing",
      nombre_heures: 10,
      progression: 0.25,
      participants: ["John Doe", "Jane Doe"],
      essence_of_assessment: ["Rédaction web", "Content marketing"],
    },
    {
      id: 13,
      image:
        "https://images.pexels.com/photos/5668808/pexels-photo-5668808.jpeg",
      title: "Concevoir une campagne publicitaire",
      description:
        "Développement d'une stratégie publicitaire pour un nouveau produit.",
      domain: "Marketing",
      nombre_heures: 15,
      progression: 0.5,
      participants: ["John Doe"],
      essence_of_assessment: ["Marketing digital", "Publicité Google Ads"],
    },
  ];
  return result.map(item=>mapFromApi(item));
}
