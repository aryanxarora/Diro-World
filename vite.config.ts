import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestPWA: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["vite.svg"],
  manifest: {
    "name": "Diro's World",
    "short_name": "Diro's World",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#4F4A4E",
    "lang": "en",
    "scope": "/",
    "id": "diro",
    "theme_color": "#4F4A4E",
    "description": "The mystical world of Diro",
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
