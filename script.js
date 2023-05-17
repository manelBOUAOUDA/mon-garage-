class Voiture {
  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
  }

  afficherDetails() {
    console.log(`Marque: ${this.marque}`);
    console.log(`Modèle: ${this.modele}`);
    console.log(`Année: ${this.annee}`);
    console.log(`Couleur: ${this.couleur}`);
  }
}

class Garage {
  constructor(voitures) {
    this.voitures = voitures;
  }

  afficherVoituresAnnee(annee) {
    const voituresAnnee = this.voitures.filter((voiture) => voiture.annee === annee);
    console.log(`Voitures de l'année ${annee}:`);
    voituresAnnee.forEach((voiture) => voiture.afficherDetails());
  }

  afficherVoituresMarque(marque) {
    const voituresMarque = this.voitures.filter((voiture) => voiture.marque === marque);
    console.log(`Voitures de la marque ${marque}:`);
    voituresMarque.forEach((voiture) => voiture.afficherDetails());
  }

  afficherVoituresMarqueTroisLettres(lettres) {
    const voituresMarqueTroisLettres = this.voitures.filter((voiture) => {
      return voiture.marque.toLowerCase().includes(lettres.toLowerCase()) && voiture.marque.length === 3;
    });
    console.log(`Voitures dont la marque contient "${lettres}" et a 3 lettres:`);
    voituresMarqueTroisLettres.forEach((voiture) => voiture.afficherDetails());
  }
}
