/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("¡Sí, la aplicación se ha cargado!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Gracias por abrir este issue jeje ahinara!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
