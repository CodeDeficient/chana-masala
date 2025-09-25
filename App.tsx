import React from 'react';

const recipeData = {
  title: "Authentic Chana Masala",
  subtitle: "(Chickpea Masala)",
  imageUrl: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "This restaurant-style Chana masala is a popular Indian dish of chickpeas cooked in an onion-tomato gravy. It goes great as a side with rice, paratha, or roti.",
  source: "Swasthi's Recipes",
  servings: 4,
  author: "Swasthi",
  authorUrl: "https://www.indianhealthyrecipes.com/about-me/",
  timings: {
    prep: "10 mins",
    cook: "40 mins",
    total: "50 mins",
  },
  ingredients: {
    main: [
      "1 cup chana (dried raw chickpeas) (or 3 cups soaked or 2 - 15 oz cans)",
      "1½ cups water (to pressure cook, + more to make gravy)",
    ],
    masala: [
      "2 tablespoon oil or as needed",
      "1 small bay leaf (optional)",
      "1 inch cinnamon (optional)",
      "2 cloves (optional)",
      "2 green cardamoms (optional)",
      "1½ cups onions (fine chopped, 2 large)",
      "1 green chili slit (optional)",
      "¾ to 1 tablespoon ginger garlic paste (or 1½ tbsp each fine chopped)",
      "1½ cups tomatoes (fine chopped, 3 large or 1½ cups tomato puree or whole peeled tomatoes)",
      "¾ teaspoon salt (+ more to adjust to taste)",
      "½ teaspoon turmeric",
      "1½ teaspoons Kashmiri red chili powder (adjust to taste)",
      "1 teaspoon garam masala (adjust to taste)",
      "2 teaspoon coriander powder",
      "½ teaspoon cumin powder (optional)",
      "1 teaspoon kasuri methi (dried fenugreek leaves) (optional)",
      "¼ teaspoon amchur (dried mango powder) (optional)",
      "2 tbsp coriander leaves (cilantro chopped finely)",
    ],
  },
  instructions: {
    prepareChickpeas: {
      title: "Prepare Chickpeas (Skip this section to use canned chickpeas)",
      steps: [
        "Rinse dried chickpeas at least thrice. Soak them in 3 ½ to 4 cups of water overnight or for at least 8 hours.",
        "Drain the water and rinse them well. Pour water and pressure cook for 5 to 6 whistles on a stovetop cooker. You may also cook in an instant pot for 18 minutes on a high pressure. Let the pressure drop naturally.",
        "Make sure your chickpeas are soft and tender. Squeeze a chickpea to test, it should get mashed fully. If not cook them for a little longer.",
      ],
    },
    makeMasala: {
      title: "How to make Chickpea Masala",
      steps: [
        "Heat a large pot and pour oil. When the oil turns slightly hot, add the whole spices – cinnamon, cloves, cardamoms and bay leaf.",
        "When they begin to sizzle add the onions and green chili. Saute until they turn light golden.",
        "Add ginger garlic paste and saute for a minute without burning.",
        "Add tomatoes and salt. Let cook until mushy, pulpy and thick.",
        "Stir in red chilli powder, turmeric, garam masala, coriander powder and cumin powder. Saute until the masala begins to smell good, for about 3 to 4 mins.",
        "Optional – If you want a smooth curry, cool this, discard the bay leaf, green chili and cinnamon. Blend in a blender to a smooth or coarse paste to suit your liking. I prefer to blend in 2 tbsps cooked chana along with the onion tomato masala. Add that puree back to the pan.",
        "Add the chana along with the chana stock or water (1½ cups). Pour another ¾ to 1 cup water. If you don't puree the onion tomato masala, you will require lesser water. If using canned chickpeas, drain and rinse them before adding with 1½ cups water.",
        "Mix well. Taste test and add more salt. Cover and simmer for 15 minutes.",
        "When the consistency is thick (check pics), add amchur powder (optional) and kasuri methi.",
        "Garnish Chana masala with coriander leaves. Sprinkle some lemon juice if required. Serve with Basmati Rice, Jeera Rice, Naan or Chapati.",
      ],
    },
    instantPot: {
        title: "Instant Pot Chana Masala",
        steps: [
            "To make the recipe in Instant pot, make the onion tomato masala on saute mode. Optionally If you want you may cool and blend this. Add the soaked chickpeas with 2 cups water. Deglaze and Pressure cook on high for 35 minutes. When the pressure drops, open the lid. Cook on a saute mode for a few minutes until thick. Add kasuri methi and amchur."
        ]
    }
  },
  nutrition: [
    { label: "Calories", value: "193kcal" }, { label: "Carbohydrates", value: "24g" },
    { label: "Protein", value: "6g" }, { label: "Fat", value: "9g" },
    { label: "Saturated Fat", value: "1g" }, { label: "Polyunsaturated Fat", value: "3g" },
    { label: "Monounsaturated Fat", value: "5g" }, { label: "Trans Fat", value: "1g" },
    { label: "Sodium", value: "519mg" }, { label: "Potassium", value: "511mg" },
    { label: "Fiber", value: "7g" }, { label: "Sugar", value: "8g" },
    { label: "Vitamin A", value: "1131IU" }, { label: "Vitamin C", value: "25mg" },
    { label: "Calcium", value: "70mg" }, { label: "Iron", value: "3mg" },
  ],
  originalRecipeUrl: "https://www.indianhealthyrecipes.com/chana-masala/"
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 border-b-2 border-amber-500 pb-3">
        {children}
    </h2>
);

