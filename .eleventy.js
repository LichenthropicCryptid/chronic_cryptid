module.exports = function (eleventyConfig) {

    eleventyConfig.setQuietMode(true);
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy("content/assets");
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

    return {
        htmlTemplateEngine: "njk",
        dir: {
            input: "content",
            output: "public"
        },
    };
};