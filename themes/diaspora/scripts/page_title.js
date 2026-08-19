/**
 * Page Title Helper
 * @description Generate page title.
 * @example
 *     <%- page_title() %>
 */
hexo.extend.helper.register("page_title", function () {
    var title = this.config.title
    if (this.config.subtitle) {
        title += ' - ' + this.config.subtitle;
    }

    if (this.is_archive()) {
        title = this.__("nav.archive");

        if (this.is_month()) {
            title += ": " + this.page.year + "/" + this.page.month;
        } else if (this.is_year()) {
            title += ": " + this.page.year;
        }
        title += ' - ' + this.config.title;
    } else if (this.is_category()) {
        title = this.page.category + ' - ' + this.config.title;
    } else if (this.is_tag()) {
        title = this.page.tag + ' - ' + this.config.title;
    } else if (this.is_post()) {
        title = this.page.title + ' - ' + this.config.title;
    }

    return title;
});
