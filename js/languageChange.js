var mlCodes = [
  {
    code: "bg",
    name: "Bulgarian",
  },
  {
    code: "zh",
    name: "Traditional",
  },
  {
    code: "zh",
    name: "Simplified",
  },

  {
    code: "cs",
    name: "Czech",
  },
  {
    code: "da",
    name: "Danish",
  },

  {
    code: "nl",
    name: "Dutch",
  },

  {
    code: "en",
    name: "English",
  },

  {
    code: "et",
    name: "Estonian",
  },

  {
    code: "de",
    name: "German",
  },
  {
    code: "el",
    name: "Greek",
  },

  {
    code: "hu",
    name: "Hungarian",
  },

  {
    code: "it",
    name: "Italian",
  },

  {
    code: "no",
    name: "Norwegian",
  },

  {
    code: "pl",
    name: "Polish",
  },

  {
    code: "pt",
    name: "Portuguese",
  },

  {
    code: "ro",
    name: "Romanian",
  },

  {
    code: "sk",
    name: "Slovak",
  },
  {
    code: "ru",
    name: "Russian",
  },

  {
    code: "es",
    name: "Spanish",
  },

  {
    code: "sv",
    name: "Swedish",
  },
];

var MLstrings = [
    {
      English: "about",
      Polish: "o mnie",
    },
    {
      English: "technologies",
      Polish: "co umiem",
    },
    {
      English: "projects",
      Polish: "projekty",
    },
    {
      English: "contact",
      Polish: "kontakt",
    },
    {
        English: "Hello, my name is ",
        Polish: "Cześć, mam na imię ",
    },

    {
      English: "Check ",
      Polish: "Sprawdź ",
    },
    {
      English: "A few words about me",
      Polish: "Kilka słow o mnie",
    },
    {
      English: "Hello! My name is Damian and i am Junior Front End developer. I try to make my work as effective as possible and to implement high-quality projects. In particular, I try to make the code I create clean and transparent. When recreating a graphic design, I pay attention to the details and details that are most important. I am hungry for knowledge and interesting projects in which I could spread my wings and learn new technologies and techniques. I try to make up for my limited commercial experience with hard work and hours of study to quickly and efficiently acquire knowledge and skills.",
      Polish: "Cześć, nazywam się Damian i jestem Junior Front End developerem. Staram się by moja praca była jak najbardziej efektywna a wdrażane projekty wysokiej jakości. W szczególności staram się by kod który tworzę był czysty i przejrzysty. Podczas odtwarzania projektu graficznego zwracam uwagę na szczegóły i detale, które są najistotniejsze. Jestem głodny wiedzy i ciekawych projektów w których mógł bym rozwinąć skrzydła oraz poznać nowe technologie i techniki. Swoje niewielkie doświadczenie komercyjne staram się nadrabiać ciężką pracą i godzinami spędzonymi na nauce, by szybko i sprawnie zdobywać wiedzę i umiejętności.",
    },
    {
      English: "Technology stack",
      Polish: "Jakich technologii używam?",
    },
    {
      English: "Chosen",
      Polish: 'Wybrane'
    },
    {
      English: 'projects',
      Polish: 'projekty'
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "code",
      Polish: "kod ",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "code",
      Polish: "kod ",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "code",
      Polish: "kod ",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "code",
      Polish: "kod ",
    },
    {
      English: "Experience",
      Polish: "Doświadczenie",
    },
    {
      English: "Mobile app iJunior",
      Polish: "Aplikacja mobilna iJunior",
    },
    {
      English: "Mobile app iJunior",
      Polish: "Aplikacja mobilna iJunior",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "TECHNOLOGIES",
      Polish: "TECHNOLOGIE",
    },
    {
      English: "Mobile app Gama",
      Polish: "Aplikacja mobilna Gama",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "TECHNOLOGIES",
      Polish: "TECHNOLOGIE",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "TECHNOLOGIES",
      Polish: "TECHNOLOGIE",
    },
    {
      English: "Mobile app mBiuro",
      Polish: "Aplikacja mobilna mBiuro",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "TECHNOLOGIES",
      Polish: "TECHNOLOGIE",
    },
    {
      English: "show ",
      Polish: "zobacz ",
    },
    {
      English: "TECHNOLOGIES",
      Polish: "TECHNOLOGIE",
    },
    {
      English: "contact",
      Polish: "kontakt",
    },
    {
      English: "Copied email to clipboard",
      Polish: "Skopiowano email do schowka",
    },
    {
      English: "Message send succesfully.",
      Polish: "Wiadomośc wysłana poprawnie.",
    },
    {
      English: "send",
      Polish: "wyślij",
    },
    {
      English: "You spent on my site already: ",
      Polish: "Spędziłeś na mojej stronie już: ",
    },
    {
      English: "Thank you for your time!",
      Polish: "Dzięki za poświęcony czas!",
    },
    {
      English: "Wops, something went wrong. Try again for a moment or copy ",
      Polish: "Ups, coś poszło nie tak, spróbuj ponownie za chwilę lub skopiuj ",
    },
    {
      English: "Copied email to clipboard",
      Polish: "Skopiowano email do schowka",
    },
];

// Global var :(
var mlrLangInUse;

var mlr = function({
    dropID = "mbPOCControlsLangDrop",
    stringAttribute = "data-mlr-text",
    chosenLang = "English",
    mLstrings = MLstrings,
    countryCodes = false,
    countryCodeData = [],
} = {}) {
    const root = document.documentElement;

    var listOfLanguages = Object.keys(mLstrings[0]);
    mlrLangInUse = chosenLang;

    (function createMLDrop() {
        var mbPOCControlsLangDrop = document.getElementById(dropID);
        // Reset the menu
        mbPOCControlsLangDrop.innerHTML = "";
        // Now build the options
        listOfLanguages.forEach((lang, langidx) => {
            let HTMLoption = document.createElement("option");
            HTMLoption.value = lang;
            HTMLoption.textContent = lang;
            mbPOCControlsLangDrop.appendChild(HTMLoption);
            if (lang === chosenLang) {
                mbPOCControlsLangDrop.value = lang;
            }
        });
        mbPOCControlsLangDrop.addEventListener("change", function(e) {
            mlrLangInUse = mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value;
            resolveAllMLStrings();
            // Here we update the 2-digit lang attribute if required
            if (countryCodes === true) {
                if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
                    console.warn("Cannot access strings for language codes");
                    return;
                }
                root.setAttribute("lang", updateCountryCodeOnHTML().code);
            }
        });
    })();

    function updateCountryCodeOnHTML() {
        return countryCodeData.find(this2Digit => this2Digit.name === mlrLangInUse);
    }

    function resolveAllMLStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originaltextContent = stringToBeResolved.textContent;
            let resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
};

function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function(stringObj) {
        // Create an array of the objects values:
        let stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(stringToBeResolved);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    } else {
        // If we don't have a match in our language strings, return the original
        return stringToBeResolved;
    }
}

mlr({
    dropID: "mbPOCControlsLangDrop",
    stringAttribute: "data-mlr-text",
    chosenLang: "English",
    mLstrings: MLstrings,
    countryCodes: true,
    countryCodeData: mlCodes,
});