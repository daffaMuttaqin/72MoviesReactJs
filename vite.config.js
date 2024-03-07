import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Untuk load ENV
    define: {
      "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
      "process.env.REACT_APP_TMDB_KEY": JSON.stringify(env.REACT_APP_TMDB_KEY),
      "process.env.REACT_APP_IMG_URL": JSON.stringify(env.REACT_APP_IMG_URL),
    },
    plugins: [react()],
  };
});
