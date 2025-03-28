// Get a reference to the download button element from the HTML
const downloadButton = document.getElementById('downloadButton');

// Check if the button was found (good practice)
if (downloadButton) {
  // Add an event listener that waits for the button to be clicked
  downloadButton.addEventListener('click', () => {
    console.log('Download button clicked! Initiating download...'); // Optional message for browser console

    // --- IMPORTANT ---
    // Set this to the EXACT name of your zip file.
    const fileName = 'MythicBot.zip';
    // --- IMPORTANT ---

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the link's 'href' attribute to the path of your file.
    // Since the file is in the same folder, just the filename is needed.
    link.href = fileName;

    // Set the 'download' attribute. This tells the browser to download the file
    // and suggests the filename to save it as.
    link.download = fileName;

    // Programmatically click the hidden link to trigger the download
    document.body.appendChild(link); // Append to body (needed for Firefox)
    link.click();                   // Simulate a click
    document.body.removeChild(link); // Remove the temporary link from the document
  });
} else {
  console.error('Error: Download button element not found!');
}