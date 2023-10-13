export const CommentsData = [
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: []
    },
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: [{
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: []
        }, {
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: []
        },]
    },
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: [{
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: []
        }, {
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: []
        },]
    },
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: [{
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: []
        }, {
            name: "yogeshwar",
            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
            replies: [{
                name: "yogeshwar",
                text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                replies: [{
                    name: "yogeshwar",
                    text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                    replies: [{
                        name: "yogeshwar",
                        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                        replies: [{
                            name: "yogeshwar",
                            text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                            replies: [{
                                name: "yogeshwar",
                                text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                                replies: []
                            },
                            {
                                name: "yogeshwar",
                                text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
                                replies: []
                            },]
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: []
    },
    {
        name: "yogeshwar",
        text: "lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar lorem ipsum dollar ",
        replies: []
    },
]

export const Comments = ({ data }) => {
    const { name, text } = data;
    return (
        <div className="flex bg-slate-100 m-1 p-1 ">
            <img className="w-11 h-11 p-1 m-1" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
            <div>
                <h2 className="font-bold">{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}


const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) => (
            <div className="">
                <Comments key={index} data={comment} />

                <div className="ml-5 pl-5 border-l border-black">
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        ))
    );
};


export const CommentContainer = () => {
    return (
        
            <div className=" p-5 m-5">
                <h1 className="font-bold text-lg">Comments:</h1>
            <CommentList comments={CommentsData} />
            </div>
    )
}
