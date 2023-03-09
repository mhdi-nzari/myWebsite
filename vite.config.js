import { defineConfig , loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
// export default defineConfig({


// });

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
   
  define: {
    "process.env": process.env,
  },

      plugins: [
        react(),

        svgrPlugin({
          svgrOptions: {
            icon: true,
          },
        }),
      ],

  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  });
}



