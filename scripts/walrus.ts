import fs from "fs"
import path from "path"

const filePath = path.join("./dist/index.html");

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log("Converting build to walrus compatible...")
    const headRegex = /<head[^>]*>([\s\S]*?)<\/head>/;
    const match = data.match(headRegex);

    if (match && match[1]) {
        let headContent = match[1];
        headContent = headContent.replace(/<(\w+)\b[^>]*>/g, (tag) => {
            // Replace type="module" with defer="defer"
            if (tag.includes('type="module"')) {
                tag = tag.replace('type="module"', 'defer="defer"');
            }

            // Remove crossorigin attribute from any tag
            tag = tag.replace(/\s*crossorigin="[^"]*"|crossorigin/g, '');

            // Convert absolute to relative paths
            tag = tag.replace(/(href|src)="([^"]+)"/g, (match, attr, url) => {
                if (url.startsWith('/')) {
                    return `${attr}="./${url.slice(1)}"`;
                } else if (!url.startsWith('./')) {
                    return `${attr}="./${url}"`;
                }
                return match;
            });

            return tag;
        });

        // Update header with sanitized version
        const updatedHtml = data.replace(headRegex, `<head>${headContent}</head>`);

        // Write to the index.html
        fs.writeFile(filePath, updatedHtml, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
            }
        });
    }

    console.log("Converted! You can now deploy the dist folder to walrus!")
});