const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">
        {children}
    </h3>
);

const IngredientItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start mb-2">
        <span className="text-amber-600 mr-3 mt-1">&#10003;</span>
        <span className="text-gray-700">{children}</span>
    </li>
);

const InstructionStep: React.FC<{ step: number; children: React.ReactNode }> = ({ step, children }) => (
     <li className="flex items-start mb-4">
        <span className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500 text-white font-bold text-lg mr-4 flex-shrink-0">{step}</span>
        <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
);

const NutritionFact: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="bg-amber-50 p-3 rounded-lg text-center">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-bold text-gray-800">{value}</p>
    </div>
);

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
            <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img src={recipeData.imageUrl} alt="Chana Masala" className="w-full h-[32rem] object-cover" />

                <div className="p-6 sm:p-10">
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{recipeData.title}</h1>
                        <p className="text-xl text-gray-600 mt-2">{recipeData.subtitle}</p>
                        <p className="max-w-2xl mx-auto text-gray-700 mt-4">{recipeData.description}</p>
                        <div className="mt-4 text-sm text-gray-500">
                            <span>Servings: {recipeData.servings}</span>
                            <span className="mx-2">|</span>
                            <span>By: <a href={recipeData.authorUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">{recipeData.author}</a></span>
                        </div>
                    </header>

                    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 bg-slate-50 p-6 rounded-xl border border-slate-200">
                         <div className="flex flex-col items-center text-center">
                            <span className="font-bold text-gray-700">Prep Time</span>
                            <span className="text-gray-600">{recipeData.timings.prep}</span>
                        </div>
                         <div className="flex flex-col items-center text-center">
                            <span className="font-bold text-gray-700">Cook Time</span>
                            <span className="text-gray-600">{recipeData.timings.cook}</span>
                        </div>
                         <div className="flex flex-col items-center text-center">
                            <span className="font-bold text-gray-700">Total Time</span>
                            <span className="text-gray-600">{recipeData.timings.total}</span>
                        </div>
                    </section>
                    
                    <section>
                        <SectionTitle>Ingredients</SectionTitle>
                        <ul>
                            {recipeData.ingredients.main.map((item, index) => <IngredientItem key={`main-${index}`}>{item}</IngredientItem>)}
                        </ul>
                        <SubSectionTitle>For the Masala</SubSectionTitle>
                        <ul>
                            {recipeData.ingredients.masala.map((item, index) => <IngredientItem key={`masala-${index}`}>{item}</IngredientItem>)}
                        </ul>
                    </section>

                    <section>
                        <SectionTitle>Instructions</SectionTitle>
                        <div>
                            <SubSectionTitle>{recipeData.instructions.prepareChickpeas.title}</SubSectionTitle>
                            <ol>
                                {recipeData.instructions.prepareChickpeas.steps.map((step, index) => (
                                    <InstructionStep key={`prep-${index}`} step={index + 1}>{step}</InstructionStep>
                                ))}
                            </ol>
                        </div>
                         <div>
                            <SubSectionTitle>{recipeData.instructions.makeMasala.title}</SubSectionTitle>
                            <ol>
                                {recipeData.instructions.makeMasala.steps.map((step, index) => (
                                    <InstructionStep key={`make-${index}`} step={index + 1}>{step}</InstructionStep>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <SubSectionTitle>{recipeData.instructions.instantPot.title}</SubSectionTitle>
                            <ol>
                                {recipeData.instructions.instantPot.steps.map((step, index) => (
                                    <InstructionStep key={`instant-${index}`} step={index + 1}>{step}</InstructionStep>
                                ))}
                            </ol>
                        </div>
                    </section>
                    
                    <section>
                        <SectionTitle>Nutrition</SectionTitle>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                           {recipeData.nutrition.map((fact, index) => (
                                <NutritionFact key={index} label={fact.label} value={fact.value} />
                           ))}
                        </div>
                    </section>

                    <footer className="text-center mt-12 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            {/* FIX: Corrected property name from sourceUrl to originalRecipeUrl. The sourceUrl property does not exist on the recipeData object. */}
                            Original recipe from <a href={recipeData.originalRecipeUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">{recipeData.source}</a>.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Full recipe details at: <a href={recipeData.originalRecipeUrl} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">{recipeData.originalRecipeUrl}</a>
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default App;