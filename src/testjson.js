
const input = `
------------------------

Day 1:
Morning: Visit La Sagrada Familia - Carrer de Mallorca, 401, 08013 Barcelona, Spain - Estimated budget: Entrance fee is around €26 per person.
Afternoon: Explore Park Güell - Carrer d'Olot, s/n, 08024 Barcelona, Spain - Estimated budget: Entrance fee is around €10 per person.
Evening: Stroll along La Rambla - La Rambla, 08002 Barcelona, Spain - Estimated budget: Free.

----------------------------------

Day 2:
Morning: Visit Casa Batlló - Passeig de Gràcia, 43, 08007 Barcelona, Spain - Estimated budget: Entrance fee is around €24.50 per person.
Afternoon: Explore the Gothic Quarter - Barri Gòtic, 08002 Barcelona, Spain - Estimated budget: Free.
Evening: Watch the Magic Fountain Show at Montjuïc - Plaça de Carles Buïgas, 1, 08038 Barcelona, Spain - Estimated budget: Free.

----------------------------------

Day 3:
Morning: Visit the Picasso Museum - Carrer Montcada, 15-23, 08003 Barcelona, Spain - Estimated budget: Entrance fee is around €12 per person.
Afternoon: Relax at Barceloneta Beach - Passeig Marítim de la Barceloneta, 08003 Barcelona, Spain - Estimated budget: Free.
Evening: Enjoy the nightlife at Poble Espanyol - Av. Francesc Ferrer i Guàrdia, 13, 08038 Barcelona, Spain - Estimated budget: Entrance fee is around €12 per person.   

----------------------------------

Summary of Places:
[Day 1] La Sagrada Familia - Carrer de Mallorca, 401, 08013 Barcelona, Spain        
[Day 1] Park Güell - Carrer d'Olot, s/n, 08024 Barcelona, Spain
[Day 1] La Rambla - La Rambla, 08002 Barcelona, Spain
[Day 2] Casa Batlló - Passeig de Gràcia, 43, 08007 Barcelona, Spain
[Day 2] Gothic Quarter - Barri Gòtic, 08002 Barcelona, Spain
[Day 2] Montjuïc - Plaça de Carles Buïgas, 1, 08038 Barcelona, Spain
[Day 3] Picasso Museum - Carrer Montcada, 15-23, 08003 Barcelona, Spain
[Day 3] Barceloneta Beach - Passeig Marítim de la Barceloneta, 08003 Barcelona, Spain
[Day 3] Poble Espanyol - Av. Francesc Ferrer i Guàrdia, 13, 08038 Barcelona, Spain 
`;


const lines = input.trim().split('\n');
const formattedData = {
  id: "ID",
  plans: []
};

for (const line of lines) {
  const matches = /\[Day (\d+)\] (.+) - (.+)/.exec(line);
  if (matches) {
    const dayNo = parseInt(matches[1]);
    const place = matches[2].trim();
    const address = matches[3].trim();
    
    formattedData.plans.push({
      Place: place,
      "Address of Places": address,
      dayNo
    });
  }
}

const jsonData = JSON.stringify(formattedData, null, 2);
console.log(jsonData);