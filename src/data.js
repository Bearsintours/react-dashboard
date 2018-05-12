const data = {
    "day": {
        "orders": 20,
        "completed": 14,
        "total": 88.12,
        "sales": [
            {"hoodie": '10'},
            {"cap" : '6'},
            {"bracelet": '7'}
        ],
        "breakdown": [
            {name: '8', hoodie: 10, hat: 6, bracelet: 4},
            {name: '12', hoodie: 6, hat: 3, bracelet: 6},
            {name: '16', hoodie: 7, hat: 4, bracelet: 8},
            {name: '20', hoodie: 6, hat: 2, bracelet: 3},
        ]
    },
    "week": {
        "orders": 120,
        "completed": 74,
        "total": 448.50,
        "sales": [
            {"hoodie": 60},
            {"cap" : 39},
            {"bracelet": 53}
        ],
        "breakdown": [
            {name: 'Mon', hoodie: 10, hat: 6, bracelet: 4},
            {name: 'Tue', hoodie: 6, hat: 3, bracelet: 6},
            {name: 'Wed', hoodie: 7, hat: 4, bracelet: 8},
            {name: 'Thu', hoodie: 6, hat: 2, bracelet: 3},
            {name: 'Fri', hoodie: 9, hat: 5, bracelet: 5},
            {name: 'Sat', hoodie: 13, hat: 4, bracelet: 8},
            {name: 'Sun', hoodie: 10, hat: 7, bracelet: 2},
        ]
    },
    "month": {
        "orders": 520,
        "completed": 364,
        "total": 2045.66,
        "sales": [
            {"hoodie": 237},
            {"cap" : 174},
            {"bracelet": 201}
        ],
        "breakdown": [
            {name: '05', hoodie: 10, hat: 6, bracelet: 4},
            {name: '10', hoodie: 6, hat: 3, bracelet: 6},
            {name: '15', hoodie: 7, hat: 4, bracelet: 8},
            {name: '20', hoodie: 6, hat: 2, bracelet: 3},
            {name: '25', hoodie: 9, hat: 5, bracelet: 5},
            {name: '31', hoodie: 13, hat: 4, bracelet: 8},
        ]
    },
    "items": [
        {
        "name": "hoodie",
        "price": 74},
        {
        "name": "cap",
        "price": 69.50
        },
        {
        "name": "bracelet",
        price: 39.05
    }]
}

export default data;