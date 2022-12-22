console.log(sum(10, -7, 4, 5));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);
}