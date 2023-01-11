/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        port: 3000,
        db_username: "taraneh",
        db_password: "oX2pnIZtbD7Y4fgU",
        db_cluster: "cluster0",
        db_name: "Tik3D",
        email_service_id: "service_raolvsw",
        email_template_id: "template_3f0cx9p",
        email_public_key: "In7026VtKzSLp2_v2",
        email_private_key: "r5akX87_8FJ9nDPIqmoy",
        _app_phone_provider:
          "phone://AC65dd8cd22b93da124f8135cbef42d19f:c0f0bff43f4a85d544bc528a3e2814af@twilio",
        app_phone_from: "+13149882410",
        twilio_account_sid: "AC65dd8cd22b93da124f8135cbef42d19f",
        twilio_auth_token: "c0f0bff43f4a85d544bc528a3e2814af",
        supabase_key:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWFsbWNrdXh5Ymd1Zm5jbGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4MjU5NTMsImV4cCI6MTk4ODQwMTk1M30.kJSEoW0YKB5YhCq175kyS-RLQJVSVLc8YRydXt0lc5k",
        jwt_Secret: "945F333685685D5FAF92EF6A6CD3C5A0",
        // "e8f904d204ade9ff64c6f662df2041149c4176d8efd3c06d93b4ca9f974d9f74",
        domain: "http://localhost:3000/",
      },
      reactStrictMode: true,
      swcMinify: true,
      images: {
        domains: ["http://localhost:3000/"],
      },
      i18n: {
        locales: ["fa"],
        defaultLocale: "fa",
      },
    };
  } else {
    return {
      reactStrictMode: true,
      swcMinify: true,
      i18n: {
        locales: ["fa"],
        defaultLocale: "fa",
      },
    };
  }
};
