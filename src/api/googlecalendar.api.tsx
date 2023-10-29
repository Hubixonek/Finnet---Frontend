// import { OAuth2Client } from "google-auth-library";

// const GoogleCalendarApi = () => {
//   const CLIENT_ID =
//     "119510672222-7niihirklqd6j9k6kn4vjcrl8q260qus.apps.googleusercontent.com";
//   const CLIENT_SECRET = "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";
//   const REDIRECT_URL = "http://localhost:5173";

//   const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

//   const handleGoogleAuth = () => {
//     // Wygeneruj adres URL autoryzacji Google
//     const authUrl = oauth2Client.generateAuthUrl({
//       access_type: "offline", // Uzyskaj dostęp offline, aby uzyskać odświeżany token dostępu
//       scope: "https://www.googleapis.com/auth/calendar", // Zakres uprawnień do kalendarza
//     });

//     // Przekieruj użytkownika na stronę autoryzacji Google
//     window.location.href = authUrl;
//   };

//   return (
//     <div>
//       <button onClick={handleGoogleAuth}>Zaloguj się z Google</button>
//     </div>
//   );
// };

// export default GoogleCalendarApi;
