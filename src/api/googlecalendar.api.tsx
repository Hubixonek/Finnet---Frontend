// import { OAuth2Client } from "google-auth-library";

// const GoogleCalendarApi = () => {

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
