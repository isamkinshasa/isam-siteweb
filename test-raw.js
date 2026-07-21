async function fetchSanity() {
  const projectId = 'lpesrytz';
  const dataset = 'isamkin';
  const query = encodeURIComponent('*[]');
  const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`;
  
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("Status:", response.status);
    console.log("Result length:", json.result ? json.result.length : 'No result');
    if (json.result && json.result.length > 0) {
      console.log("First document:", JSON.stringify(json.result[0], null, 2));
    } else {
      console.log("Full JSON:", json);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

fetchSanity();
