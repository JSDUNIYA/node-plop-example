export default function (plop) {
  plop.setGenerator("post", {
    description: "Generate Gasby",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "what do you want to title this post",
      },
      {
        type: "input",
        name: "description",
        message: "what is this post about?",
      },
    ],
    actions: [
        {
            type:"add",
            path:"contact/blog/{{dashCase title}}/index.md",
            templateFile:"templates/post.hbs",
            data:{
                date: new Date()
            }
        }
    ],
  });
}
