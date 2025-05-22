
"use server";
import { FormData } from "@/app/landing-form/page";
import { google } from "googleapis";
import { format } from "date-fns-tz";

async function getGoogleSheetsClient() {
  const auth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendSheetData(values: FormData) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;
  const sheetName = "Sheet1";

  // Get current number of rows (for serial number)
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:A`, 
  });

  const serial = existing.data.values?.length || 1; 
  const istDate = format(new Date(), "dd MMMM yyyy, h:mm a zzz", {
    timeZone: "Asia/Kolkata",
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          serial,
          istDate,
          values.firstName,
          values.lastName,
          values.email,
          values.phone,
          values.experience,
        ],
      ],
    },
  });

  return response.data;
}
