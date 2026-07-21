const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/lpesrytz/g);
    console.log("Does the page contain lpesrytz?", match ? match.length : "No");
    
    // Look for any sanity.io URLs to see what project ID is actually used in the browser
    const urls = data.match(/https:\/\/[a-z0-9]+\.api\.sanity\.io/g);
    console.log("Sanity API URLs found in HTML:", urls ? [...new Set(urls)] : "None");
    
    // Look for project IDs
    const projectIds = data.match(/"projectId":"([^"]+)"/g);
    console.log("Project IDs in HTML:", projectIds ? [...new Set(projectIds)] : "None");
  });
}).on('error', (err) => {
  console.log("Error:", err.message);
});
