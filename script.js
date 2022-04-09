const categories = ['apple', 'bananas', 'cat']

const data = [
    {'category': 'bananas', 'status': 'active'},
    {'category': 'cat', 'status': 'archive'},
    {'category': 'cat', 'status': 'archive'},
    {'category': 'apple', 'status': 'archive'},
    {'category': 'cat', 'status': 'active'},
    {'category': 'bananas', 'status': 'active'},
]



const start = categories.map(category => ({category, active: 0, archive: 0}));

const result = data.reduce((acc, noteItem) => {
    const idx = start.findIndex(item => item.category === noteItem.category);
    if(idx !== -1) start[idx][noteItem.status]++
    return start
}, start)
