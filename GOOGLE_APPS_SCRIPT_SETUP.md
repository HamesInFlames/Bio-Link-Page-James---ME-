# Google Apps Script Setup

This guide will help you set up a Google Apps Script to receive form submissions and send them to your email.

## Step 1: Create the Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **New Project**
3. Delete any code in the editor
4. Paste this code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Your email address
    const YOUR_EMAIL = "xoxoksh05@gmail.com";
    
    // Build the email
    const subject = data.type === "girlfriend" 
      ? "💗 New Girlfriend Application!" 
      : "👋 New Friend Application!";
    
    let body = `
NEW APPLICATION
===============
Type: ${data.type === "girlfriend" ? "💗 Girlfriend" : "👋 Friend"}
${data.friendType ? `Friend Type: ${data.friendType}` : ""}
Submitted: ${new Date().toLocaleString()}

ANSWERS
-------
${Object.entries(data.answers).map(([q, a]) => `Q: ${q}\nA: ${a}`).join("\n\n")}

CONTACT INFO
------------
Email: ${data.contact}
Consent to contact: ${data.consent ? "Yes ✓" : "No"}
    `;
    
    // Send the email
    GmailApp.sendEmail(YOUR_EMAIL, subject, body);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight requests
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Click **File > Save** and name your project (e.g., "Link Page Form Handler")

## Step 2: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in:
   - **Description**: "Form submission handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts
   - If you see "Google hasn't verified this app", click **Advanced** > **Go to [project name] (unsafe)**
   - Click **Allow**
6. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/XXXXX.../exec
   ```

## Step 3: Update Your Code

1. Open `src/config/content.js`
2. Find the `FORM_CONFIG` section at the bottom
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web App URL:

```javascript
export const FORM_CONFIG = {
  scriptUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  fallbackEmail: "xoxoksh05@gmail.com",
};
```

## Step 4: Test It

1. Go to your link page
2. Fill out an application
3. Submit it
4. Check your email!

## Troubleshooting

### "Script function not found: doPost"
Make sure you saved the script after pasting the code.

### "Authorization required"
You need to run the authorization flow again. Go to the script editor and run any function manually first.

### "Access denied"
Make sure "Who has access" is set to "Anyone" in the deployment settings.

### Not receiving emails
1. Check your spam folder
2. Make sure the email address in the script is correct
3. Check the Apps Script execution logs: **View > Execution log**

## Optional: Save to Google Sheets

If you also want to save submissions to a spreadsheet, replace the script with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Email settings
    const YOUR_EMAIL = "xoxoksh05@gmail.com";
    
    // Spreadsheet settings (optional)
    const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"; // Get from URL of your Google Sheet
    
    // Build email
    const subject = data.type === "girlfriend" 
      ? "💗 New Girlfriend Application!" 
      : "👋 New Friend Application!";
    
    let body = `
NEW APPLICATION
===============
Type: ${data.type === "girlfriend" ? "💗 Girlfriend" : "👋 Friend"}
${data.friendType ? `Friend Type: ${data.friendType}` : ""}

ANSWERS
-------
${Object.entries(data.answers).map(([q, a]) => `Q: ${q}\nA: ${a}`).join("\n\n")}

CONTACT
-------
Email: ${data.contact}
Consent: ${data.consent ? "Yes" : "No"}
    `;
    
    // Send email
    GmailApp.sendEmail(YOUR_EMAIL, subject, body);
    
    // Save to spreadsheet (optional)
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
      sheet.appendRow([
        new Date(),
        data.type,
        data.friendType || "",
        JSON.stringify(data.answers),
        data.contact,
        data.consent
      ]);
    } catch (sheetError) {
      console.log("Sheet error (optional):", sheetError);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Then create a Google Sheet and copy its ID from the URL.
