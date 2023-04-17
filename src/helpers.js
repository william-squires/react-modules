
/**Given an array of items, returns a randomly selected item */

function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

/** removes an item from items, and returns that item. if the item does not
 *  exist in items, returns undefined;
 */

function remove(items, item) {
    const idx = items.indexOf(item);
    if (idx >= 0) {
        const i = items.splice(idx, 1);
        return i[0];
    } else {
        return undefined;
    }
}

export { choice, remove };