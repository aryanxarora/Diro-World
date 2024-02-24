import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestPWA: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["vite.svg"],
  manifest: {
    "name": "vite-pwa-app",
    "short_name": "vite-pwa-app",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "lang": "en",
    "scope": "/",
    "id": "vite-pwa-app",
    "theme_color": "#ffffff",
    "description": "desc",
    "icons": [
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/maskable_icon_x192",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "categories": [
      "productivity",
      "utilities"
    ],
    "orientation": "portrait",
    "display_override": [
      "standalone",
      "fullscreen",
      "window-controls-overlay",
      "minimal-ui",
      "browser"
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestPWA)],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
