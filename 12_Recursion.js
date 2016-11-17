var countDownFrom(n) {
    if (n === 0) {
        return;
    }

    console.log(n);

    countDownFrom(n - 1);
}

countDownFrom(10);

var commentsTree = [
    {
        id: 1,
        text: 'Recursion is fun!',
        comments: [
            {
                id: 2,
                text: 'Yes, indeed!',
                comments: [
                    {
                        id: 3,
                        text: 'Yaaazzz! I agree with you guys',
                        comments: [
                            {
                                id: 11,
                                text: '😁',
                            },
                            {
                                id: 13,
                                text: '😂',
                            },
                        ]
                    },
                ]
            },
            {
                id: 9,
                text: 'True',
            },
        ],
    },
    {
        id: 4,
        text: 'Functional programming is cool!',
        comments: [
            {
                id: 5,
                text: 'Yep!',
            },
        ],
    },
];

var countComments = (comments) => {
    return comments.reduce(
        (count, comment) => (
            comment.comments
            ? count + 1 + countComments(comment.comments)
            : count + 1
        ),
        0
    );
};

console.log(
    countComments(comments)
);
