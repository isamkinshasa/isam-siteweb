const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "lpesrytz",
  dataset: "isamkin",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function test() {
  try {
    const allDocs = await client.fetch(`*[]`);
    console.log("Total docs:", allDocs.length);
    if(allDocs.length > 0) {
      console.log("Types present:", [...new Set(allDocs.map(d => d._type))]);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
