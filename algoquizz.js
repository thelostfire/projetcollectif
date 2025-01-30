document.addEventListener("DOMContentLoaded", () => {
  // je crée un objet de mapping entre code, description et conseillé pour définir le profil correspondant et l'afficher a l'utilisateur qui a remplis le quizz
  let descriptionProfil = {
    ENFP: {
      description:
        "Le rêveur hyperactif. Postuler, c’est trop mainstream : vous préférez imaginer votre start-up révolutionnaire… qui reste toujours à l’état de concept.",
    },
    INFP: {
      description:
        "Le poète incompris. Vous cherchez un emploi qui alignera vos valeurs, vos chakras et vos playlists de méditation, quitte à attendre le bon karma.",
    },
    ENTP: {
      description:
        "Le débatteur professionnel. Vous postulez juste pour avoir un entretien, histoire de prouver que vous êtes plus intelligent que le recruteur.",
    },
    INTP: {
      description:
        "Le philosophe procrastinateur. Votre CV est un chef-d’œuvre théorique… qui n’est toujours pas terminé parce que la perfection, ça prend du temps.",
    },
    ENTJ: {
      description:
        "Le boss sans équipe. Vous cherchez un poste pour diriger tout le monde, même si c’est juste vous et une cafetière au départ.",
    },
    INTJ: {
      description:
        "Le stratège mystérieux. Vous avez un plan secret pour dominer le monde, mais en attendant, vous postulez pour tester vos théories sur des jobs normaux.",
    },
    ESTJ: {
      description:
        "Le chef de chantier. Votre objectif ? Organiser tout le monde au chômage pour monter une entreprise… qui embauche uniquement vous.",
    },
    ISTJ: {
      description:
        "Le comptable méticuleux. Votre CV est trié par ordre alphabétique, chronologique et par couleurs. Et vous envoyez toujours vos candidatures avec accusé de réception.",
    },
    ESFJ: {
      description:
        "Le social butterfly. Vous postulez surtout pour avoir des collègues, parce que le chômage, c’est beaucoup trop solitaire pour vous.",
    },
    ISFJ: {
      description:
        "L’ange gardien discret. Vous cherchez un job où vous pouvez aider tout le monde, même si ça veut dire porter le café du patron et son chien.",
    },
    ESTP: {
      description:
        "L’aventurier impulsif. Envoyer des candidatures, c’est bien… mais vous, vous préférez débarquer directement au bureau et improviser une interview.",
    },
    ISTP: {
      description:
        "Le bricoleur solitaire. Vous ne voulez pas juste un job, vous voulez un problème complexe à résoudre. Sinon, c’est pas drôle.",
    },
    ESFP: {
      description:
        "Le showman à plein temps. Vous cherchez un job où vous êtes payé pour être vous-même… idéalement avec un public et des confettis.",
    },
    ISFP: {
      description:
        "L’artiste sensible. Vous voulez un travail qui a du sens, mais pour l’instant, vous redessinez votre CV à l’aquarelle.",
    },
    ENFJ: {
      description:
        "Le coach motivé. Vous passez plus de temps à motiver vos amis au chômage qu’à chercher un job pour vous-même.",
    },
    INFJ: {
      description:
        "Le visionnaire incompris. Vous savez exactement où vous allez, mais convaincre les recruteurs de vous suivre, c’est une autre histoire.",
    },
  };

  let dict = {
    INTJ: ["Julien", "Vincent"],
    INTP: ["Hadjer", "Francois"],
    ENTJ: ["Romain", "Ahmed", "Stephane", "Yani"],
    ENTP: [],

    INFJ: ["Sami"],
    INFP: ["Vicente", "Fatima-Zahra"],
    ENFJ: ["Nina", "Medina"],
    ENFP: ["Ines"],

    ISTJ: [],
    ISFJ: [],
    ESTJ: [],
    ESFJ: ["Evan"],

    ISTP: [],
    ISFP: [],
    ESTP: ["Imen"],
    ESFP: [],
  };

  let genre = {
    Nina: "F",
    Romain: "H",
    Yani: "F",
    Stephane: "H",
    Imen: "F",
    Ines: "F",
    Evan: "H",
    Fatima: "F",
    Medina: "F",
    Vicente: "H",
    Hadjer: "F",
    Julien: "H",
    Ahmed: "H",
    Sami: "H",
    Francois: "H",
    Vincent: "H",
  };

  // c'est cette fonction qu'il
  // faudra modifié, randomiser
  // en cas de multiples correspondance
  // et allez chercher un autre resultat en retirant derniere lettre du code

  function afficherProfil(code, name, matching) {
    const tamere = document.getElementsByClassName("result");
    tamere[0].style.display = "block";
    descriptionProfil[code];
    document.getElementById("code").textContent = code;
    document.getElementById("description").textContent =
      descriptionProfil[code].description;
    document.getElementById("conseillé").textContent = "";

    let intro_phrase = "";
    if (genre[name] == "H") {
      intro_phrase = "Votre conseiller en désorientation est : ";
    } else {
      intro_phrase = "Votre conseillère en désorientation est : ";
    }
    document.getElementById("conseillé").textContent =
      intro_phrase +
      name +
      " avec un score de compatibilité de " +
      matching.toString();
      
 
  }


  // choisir la lettre en fonction des réponses de l'user grace a une fonction pour éviter les répétitions de code
  function calculLettre(lesreponses, duoLettre) {
    // je déclare ma fonction et ses criteres que je nomme comme je veux puisque je renseignerai les criteres exact lorsque j'appellerai ma fonction

    let compteurimpair = 0; // j'initialise 2 compteurs à 0, le premier pour les réponse menant a la premiere lettre le second pour les reponses menant a la seconde lettre
    let compteurpair = 0; // ces 2 compteur serviront a se comparer entre eux, le compteur ayant le + de réponses définira la lettre a garder

    lesreponses.forEach((reponse, index) => {
      // je crée une boucle qui va lire les reponses du client avec comme critere la reponse et son index
      if (reponse.checked) {
        if ((index + 1) % 2 !== 0) {
          // j'ajoute 1 à l'index puisqu'il commence a 0 (qui est pair)  hors ma reponse 1 est bien impair
          compteurimpair++; // j'incrémente mon compteur impair si la reponse est coché
        } else {
          compteurpair++; // sinon j'incrémente la réponse paire
        }
      }
    });

    return compteurimpair > compteurpair ? duoLettre[0] : duoLettre[1]; // je renvoi comme valeur la lettre qui a le + de réponses coché
  }

  function verificationAbsenceReponse() {
    // Récupérer tous les groupes de questions
    const questions = [
      "question1IE",
      "question2IE",
      "question3IE",
      "question1NS",
      "question2NS",
      "question3NS",
      "question1TF",
      "question2TF",
      "question3TF",
      "question1JP",
      "question2JP",
      "question3JP",
    ];
    //cette function a été faite avec chatgpt pour empecher le manque de reponses//
    for (let question of questions) {
      // Sélectionne toutes les options pour une question
      const options = document.querySelectorAll(`input[name="${question}"]`);
      const reponseCochee = Array.from(options).some(
        (option) => option.checked
      );

      if (!reponseCochee) {
        // Si aucune réponse n'est cochée, affiche un message et retourne false
        alert(`Veuillez répondre à la question liée à : ${question}.`);
        return false;
      }
    }

    // Si toutes les questions ont une réponse, retourne true
    return true;
  }

  function calculCode() {
    // je crée une nouvelle fonction qui déterminera le code final
    let code = ""; // j'initalise la variable code en valeur vide

    // je vais récupérer toutes les réponses pour les 4 lettres
    const reponse1erelettre = Array.from(
      document.querySelectorAll('[id^="firstLetter"]')
    );
    const reponse2emelettre = Array.from(
      document.querySelectorAll('[id^="secondLetter"]')
    );
    const reponse3emelettre = Array.from(
      document.querySelectorAll('[id^="thirdLetter"]')
    );
    const reponse4emelettre = Array.from(
      document.querySelectorAll('[id^="fourthLetter"]')
    );

    code += calculLettre(reponse1erelettre, ["E", "I"]); // j'incrémente ma variable code 4 fois en lancant la function calculLettre pour chaque groupe de questions
    code += calculLettre(reponse2emelettre, ["N", "S"]);
    code += calculLettre(reponse3emelettre, ["T", "F"]);
    code += calculLettre(reponse4emelettre, ["J", "P"]);

    return code; // je retourne le code obtenu
  }

  let codeIndex = [
    ["I", "E"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ];
  let matching = 100;

  function ChangeCodeBySlot(_code, _slot) {
    let letter = _code[_slot];
    if (letter == codeIndex[_slot][0]) {
      letter = codeIndex[_slot][1];
    } else {
      letter = codeIndex[_slot][0];
    }
    _code = _code.slice(0, _slot) + letter + _code.slice(_slot + 1);
    return _code;
  }

  document.getElementById("Button").addEventListener("click", () => {
    // j'ajoute un évenement lorsqu'on clique sur le bouton validez du quizz

    if (!verificationAbsenceReponse()) {
      return; // Stoppe l'exécution si une question est manquante
    }

    let code = calculCode(); // je met a jour ma valeur code en lancant la function calculCode
    let firstcode = code;
    while (true) {
      namelist = dict[code];
      if (namelist.length == 1) {
        afficherProfil(firstcode, namelist[0], matching);
        break;
      } else {
        if (namelist.length > 1) {
          let i = Math.floor(Math.random() * namelist.length);
          afficherProfil(firstcode, namelist[i], matching);
          break;
        } else {
          code = ChangeCodeBySlot(code, matching / 25 - 1);
          matching -= 25;
        }
      }
    }
    matching = 100;
  });
});
