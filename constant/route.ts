const ROUTES = {
    HOME:"/",
    SIGN_IN:"/sign-in",
    SIGN_UP:"/sign-up",
    ASK_QUESTIONS:"/ask-question",
    PROFILE: (id:string) =>`/profile/${id}`,
    TAGS: (id:string) =>`/tags/${id}`,
    QUESTION: (id:string) =>`/question/${id}`,
}

export default ROUTES;