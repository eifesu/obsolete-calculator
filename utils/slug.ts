
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove non-word characters
        .replace(/[\s_-]+/g, '-') // Replace consecutive spaces, underscores, or dashes with a single dash
        .trim(); // Trim leading and trailing spaces

    // You can further customize the slugification process based on your requirements
}


