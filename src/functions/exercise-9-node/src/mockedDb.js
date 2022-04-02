const articles = [
    {
        id: 0,
        description: "Mazás",
        retailPrice: 1.20,
        vatType: 2
    },
    {
        id: 1,
        description: "Laranxas",
        retailPrice: 1.0,
        vatType: 1
    },
    {
        id: 2,
        description: "Crema facial",
        retailPrice: 5.99,
        vatType: 0
    },
    {
        id: 3,
        description: "Portaestandarte",
        retailPrice: 54.99,
        vatType: 0
    },
    {
        id: 4,
        description: "Pan",
        retailPrice: 1.20,
        vatType: 2
    },
]

const cart = [
    {
        article: articles[0],
        units: 3
    },
    {
        article: articles[2],
        units: 1
    },
    {
        article: articles[4],
        units: 5
    },
]

module.exports = {
    articles,
    cart,
}