# formspree-example-netlify-plugin

An event registration website powered by Vite and React, configured for easy deployment to Netlify.

![Maxcon website screenshot](/public/screenshot.png?raw=true "Maxcon 2024 event website screenshot")

This template includes the Formspree CLI plugin, along with a formspree.json file pre-configured for a registration form that sends to Discord.

![Discord screenshot](/public/discord-screenshot.png?raw=true "Submission received screenshot")

## How to deploy

Just click the button!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/formspree/formspree-example-netlify-plugin)


You'll be asked to include the following values to populate the site's environment variables:

```
VITE_FORMSPREE_PROJECT_ID = "Formspree CLI project ID"
FORMSPREE_DEPLOY_KEY = "Formspree CLI project deploy key"
DISCORD_WEBHOOK_URL = "Discord webhook URL"
```

To get the Formspree CLI project ID and deploy key, create a new CLI project. The project id and deploy key will be shown in the sidebar.

To create a discord webhook to receive form submissions follow the guidance on the discord help site: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
