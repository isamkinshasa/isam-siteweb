const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "lpesrytz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function test() {
  try {
    const events = await client.fetch(`*[_type == "event"]`);
    console.log("Events (production):", events);
    
    const articles = await client.fetch(`*[_type == "article"]`);
    console.log("Articles (production):", articles.length);
    
    // Check all types in the dataset
    const types = await client.fetch(`array::unique(*[]._type)`);
    console.log("All Document Types (production):", types);
  } catch (e) {
    console.error("Error with production dataset:", e.message);
  }
}

test();
