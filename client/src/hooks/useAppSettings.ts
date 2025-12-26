// import { useAppContext } from "@/context/appsettings/AppContext"
// import { useEffect } from "react";
// import { getUserSettings } from "@/api/users";

// export function useUserSettings() {
//   const {setTheme, setCurrency, setLoading, setError} = useAppContext();
//   useEffect(() => {
//     let cancelled = false; 
//     const fetchUserSettings = async () => {
//       try {
//         setLoading(true);
//         const data = await getUserSettings(); 
//         if (cancelled) return; 
//         setTheme(data.theme);
//         setCurrency(data.currency);
//       } catch(err) {
//         if (!cancelled) setError("There was a problem fetching app settings"); 
//       } finally {
//         if (!cancelled) setLoading(false); 
//       }
//     }
//     fetchUserSettings();

//     return () => {
//       cancelled = true; 
//     }
//   }, [])
// }