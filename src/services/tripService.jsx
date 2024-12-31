import model from "../services/apiService";
import {
  dest_items,
  place_items,
  budget_items,
  activityItems,
} from "../common/planTripData";
export async function planTrip({
  dest,
  duration,
  place,
  budget,
  adults,
  children,
  activeActivities,
}) {
  const selectedActivities = activeActivities
    .map((index) => activityItems[index].value)
    .join(", ");

  const prompt = `You are a travel assistant AI that provides detailed trip recommendations for a specific destination.

  I need a detailed trip plan for the following destination:
  - Destination: ${dest_items[dest].name} (${place_items[place].name})
  - Duration: ${duration} days
  - Budget: ${budget_items[budget].name}
  - Adults: ${adults}
  - Children: ${children}
  - Activities: ${selectedActivities}
  
  Return only a valid JSON response strictly in this format:
  {
    "destination": {
      "name": "Name of the destination as a string",
      "country": "Country as a string"
    },
    "hotel_recommendations": [
      {
        "name": "Hotel name as a string",
        "address": "Hotel address as a string",
        "rating": "Hotel rating as a decimal (e.g., 4.8)"
      }
    ],
    "itinerary": [
      {
        "day": "Day number as an integer (e.g., 1)",
        "activities": [
          {
            "name": "Activity name as a string",
            "time": "Activity time as a string (e.g., '9:00am - 12:00pm')"
          }
        ]
      }
    ],
    "tips": [
      "A list of travel tips as strings"
    ]
  }
  
  ### Important:
  1. Return only the JSON object in the exact format above. Do not include any additional text, explanation, or formatting such as markdown or backticks.
  2. If any information is missing, use placeholder values like "N/A".
  3. Validate the output to ensure it is valid JSON.`;
  const result = await model.generateContent(prompt);

  try {
    const parsedResponse = JSON.parse(result.response.text());
    return parsedResponse;
  } catch (error) {
    console.error("Invalid JSON response:", result.response.text());
    throw new Error("AI returned an invalid JSON response.");
  }
}
